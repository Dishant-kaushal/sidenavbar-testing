import { jsx as m } from "react/jsx-runtime";
import { forwardRef as z, useId as G, useMemo as D, useState as g, useEffect as p, useRef as y, useCallback as k, Children as J, isValidElement as P } from "react";
import { createPortal as Q } from "react-dom";
import { cn as R } from "../../../utils/cn.js";
import { useKeyboard as W } from "../../../hooks/useKeyboard.js";
import { useBodyScrollLock as X } from "../../../hooks/useBodyScrollLock.js";
import { DrawerContext as U } from "./DrawerContext.js";
import { useDrawerStack as ee } from "./DrawerStackProvider.js";
/* empty css           */
const re = 360, T = 280, H = 'button:not(:disabled),a[href],[tabindex]:not([tabindex="-1"]),input:not(:disabled),select:not(:disabled),textarea:not(:disabled)', te = "DrawerHeader", ne = "DrawerBody", oe = "DrawerFooter";
function ae(t) {
  if (!P(t)) return;
  const r = t.type;
  return r.displayName ?? r.name;
}
function le(t) {
  if (process.env.NODE_ENV === "production") return;
  let r = 0, l = 0, s = 0;
  J.forEach(t, (c) => {
    const d = ae(c);
    d === te ? r += 1 : d === ne ? l += 1 : d === oe ? s += 1 : P(c) && console.warn(
      `[Drawer] Unexpected child <${d ?? "Unknown"}>. Only <DrawerHeader>, <DrawerBody>, <DrawerFooter> are allowed.`
    );
  }), r > 1 && console.warn("[Drawer] Only one <DrawerHeader> is allowed."), l > 1 && console.warn("[Drawer] Only one <DrawerBody> is allowed."), s > 1 && console.warn("[Drawer] Only one <DrawerFooter> is allowed.");
}
const ce = z(
  ({
    isOpen: t,
    onDismiss: r,
    onUnmount: l,
    children: s,
    showOverlay: c = !0,
    isLazy: d = !0,
    accessibilityLabel: v,
    initialFocusRef: i,
    zIndex: x,
    testID: V
  }, w) => {
    const N = G(), E = D(() => `fds-drawer-${N}`, [N]), o = ee(), [a, S] = g(1);
    p(() => {
      if (!o) {
        S(1);
        return;
      }
      if (t) {
        const e = o.register(E, r);
        return S(e), () => {
          o.unregister(E);
        };
      }
    }, [o, t, E, r]);
    const [_, A] = g(t), [f, b] = g(!1);
    p(() => {
      if (t)
        A(!0), b(!1);
      else if (_) {
        b(!0);
        const e = setTimeout(() => {
          A(!1), b(!1), l == null || l();
        }, T);
        return () => clearTimeout(e);
      }
    }, [t]), X(_);
    const h = y(null), $ = y(null), B = y(null), C = y(null);
    W("Escape", r, t);
    const q = k(
      (e) => {
        c && e.target === e.currentTarget && r();
      },
      [c, r]
    );
    p(() => {
      if (!t) return;
      C.current = document.activeElement;
      const e = requestAnimationFrame(() => {
        var u;
        const n = (i == null ? void 0 : i.current) ?? B.current ?? ((u = h.current) == null ? void 0 : u.querySelector(H));
        n == null || n.focus();
      });
      return () => {
        var n;
        cancelAnimationFrame(e), (n = C.current) == null || n.focus();
      };
    }, [t, i]);
    const F = k((e) => {
      var K;
      if (e.key !== "Tab") return;
      const n = Array.from(
        ((K = h.current) == null ? void 0 : K.querySelectorAll(H)) ?? []
      );
      if (!n.length) return;
      const u = n[0], I = n[n.length - 1];
      e.shiftKey && document.activeElement === u ? (e.preventDefault(), I.focus()) : !e.shiftKey && document.activeElement === I && (e.preventDefault(), u.focus());
    }, []);
    p(() => {
      process.env.NODE_ENV !== "production" && (v || console.warn(
        "[Drawer] Missing `accessibilityLabel`. Set it for a meaningful screen-reader announcement."
      ));
    }, [v]), le(s);
    const O = D(() => (x ?? 400) + (a - 1), [x, a]), j = (o == null ? void 0 : o.totalLevels) ?? 1, M = Math.max(0, j - a), L = k(() => {
      o ? o.closeAll() : r();
    }, [o, r]), Y = D(
      () => ({
        close: r,
        closeAll: L,
        closeButtonRef: B,
        stackingLevel: a,
        isExiting: f
      }),
      [r, L, a, f]
    );
    if (!_ || typeof document > "u") return null;
    const Z = !d || t || f;
    return Q(
      /* @__PURE__ */ m(U.Provider, { value: Y, children: /* @__PURE__ */ m(
        "div",
        {
          ref: $,
          className: R(
            "fds-drawer__backdrop",
            f && "fds-drawer__backdrop--exiting",
            !c && "fds-drawer__backdrop--hidden"
          ),
          onClick: q,
          style: { zIndex: O },
          "data-stacking-level": a,
          children: /* @__PURE__ */ m(
            "div",
            {
              className: "fds-drawer__panel",
              "data-stacking-level": a,
              "data-is-stacked-parent": M > 0 ? "true" : void 0,
              style: {
                "--fds-drawer-level": a,
                "--fds-drawer-depth-below": M,
                "--fds-drawer-open-duration": `${re}ms`,
                "--fds-drawer-close-duration": `${T}ms`
              },
              children: /* @__PURE__ */ m(
                "div",
                {
                  ref: (e) => {
                    h.current = e, typeof w == "function" ? w(e) : w && (w.current = e);
                  },
                  className: R(
                    "fds-drawer__panel-inner",
                    f && "fds-drawer__panel-inner--exiting"
                  ),
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": v,
                  "data-testid": V,
                  onKeyDown: F,
                  children: Z && s
                }
              )
            }
          )
        }
      ) }),
      document.body
    );
  }
);
ce.displayName = "Drawer";
export {
  ce as Drawer
};
