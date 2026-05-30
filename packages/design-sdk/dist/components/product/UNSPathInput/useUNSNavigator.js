import { useMemo as a } from "react";
import { wrap as m, isOpenBinding as d } from "./UNSPathBindingMatcher.js";
function f(o, l) {
  let e = o;
  for (const i of l) {
    if (!e || typeof e != "object" || !(i in e)) return null;
    const r = e[i];
    if (r === null) return null;
    e = r;
  }
  return e;
}
function u(o) {
  const l = o.startsWith("/") ? o.slice(1) : o;
  if (l === "") return { scope: [], trailing: "" };
  const e = l.split("/"), i = e[e.length - 1];
  return { scope: e.slice(0, -1), trailing: i };
}
function p(o, l, e) {
  const i = e.toLowerCase();
  return Object.entries(o).map(([r, t]) => ({
    name: r,
    isLeaf: t === null,
    fullPath: [...l, r]
  })).filter((r) => i === "" || r.name.toLowerCase().includes(i));
}
function L(o) {
  return a(() => ({ derive: (t) => {
    if (d(t))
      return { mode: "closed", items: [], scope: [], trailing: "" };
    if (!t.startsWith("/"))
      return { mode: "closed", items: [], scope: [], trailing: "" };
    const { scope: n, trailing: s } = u(t), c = f(o, n);
    return c === null ? { mode: "drill", items: [], scope: n, trailing: s } : {
      mode: "drill",
      items: p(c, n, s),
      scope: n,
      trailing: s
    };
  }, commitFolder: (t, n) => {
    const { scope: s } = u(t);
    return `/${[...s, n].join("/")}/`;
  }, commitLeaf: (t, n) => m([...t, n].join("/")), isLeafPath: (t) => {
    if (t.length === 0) return !1;
    const n = f(o, t.slice(0, -1)), s = t[t.length - 1];
    return n !== null && s in n && n[s] === null;
  } }), [o]);
}
export {
  L as useUNSNavigator
};
