// Serialize avatar styles to/from the URL so avatars are shareable links.
//
// Values are validated on read: style names must exist in config, colors
// must be 6-digit hex (they get interpolated into inline SVG markup, so
// nothing else may pass).

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

// Overlay any valid params from the current URL onto `base` (a full
// styles record, e.g. a random one). Colors are validated by shape, not
// against the palette, so custom-picked colors stay shareable.
export function readStylesFromUrl(config, base) {
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
  const params = new URLSearchParams();
  for (const [key] of STYLE_KEYS) params.set(key, styles[key]);
  for (const key of COLOR_KEYS) params.set(key, styles[key]);
  window.history.replaceState(null, "", "?" + params.toString());
}
