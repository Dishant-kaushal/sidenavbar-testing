import { jsxs as V, jsx as _ } from "react/jsx-runtime";
import { forwardRef as dt, useId as lt, useState as b, useCallback as v, useEffect as K, useRef as R, useLayoutEffect as at, useMemo as pt } from "react";
import { createPortal as ht } from "react-dom";
import { cn as J } from "../../../utils/cn.js";
import { useKeyboard as mt } from "../../../hooks/useKeyboard.js";
import { PopoverContext as vt } from "./PopoverContext.js";
/* empty css            */
const Et = {
  Top: "fds-popover--top",
  "Top Start": "fds-popover--top-start",
  "Top End": "fds-popover--top-end",
  Right: "fds-popover--right",
  "Right Start": "fds-popover--right-start",
  "Right End": "fds-popover--right-end",
  Bottom: "fds-popover--bottom",
  "Bottom Start": "fds-popover--bottom-start",
  "Bottom End": "fds-popover--bottom-end",
  Left: "fds-popover--left",
  "Left Start": "fds-popover--left-start",
  "Left End": "fds-popover--left-end"
}, u = 8, gt = 150, Lt = 100, x = 8, Q = 'button:not(:disabled),a[href],[tabindex]:not([tabindex="-1"]),input:not(:disabled),select:not(:disabled),textarea:not(:disabled)';
function wt(e) {
  return e === "Top" ? "Bottom" : e === "Top Start" ? "Bottom Start" : e === "Top End" ? "Bottom End" : e === "Bottom" ? "Top" : e === "Bottom Start" ? "Top Start" : e === "Bottom End" ? "Top End" : e === "Left" ? "Right" : e === "Left Start" ? "Right Start" : e === "Left End" ? "Right End" : e === "Right" ? "Left" : e === "Right Start" ? "Left Start" : "Left End";
}
function q(e, i, a) {
  const d = window.innerWidth, m = window.innerHeight;
  return !!(a.startsWith("Top") && e.top < x || a.startsWith("Bottom") && e.top + i.height > m - x || a.startsWith("Left") && e.left < x || a.startsWith("Right") && e.left + i.width > d - x);
}
function Tt(e, i) {
  if (e.startsWith("Top") || e.startsWith("Bottom")) {
    const r = window.innerWidth - i.right, o = i.left;
    return r > o ? ["Right", "Left"] : ["Left", "Right"];
  }
  const d = window.innerHeight - i.bottom, m = i.top;
  return d > m ? ["Bottom", "Top"] : ["Top", "Bottom"];
}
function j(e, i, a) {
  const d = e.width, m = e.height, r = i.width, o = i.height, c = e.left, p = e.top, E = e.right, g = e.bottom;
  switch (a) {
    case "Top":
      return { top: p - o - u, left: c + d / 2 - r / 2 };
    case "Top Start":
      return { top: p - o - u, left: c };
    case "Top End":
      return { top: p - o - u, left: E - r };
    case "Bottom":
      return { top: g + u, left: c + d / 2 - r / 2 };
    case "Bottom Start":
      return { top: g + u, left: c };
    case "Bottom End":
      return { top: g + u, left: E - r };
    case "Left":
      return { top: p + m / 2 - o / 2, left: c - r - u };
    case "Left Start":
      return { top: p, left: c - r - u };
    case "Left End":
      return { top: g - o, left: c - r - u };
    case "Right":
      return { top: p + m / 2 - o / 2, left: E + u };
    case "Right Start":
      return { top: p, left: E + u };
    case "Right End":
      return { top: g - o, left: E + u };
  }
}
const St = dt(
  ({
    trigger: e,
    children: i,
    isOpen: a,
    onOpenChange: d,
    defaultOpen: m = !1,
    placement: r = "Bottom",
    openInteraction: o = "click",
    initialFocusRef: c,
    zIndex: p,
    className: E,
    id: g,
    "aria-label": X,
    ...F
  }, B) => {
    const I = lt(), G = g ?? `${I}-panel`, A = a !== void 0, [tt, et] = b(m), f = A ? a : tt, w = v(
      (t) => {
        A || et(t), d == null || d(t);
      },
      [A, d]
    ), L = v(() => w(!1), [w]), [y, O] = b(f), [ot, W] = b(!1);
    K(() => {
      if (f)
        O(!0), W(!1);
      else if (y) {
        W(!0);
        const t = setTimeout(() => {
          O(!1), W(!1);
        }, gt);
        return () => clearTimeout(t);
      }
    }, [f]);
    const rt = R(null), P = R(null), T = R(null), Z = R(null), [k, z] = b(null), [nt, U] = b(r);
    at(() => {
      if (!y) {
        z(null), U(r);
        return;
      }
      const t = () => {
        if (!P.current || !T.current) return;
        const n = P.current.getBoundingClientRect(), l = T.current.getBoundingClientRect(), h = { width: l.width, height: l.height };
        let s = r, M = j(n, l, s);
        if (q(M, h, s)) {
          const H = wt(s), Y = j(n, l, H);
          if (!q(Y, h, H))
            s = H, M = Y;
          else
            for (const N of Tt(s, n)) {
              const $ = j(n, l, N);
              if (!q($, h, N)) {
                s = N, M = $;
                break;
              }
            }
        }
        z(M), U(s);
      };
      return t(), window.addEventListener("scroll", t, !0), window.addEventListener("resize", t), () => {
        window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
      };
    }, [y, r]), K(() => {
      if (!f) return;
      const t = (n) => {
        var h, s;
        const l = n.target;
        (h = P.current) != null && h.contains(l) || (s = T.current) != null && s.contains(l) || L();
      };
      return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
    }, [f, L]), mt("Escape", L, f), K(() => {
      if (f && o !== "hover")
        return Z.current = document.activeElement, requestAnimationFrame(() => {
          var n;
          const t = (c == null ? void 0 : c.current) ?? ((n = T.current) == null ? void 0 : n.querySelector(Q));
          t == null || t.focus();
        }), () => {
          var t;
          (t = Z.current) == null || t.focus();
        };
    }, [f, o, c]);
    const st = v((t) => {
      var s;
      if (t.key !== "Tab") return;
      const n = Array.from(
        ((s = T.current) == null ? void 0 : s.querySelectorAll(Q)) ?? []
      );
      if (!n.length) return;
      const l = n[0], h = n[n.length - 1];
      t.shiftKey && document.activeElement === l ? (t.preventDefault(), h.focus()) : !t.shiftKey && document.activeElement === h && (t.preventDefault(), l.focus());
    }, []), it = v(() => {
      o === "click" && w(!f);
    }, [o, f, w]), C = R(null), S = v(() => {
      C.current && (clearTimeout(C.current), C.current = null);
    }, []), D = v(() => {
      S(), C.current = setTimeout(L, Lt);
    }, [S, L]), ct = v(() => {
      o === "hover" && (S(), w(!0));
    }, [o, S, w]), ft = v(() => {
      o === "hover" && D();
    }, [o, D]), ut = pt(() => ({ close: L }), [L]);
    return /* @__PURE__ */ V(
      "div",
      {
        ref: (t) => {
          rt.current = t, typeof B == "function" ? B(t) : B && (B.current = t);
        },
        className: J("fds-popover", E),
        ...F,
        children: [
          /* @__PURE__ */ _(
            "div",
            {
              ref: P,
              className: "fds-popover__trigger",
              onClick: it,
              onMouseEnter: ct,
              onMouseLeave: ft,
              "aria-expanded": f,
              "aria-controls": f ? G : void 0,
              "aria-haspopup": "dialog",
              children: e
            }
          ),
          y && typeof document < "u" && ht(
            /* @__PURE__ */ _(vt.Provider, { value: ut, children: /* @__PURE__ */ V(
              "div",
              {
                ref: T,
                id: G,
                role: "dialog",
                "aria-label": X,
                onKeyDown: st,
                onMouseEnter: o === "hover" ? S : void 0,
                onMouseLeave: o === "hover" ? D : void 0,
                className: J(
                  "fds-popover__panel",
                  Et[nt],
                  ot && "fds-popover__panel--exiting"
                ),
                style: k ? { top: k.top, left: k.left, ...p !== void 0 && { zIndex: p } } : { top: 0, left: 0, visibility: "hidden" },
                children: [
                  /* @__PURE__ */ V(
                    "svg",
                    {
                      className: "fds-popover__arrow",
                      viewBox: "0 0 25.8 12.4858",
                      "aria-hidden": "true",
                      focusable: "false",
                      children: [
                        /* @__PURE__ */ _(
                          "path",
                          {
                            d: "M12.1929 12.1929L0 0H25.8L13.6071 12.1929C13.2166 12.5834 12.5834 12.5834 12.1929 12.1929Z",
                            fill: "var(--background-surface-intense)"
                          }
                        ),
                        /* @__PURE__ */ _(
                          "path",
                          {
                            d: "M1.67285 0.5L11.0166 9.83984C11.5046 10.3273 12.2952 10.3273 12.7832 9.83984L22.127 0.5H22.5928L12.2529 10.8389C12.0577 11.0341 11.7411 11.0341 11.5459 10.8389L1.20703 0.5H1.67285Z",
                            fill: "var(--border-gray-muted)",
                            transform: "translate(1 1)"
                          }
                        )
                      ]
                    }
                  ),
                  i
                ]
              }
            ) }),
            document.body
          )
        ]
      }
    );
  }
);
St.displayName = "Popover";
export {
  St as Popover
};
