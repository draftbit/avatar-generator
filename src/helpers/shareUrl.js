// Serialize avatar styles to/from the URL so avatars are shareable links.
//
// Two forms:
//  - Readable query params (?hair=Mohawk&hairColor=F2C94C...) — what the
//    address bar shows; self-documenting and constructable by hand.
//  - Compact short code (personas.draftbit.com/<code>) — a bit-packed,
//    base64url encoding of the same config, used by the share buttons.
//
// Values are validated on read: style names must exist in config, colors
// must be 6-digit hex (they get interpolated into inline SVG markup, so
// nothing else may pass).
//
// IMPORTANT: the short code stores *indices* into the config.json arrays,
// so those arrays are append-only. Never remove or reorder entries once
// shipped — only append. If a breaking change is ever unavoidable, bump
// CODE_VERSION and add a migration path for old codes.

const HEX = /^[0-9A-Fa-f]{6}$/;

const STYLE_KEYS = [
  ["hair", "hairStyles"],
  ["facialHair", "facialHairStyles"],
  ["body", "bodyStyles"],
  ["eyes", "eyeStyles"],
  ["mouth", "mouthStyles"],
  ["nose", "noseStyles"],
  ["accessories", "accessoryStyles"],
];

const COLOR_KEYS = [
  "skinColor",
  "hairColor",
  "facialHairColor",
  "bodyColor",
  "accessoriesColor",
  "bgColor",
];

// ---------------------------------------------------------------------------
// Compact code v1
//
// Bit layout, in order:
//   4  version (currently 1)
//   style indices into config arrays:
//     5 hair · 4 facialHair · 4 body · 4 eyes · 4 mouth · 4 nose · 3 accessories
//   6 colors in COLOR_KEYS order, each:
//     1 flag · (0 → 5-bit palette index | 1 → 24-bit raw hex)
//
// Palette-only avatars encode to 12 chars; 6 custom colors max out at 31.
// ---------------------------------------------------------------------------

const CODE_VERSION = 1;
const B64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
export const CODE_PATH = /^\/([A-Za-z0-9_-]{8,64})$/;

const STYLE_FIELDS = [
  ["hair", "hairStyles", 5],
  ["facialHair", "facialHairStyles", 4],
  ["body", "bodyStyles", 4],
  ["eyes", "eyeStyles", 4],
  ["mouth", "mouthStyles", 4],
  ["nose", "noseStyles", 4],
  ["accessories", "accessoryStyles", 3],
];

const COLOR_FIELDS = [
  ["skinColor", "skinColors"],
  ["hairColor", "hairColors"],
  ["facialHairColor", "facialHairColors"],
  ["bodyColor", "bodyColors"],
  ["accessoriesColor", "accessoryColors"],
  ["bgColor", "bgColors"],
];

export function encodeStylesToCode(config, styles) {
  let bits = CODE_VERSION.toString(2).padStart(4, "0");
  for (const [key, listKey, width] of STYLE_FIELDS) {
    const idx = config[listKey].indexOf(styles[key]);
    if (idx < 0 || idx >= 1 << width) return null;
    bits += idx.toString(2).padStart(width, "0");
  }
  for (const [key, listKey] of COLOR_FIELDS) {
    const color = styles[key];
    if (!HEX.test(color)) return null;
    const idx = config[listKey].indexOf(color.toUpperCase());
    if (idx >= 0 && idx < 32) {
      bits += "0" + idx.toString(2).padStart(5, "0");
    } else {
      bits += "1" + parseInt(color, 16).toString(2).padStart(24, "0");
    }
  }
  let code = "";
  for (let i = 0; i < bits.length; i += 6) {
    code += B64URL[parseInt(bits.slice(i, i + 6).padEnd(6, "0"), 2)];
  }
  return code;
}

export function decodeCodeToStyles(config, code) {
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(code)) return null;
  let bits = "";
  for (const ch of code) {
    bits += B64URL.indexOf(ch).toString(2).padStart(6, "0");
  }
  let pos = 0;
  const read = (width) => {
    if (pos + width > bits.length) return null;
    const v = parseInt(bits.slice(pos, pos + width), 2);
    pos += width;
    return v;
  };
  if (read(4) !== CODE_VERSION) return null;
  const styles = { skin: "Skin", head: "Head" };
  for (const [key, listKey, width] of STYLE_FIELDS) {
    const idx = read(width);
    if (idx === null || idx >= config[listKey].length) return null;
    styles[key] = config[listKey][idx];
  }
  for (const [key, listKey] of COLOR_FIELDS) {
    const flag = read(1);
    if (flag === null) return null;
    if (flag === 0) {
      const idx = read(5);
      if (idx === null || idx >= config[listKey].length) return null;
      styles[key] = config[listKey][idx];
    } else {
      const raw = read(24);
      if (raw === null) return null;
      styles[key] = raw.toString(16).toUpperCase().padStart(6, "0");
    }
  }
  return styles;
}

// The short share URL for the current avatar; falls back to the readable
// query-param form if the config ever outgrows the code's index widths.
export function shortShareUrl(config, styles) {
  const code = encodeStylesToCode(config, styles);
  if (code) return window.location.origin + "/" + code;
  return window.location.origin + "/?" + stylesToParams(styles).toString();
}

function stylesToParams(styles) {
  const params = new URLSearchParams();
  for (const [key] of STYLE_KEYS) params.set(key, styles[key]);
  for (const key of COLOR_KEYS) params.set(key, styles[key]);
  return params;
}

// Resolve the initial styles: a short code in the path wins, then query
// params overlay onto `base` (a full random styles record).
export function readStylesFromUrl(config, base) {
  const m = window.location.pathname.match(CODE_PATH);
  if (m) {
    const decoded = decodeCodeToStyles(config, m[1]);
    if (decoded) return { ...base, ...decoded };
  }
  const params = new URLSearchParams(window.location.search);
  const styles = { ...base };
  for (const [key, listKey] of STYLE_KEYS) {
    const v = params.get(key);
    if (v && config[listKey].includes(v)) styles[key] = v;
  }
  for (const key of COLOR_KEYS) {
    const v = params.get(key);
    if (v && HEX.test(v)) styles[key] = v.toUpperCase();
  }
  return styles;
}

export function writeStylesToUrl(styles) {
  // Absolute path: also normalizes away a short-code pathname after boot.
  window.history.replaceState(null, "", "/?" + stylesToParams(styles).toString());
}
