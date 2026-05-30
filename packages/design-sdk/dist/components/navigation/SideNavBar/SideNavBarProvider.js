import { jsx as x } from "react/jsx-runtime";
import { useMemo as E, useState as L, useCallback as O, useEffect as B } from "react";
import { useControllableState as K } from "../../../hooks/useControllableState.js";
import { useMediaQuery as h } from "../../../hooks/useMediaQuery.js";
import { SideNavBarContext as A } from "./SideNavBarContext.js";
/* empty css               */
const N = "fds-sidenav-v2-state", _ = 3600 * 24 * 365;
function k(n) {
  if (typeof document > "u") return null;
  const t = document.cookie.split("; ").find((o) => o.startsWith(`${n}=`));
  if (!t) return null;
  const a = t.split("=")[1];
  return a === "open" ? !0 : a === "closed" ? !1 : null;
}
function D(n, t) {
  typeof document > "u" || (document.cookie = `${n}=${t ? "open" : "closed"}; path=/; max-age=${_}; samesite=lax`);
}
function V({
  defaultOpen: n,
  open: t,
  onOpenChange: a,
  cookieName: o = N,
  persistInCookie: s = !0,
  mobileBreakpoint: g = 768,
  keyboardShortcut: v = "b",
  theme: r = "Light",
  variant: c = "floating",
  style: M,
  children: b
}) {
  const S = E(() => {
    if (t !== void 0) return t;
    if (s) {
      const e = k(o);
      if (e !== null) return e;
    }
    return n ?? !1;
  }, [t, n, o, s]), [i, p] = K({
    value: t,
    defaultValue: S,
    onChange: a
  }), [m, w] = L(!1), [y, C] = L(!1), d = h(`(max-width: ${g - 1}px)`), l = O(
    (e) => {
      p(e), s && D(o, e);
    },
    [p, s, o]
  ), u = O(() => {
    d ? w((e) => !e) : l(!i);
  }, [d, i, l]);
  B(() => {
    if (typeof window > "u") return;
    const e = (f) => {
      f.key.toLowerCase() === v.toLowerCase() && (f.metaKey || f.ctrlKey) && (f.preventDefault(), u());
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
  }, [v, u]);
  const $ = E(
    () => ({
      state: i ? "expanded" : "collapsed",
      open: i ?? !0,
      setOpen: l,
      openMobile: m,
      setOpenMobile: w,
      isMobile: d,
      toggleSideNavBar: u,
      theme: r,
      variant: c,
      hovered: y,
      setHovered: C
    }),
    [i, l, m, d, u, r, c, y, C]
  );
  return /* @__PURE__ */ x(A.Provider, { value: $, children: /* @__PURE__ */ x("div", { className: "fds-sidenav-provider", style: M, "data-theme": r == null ? void 0 : r.toLowerCase(), "data-variant": c, children: b }) });
}
V.displayName = "SideNavBarProvider";
export {
  V as SideNavBarProvider
};
