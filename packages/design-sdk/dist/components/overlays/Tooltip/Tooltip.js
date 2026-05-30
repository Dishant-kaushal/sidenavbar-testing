import { jsx as h, Fragment as $, jsxs as k } from "react/jsx-runtime";
import { useState as y, useRef as w, useCallback as b, useEffect as T, useLayoutEffect as z, isValidElement as tt, cloneElement as et } from "react";
import { createPortal as ot } from "react-dom";
import { cn as Y } from "../../../utils/cn.js";
/* empty css            */
const nt = 200, rt = 0, it = 200, st = 8, lt = 8, N = 8, ct = {
  Top: "top",
  TopStart: "top-start",
  TopEnd: "top-end",
  Bottom: "bottom",
  BottomStart: "bottom-start",
  BottomEnd: "bottom-end",
  Left: "left",
  Right: "right"
};
function ut(t) {
  return t === "Top" ? "Bottom" : t === "Bottom" ? "Top" : t === "TopStart" ? "BottomStart" : t === "TopEnd" ? "BottomEnd" : t === "BottomStart" ? "TopStart" : t === "BottomEnd" ? "TopEnd" : t === "Left" ? "Right" : "Left";
}
function C(t, e, c) {
  const s = t.left + t.width / 2, l = t.top + t.height / 2, n = st + lt;
  switch (c) {
    case "Top":
      return { top: t.top - e.height - n, left: s - e.width / 2 };
    case "TopStart":
      return { top: t.top - e.height - n, left: t.left };
    case "TopEnd":
      return { top: t.top - e.height - n, left: t.right - e.width };
    case "Bottom":
      return { top: t.bottom + n, left: s - e.width / 2 };
    case "BottomStart":
      return { top: t.bottom + n, left: t.left };
    case "BottomEnd":
      return { top: t.bottom + n, left: t.right - e.width };
    case "Left":
      return { top: l - e.height / 2, left: t.left - e.width - n };
    case "Right":
      return { top: l - e.height / 2, left: t.right + n };
  }
}
function D(t, e) {
  const c = window.innerWidth, s = window.innerHeight;
  return t.top < N || t.top + e.height > s - N || t.left < N || t.left + e.width > c - N;
}
function ft(t, e) {
  if (t.startsWith("Top") || t.startsWith("Bottom")) {
    const n = window.innerWidth - e.right, P = e.left;
    return n > P ? ["Right", "Left"] : ["Left", "Right"];
  }
  const s = window.innerHeight - e.bottom, l = e.top;
  return s > l ? ["Bottom", "Top"] : ["Top", "Bottom"];
}
function at({
  bodyText: t,
  heading: e,
  placement: c = "Top",
  open: s,
  onOpenChange: l,
  zIndex: n,
  accessibilityLabel: P,
  isDisabled: A,
  children: x,
  className: K,
  ...U
}) {
  const r = s !== void 0, [X, E] = y(!1), f = r ? s : X, [a, M] = y(f), [Z, H] = y(!1), I = w(null), S = w(null), v = w(void 0), B = w(void 0), W = w(void 0), [i, J] = y(null), u = b(
    (o) => {
      l == null || l({ isOpen: o });
    },
    [l]
  ), V = b(() => {
    clearTimeout(B.current), v.current = setTimeout(() => {
      r || E(!0), u(!0);
    }, nt);
  }, [u, r]), g = b(() => {
    clearTimeout(v.current), B.current = setTimeout(() => {
      r || E(!1), u(!1);
    }, rt);
  }, [u, r]);
  T(() => {
    A && (clearTimeout(v.current), clearTimeout(B.current), r || E(!1), f && u(!1));
  }, [A, r, f, u]), T(() => {
    f ? (clearTimeout(W.current), M(!0), H(!1)) : a && (H(!0), W.current = setTimeout(() => {
      M(!1), H(!1);
    }, it));
  }, [f]), T(() => () => {
    clearTimeout(v.current), clearTimeout(B.current), clearTimeout(W.current);
  }, []), T(() => {
    if (!f) return;
    const o = (_) => {
      _.key === "Escape" && (r || E(!1), u(!1));
    };
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [f, r, u]);
  const L = b(() => {
    if (!I.current || !S.current) return;
    const o = I.current.getBoundingClientRect(), _ = S.current.getBoundingClientRect(), d = { width: _.width, height: _.height };
    let m = c, p = C(o, d, m);
    if (D(p, d)) {
      const O = ut(m), j = C(o, d, O);
      if (!D(j, d))
        m = O, p = j;
      else
        for (const q of ft(m, o)) {
          const F = C(o, d, q);
          if (!D(F, d)) {
            m = q, p = F;
            break;
          }
        }
    }
    J({ top: p.top, left: p.left, placement: m });
  }, [c]);
  z(() => {
    a && L();
  }, [a, L, t, e]), T(() => {
    if (!a) return;
    const o = () => L();
    return window.addEventListener("scroll", o, !0), window.addEventListener("resize", o), () => {
      window.removeEventListener("scroll", o, !0), window.removeEventListener("resize", o);
    };
  }, [a, L]);
  let R = x;
  if (tt(x) && (R = et(x, {
    "aria-label": P ?? t
  })), A)
    return /* @__PURE__ */ h($, { children: R });
  const Q = {
    top: i == null ? void 0 : i.top,
    left: i == null ? void 0 : i.left,
    visibility: i ? "visible" : "hidden",
    ...n !== void 0 && { zIndex: n }
  }, G = a ? /* @__PURE__ */ k(
    "div",
    {
      ref: S,
      className: Y("fds-tooltip", Z && "fds-tooltip--exiting"),
      role: "tooltip",
      "data-placement": ct[(i == null ? void 0 : i.placement) ?? c],
      style: Q,
      children: [
        /* @__PURE__ */ k("div", { className: "fds-tooltip__content", children: [
          e && /* @__PURE__ */ h("span", { className: "fds-tooltip__heading BodyMediumSemibold", children: e }),
          /* @__PURE__ */ h("span", { className: "fds-tooltip__body BodySmallRegular", children: t })
        ] }),
        /* @__PURE__ */ h(
          "svg",
          {
            className: "fds-tooltip__arrow",
            width: "14",
            height: "8",
            viewBox: "0 0 14 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: /* @__PURE__ */ h("path", { d: "M7 0L14 8H0L7 0Z", fill: "currentColor" })
          }
        )
      ]
    }
  ) : null;
  return /* @__PURE__ */ k(
    "span",
    {
      ref: I,
      className: Y("fds-tooltip-wrapper", K),
      onMouseEnter: r ? void 0 : V,
      onMouseLeave: r ? void 0 : g,
      onFocus: r ? void 0 : V,
      onBlur: r ? void 0 : g,
      ...U,
      children: [
        R,
        typeof document < "u" && G ? ot(G, document.body) : null
      ]
    }
  );
}
at.displayName = "Tooltip";
export {
  at as Tooltip
};
