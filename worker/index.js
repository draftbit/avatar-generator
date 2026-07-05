// Personas Worker: serves the static site plus a small API surface.
//
// Routes:
//   GET /api/options   — valid style names and color palettes (JSON, CORS *)
//   GET /<code>        — short share link (base64url avatar code); serves the
//                        SPA shell, which decodes the code client-side
//   everything else    — static assets (with 404.html for misses)

import config from "../src/data/config.json";

// Mirrors CODE_PATH in src/helpers/shareUrl.js. Real asset paths never
// match: they contain "." or "/" (e.g. /favicon.png, /fonts/...).
const CODE_PATH = /^\/[A-Za-z0-9_-]{8,64}$/;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    if (url.pathname === "/api/options") {
      return Response.json(config, {
        headers: { ...CORS, "Cache-Control": "public, max-age=3600" },
      });
    }

    if (request.method === "GET" && CODE_PATH.test(url.pathname)) {
      // Serve the app shell; the client decodes the code from the path.
      const shell = new URL("/", url);
      return env.ASSETS.fetch(new Request(shell, request));
    }

    return env.ASSETS.fetch(request);
  },
};
