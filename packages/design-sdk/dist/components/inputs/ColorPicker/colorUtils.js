function b(t, n, i) {
  const f = n / 100, s = i / 100, r = s * f, o = r * (1 - Math.abs(t / 60 % 2 - 1)), u = s - r;
  let a = 0, e = 0, l = 0;
  return t < 60 ? (a = r, e = o) : t < 120 ? (a = o, e = r) : t < 180 ? (e = r, l = o) : t < 240 ? (e = o, l = r) : t < 300 ? (a = o, l = r) : (a = r, l = o), [
    Math.round((a + u) * 255),
    Math.round((e + u) * 255),
    Math.round((l + u) * 255)
  ];
}
function p(t, n, i) {
  const f = t / 255, s = n / 255, r = i / 255, o = Math.max(f, s, r), u = Math.min(f, s, r), a = o - u;
  let e = 0;
  a !== 0 && (o === f ? e = (s - r) / a % 6 : o === s ? e = (r - f) / a + 2 : e = (f - s) / a + 4, e = Math.round(e * 60), e < 0 && (e += 360));
  const l = o === 0 ? 0 : Math.round(a / o * 100), g = Math.round(o * 100);
  return [e, l, g];
}
function h(t, n, i) {
  return `#${(16777216 + (t << 16) + (n << 8) + i).toString(16).slice(1).toUpperCase()}`;
}
function m(t) {
  const n = t.replace("#", "");
  if (n.length !== 6 && n.length !== 3) return null;
  const i = n.length === 3 ? n.split("").map((s) => s + s).join("") : n, f = parseInt(i, 16);
  return isNaN(f) ? null : [f >> 16 & 255, f >> 8 & 255, f & 255];
}
const c = {
  red: "ff0000",
  white: "ffffff",
  black: "000000",
  blue: "0000ff",
  cyan: "00ffff",
  pink: "ffc0cb",
  green: "008000",
  yellow: "ffff00",
  orange: "ffa500",
  purple: "800080",
  magenta: "ff00ff",
  fuchsia: "ff00ff",
  gray: "808080",
  grey: "808080",
  brown: "a52a2a"
};
function M(t) {
  const n = t.trim().toLowerCase().replace(/^#/, "");
  return n ? n in c ? c[n] : /^[0-9a-f]$/.test(n) ? n.repeat(6) : /^[0-9a-f]{3}$/.test(n) ? n.split("").map((i) => i + i).join("") : /^[0-9a-f]{6}$/.test(n) ? n : null : null;
}
export {
  m as hexToRgb,
  b as hsbToRgb,
  M as normalizeColorInput,
  h as rgbToHex,
  p as rgbToHsb
};
