// Personas Worker: serves the static site plus a small API surface for
// humans, scripts, and LLM agents.
//
// Routes:
//   GET  /api/options     — valid style names and color palettes (JSON)
//   GET  /api/avatar.svg  — composed avatar image; params as on the site
//                           (?hair=Mohawk&hairColor=F2C94C...), or
//                           ?code=<shortcode>, or ?random=1
//   POST /mcp             — Model Context Protocol server (streamable HTTP,
//                           stateless JSON-RPC)
//   GET  /<code>          — short share link; serves the SPA shell, which
//                           decodes the code client-side
//   everything else       — static assets (404.html for misses)

import config from "../src/data/config.json";
import { render } from "../src/components/SvgLoader.bs.js";
import { decodeCodeToStyles, encodeStylesToCode } from "../src/helpers/shareUrl.js";

// Mirrors CODE_PATH in src/helpers/shareUrl.js. Real asset paths never
// match: they contain "." or "/" (e.g. /favicon.png, /fonts/...).
const CODE_PATH = /^\/[A-Za-z0-9_-]{8,64}$/;

const HEX = /^[0-9A-Fa-f]{6}$/;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Mcp-Protocol-Version",
};

// [paramKey, config list of valid names]
const STYLE_PARAMS = [
  ["hair", "hairStyles"],
  ["facialHair", "facialHairStyles"],
  ["body", "bodyStyles"],
  ["eyes", "eyeStyles"],
  ["mouth", "mouthStyles"],
  ["nose", "noseStyles"],
  ["accessories", "accessoryStyles"],
];

const COLOR_PARAMS = [
  "skinColor",
  "hairColor",
  "facialHairColor",
  "bodyColor",
  "accessoriesColor",
  "bgColor",
];

// The classic Personas default; deterministic so responses stay cacheable.
const DEFAULT_STYLES = {
  skin: "Skin",
  skinColor: "B16A5B",
  hair: "Balding",
  hairColor: "E16381",
  facialHair: "Mustache",
  facialHairColor: "6C4545",
  body: "Square",
  bodyColor: "5A45FF",
  eyes: "Glasses",
  mouth: "Pacifier",
  nose: "Smallround",
  accessories: "None",
  accessoriesColor: "F3B63A",
  bgColor: "FFCC65",
  head: "Head",
};

function randomStyles() {
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  return {
    skin: "Skin",
    head: "Head",
    skinColor: pick(config.skinColors),
    hair: pick(config.hairStyles),
    hairColor: pick(config.hairColors),
    facialHair: pick(config.facialHairStyles),
    facialHairColor: pick(config.facialHairColors),
    body: pick(config.bodyStyles),
    bodyColor: pick(config.bodyColors),
    eyes: pick(config.eyeStyles),
    mouth: pick(config.mouthStyles),
    nose: pick(config.noseStyles),
    accessories: Math.random() < 0.6 ? "None" : pick(config.accessoryStyles),
    accessoriesColor: pick(config.accessoryColors),
    bgColor: pick(config.bgColors),
  };
}

// Overlay validated params onto the default styles. Returns
// { styles, errors } — errors name every rejected param.
function stylesFromParams(params) {
  const styles = { ...DEFAULT_STYLES };
  const errors = [];
  for (const [key, listKey] of STYLE_PARAMS) {
    const v = params.get(key);
    if (v === null) continue;
    if (config[listKey].includes(v)) styles[key] = v;
    else errors.push(`${key}: "${v}" is not one of ${config[listKey].join(", ")}`);
  }
  for (const key of COLOR_PARAMS) {
    const v = params.get(key);
    if (v === null) continue;
    if (HEX.test(v)) styles[key] = v.toUpperCase();
    else errors.push(`${key}: "${v}" is not a 6-digit hex color`);
  }
  return { styles, errors };
}

// Compose the avatar as one SVG, layering each feature in the same
// z-order the app uses (AvatarGenerator.res getZIndex, ascending).
function composeSvg(styles, size = 512) {
  const layers = [
    ["Background", styles.bgColor],
    [styles.skin, styles.skinColor],
    [styles.hair, styles.hairColor],
    [styles.body, styles.bodyColor],
    [styles.mouth, "000000"],
    [styles.facialHair, styles.facialHairColor],
    [styles.nose, styles.skinColor],
    [styles.eyes, "000000"],
    [styles.accessories, styles.accessoriesColor],
  ];
  const inner = layers
    .map(([name, fill]) => render(name, "#" + fill, "64"))
    .filter((svg) => svg !== "")
    .join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">` +
    inner +
    `</svg>`
  );
}

function avatarUrls(origin, styles) {
  const code = encodeStylesToCode(config, styles);
  const params = new URLSearchParams();
  for (const [key] of STYLE_PARAMS) params.set(key, styles[key]);
  for (const key of COLOR_PARAMS) params.set(key, styles[key]);
  return {
    shareUrl: code ? `${origin}/${code}` : `${origin}/?${params}`,
    imageUrl: `${origin}/api/avatar.svg?${params}`,
    params: Object.fromEntries(params),
  };
}

// --- MCP (Model Context Protocol) — stateless streamable HTTP -------------

const MCP_TOOLS = [
  {
    name: "list_avatar_options",
    description:
      "List every valid style name and color palette for Personas avatars. " +
      "Colors are 6-digit hex without '#'; any custom hex is also accepted.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "generate_avatar",
    description:
      "Generate a Personas avatar from the given features. All fields are " +
      "optional; omitted ones use the classic default. Returns a share URL " +
      "and an SVG image URL. Use list_avatar_options for valid values.",
    inputSchema: {
      type: "object",
      properties: Object.fromEntries([
        ...STYLE_PARAMS.map(([key, listKey]) => [
          key,
          { type: "string", description: `One of: ${config[listKey].join(", ")}` },
        ]),
        ...COLOR_PARAMS.map((key) => [
          key,
          { type: "string", description: "6-digit hex color without '#'" },
        ]),
      ]),
      additionalProperties: false,
    },
  },
  {
    name: "random_avatar",
    description: "Generate a random Personas avatar. Returns a share URL and an SVG image URL.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
];

function mcpToolResult(origin, styles) {
  const { shareUrl, imageUrl, params } = avatarUrls(origin, styles);
  const text = JSON.stringify({ shareUrl, imageUrl, markdown: `![Personas avatar](${imageUrl})`, avatar: params }, null, 2);
  return { content: [{ type: "text", text }] };
}

function handleMcp(body, origin) {
  const { id, method, params } = body;
  const reply = (result) => ({ jsonrpc: "2.0", id, result });
  const error = (code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });

  switch (method) {
    case "initialize":
      return reply({
        protocolVersion: params?.protocolVersion || "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "personas", version: "2.0.0" },
      });
    case "ping":
      return reply({});
    case "tools/list":
      return reply({ tools: MCP_TOOLS });
    case "tools/call": {
      const { name, arguments: args = {} } = params ?? {};
      if (name === "list_avatar_options") {
        return reply({ content: [{ type: "text", text: JSON.stringify(config, null, 2) }] });
      }
      if (name === "generate_avatar") {
        const search = new URLSearchParams(
          Object.entries(args).filter(([, v]) => typeof v === "string"),
        );
        const { styles, errors } = stylesFromParams(search);
        if (errors.length > 0) {
          return reply({ content: [{ type: "text", text: "Invalid arguments:\n" + errors.join("\n") }], isError: true });
        }
        return reply(mcpToolResult(origin, styles));
      }
      if (name === "random_avatar") {
        return reply(mcpToolResult(origin, randomStyles()));
      }
      return error(-32602, `Unknown tool: ${name}`);
    }
    default:
      return error(-32601, `Method not supported: ${method}`);
  }
}

// ---------------------------------------------------------------------------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    if (pathname === "/api/options") {
      return Response.json(config, {
        headers: { ...CORS, "Cache-Control": "public, max-age=3600" },
      });
    }

    if (pathname === "/api/avatar.svg") {
      let styles;
      if (url.searchParams.get("random") === "1") {
        styles = randomStyles();
      } else if (url.searchParams.has("code")) {
        styles = decodeCodeToStyles(config, url.searchParams.get("code"));
        if (!styles) {
          return Response.json({ error: "Invalid avatar code" }, { status: 400, headers: CORS });
        }
      } else {
        const { styles: s, errors } = stylesFromParams(url.searchParams);
        if (errors.length > 0) {
          return Response.json({ error: "Invalid parameters", details: errors }, { status: 400, headers: CORS });
        }
        styles = s;
      }
      const isRandom = url.searchParams.get("random") === "1";
      return new Response(composeSvg(styles), {
        headers: {
          ...CORS,
          "Content-Type": "image/svg+xml",
          "Cache-Control": isRandom ? "no-store" : "public, max-age=31536000, immutable",
        },
      });
    }

    if (pathname === "/mcp") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { ...CORS, Allow: "POST, OPTIONS" } });
      }
      let body;
      try {
        body = await request.json();
      } catch {
        return Response.json(
          { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
          { status: 400, headers: CORS },
        );
      }
      // Notifications (no id) get an empty 202 per streamable HTTP.
      if (body.id === undefined || body.id === null) {
        return new Response(null, { status: 202, headers: CORS });
      }
      return Response.json(handleMcp(body, url.origin), { headers: CORS });
    }

    if (request.method === "GET" && CODE_PATH.test(pathname)) {
      // Serve the app shell; the client decodes the code from the path.
      return env.ASSETS.fetch(new Request(new URL("/", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
