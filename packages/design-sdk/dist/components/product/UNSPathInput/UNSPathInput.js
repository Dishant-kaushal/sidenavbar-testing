import { jsxs as ie, jsx as r } from "react/jsx-runtime";
import { forwardRef as Se, useId as Pe, useState as x, useEffect as j, useRef as v, useCallback as o, useMemo as Re, useLayoutEffect as Me } from "react";
import { createPortal as _e } from "react-dom";
import { Loader as xe, ChevronRight as je } from "react-feather";
import { cn as De } from "../../../utils/cn.js";
import { ActionListItem as O } from "../../overlays/DropdownMenu/ActionListItem.js";
import { ActionListItemGroup as le } from "../../overlays/DropdownMenu/ActionListItemGroup.js";
import { InputFieldHeader as Ee } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as We } from "../../forms/InputFieldFooter/InputFieldFooter.js";
import { useControllableState as Te } from "../../../hooks/useControllableState.js";
import { useDropdownPortal as Ue } from "../../../hooks/useDropdownPortal.js";
import { useKeyboard as Ae } from "../../../hooks/useKeyboard.js";
import { useUNSNavigator as Ke } from "./useUNSNavigator.js";
import { isMappedBinding as w, mappedSegments as ee } from "./UNSPathBindingMatcher.js";
/* empty css                 */
const be = Se(
  ({
    tree: P,
    value: C,
    defaultValue: V,
    onChange: D,
    onFocus: N,
    onBlur: I,
    label: E,
    necessityIndicator: m,
    helpText: F,
    placeholder: L = "Enter value or type / to browse UNS",
    isDisabled: l = !1,
    validationState: k = "none",
    errorText: W,
    maxResults: H = 50,
    openOnFocus: te = !0,
    isLoading: ae = !1,
    onOpen: $,
    onClose: z,
    name: ue,
    className: ce,
    ...fe
  }, R) => {
    var oe;
    const ne = Pe(), [q, re] = Te({
      value: C,
      defaultValue: V ?? "",
      onChange: void 0
    }), [pe, T] = x(null), n = pe ?? q ?? "";
    j(() => {
      C !== void 0 && T(null);
    }, [C]);
    const [h, M] = x(null), [u, f] = x(!1), g = v(null);
    j(() => {
      u ? $ == null || $() : z == null || z();
    }, [u]);
    const B = v(!1), G = v(!1), _ = v(null), U = o(() => {
      G.current = !0, _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        G.current = !1;
      }, 100);
    }, []);
    j(() => () => {
      _.current && clearTimeout(_.current);
    }, []);
    const p = Ke(P), c = Re(() => {
      const e = p.derive(n);
      return e.items.length > H ? { ...e, items: e.items.slice(0, H) } : e;
    }, [p, n, H]), [A, J] = x(0), de = c.items.map((e) => e.fullPath.join("/")).join("|");
    j(() => {
      J(0);
    }, [de]);
    const Q = v(null);
    j(() => {
      if (!Q.current) return;
      const e = Q.current.querySelector('[data-highlighted="true"]');
      e == null || e.scrollIntoView({ block: "nearest" });
    }, [A]);
    const d = o((e) => {
      T(e);
    }, []), i = o(
      (e, t) => {
        T(null), M(null), re(e), g.current = null, D(e, t);
      },
      [D, re]
    ), S = o(() => {
      g.current === null && (g.current = n);
    }, [n]), me = o(
      (e) => {
        if (l) return;
        h && M(null);
        const t = n;
        if (w(t) && e.length < t.length) {
          U(), f(!1), i("", { type: "cleared", source: "clear", segments: null });
          return;
        }
        if (t === "/" && e === "") {
          const s = g.current;
          g.current = null, f(!1), d(s && s !== "" ? s : "");
          return;
        }
        e.startsWith("/") && !t.startsWith("/") && (S(), f(!0)), e.startsWith("/") ? f(!0) : f(!1), d(e);
      },
      [
        l,
        h,
        n,
        d,
        i,
        S,
        U
      ]
    ), X = o(
      (e) => {
        if (l) return;
        S();
        const t = p.commitFolder(n, e.name);
        d(t);
      },
      [l, p, n, d, S]
    ), Y = o(
      (e) => {
        if (l) return;
        const t = e.fullPath.slice(0, -1), a = p.commitLeaf(t, e.name);
        U(), f(!1), i(a, {
          type: "mapped",
          source: "click",
          segments: e.fullPath
        });
      },
      [l, p, i, U]
    ), K = o(() => {
      T(null), g.current = null, f(!1), M(null);
    }, []), he = o(
      (e) => {
        if (N == null || N(e), !l && !G.current && te && w(n)) {
          const t = ee(n);
          if (!t || t.length === 0) return;
          S(), d(`/${t.join("/")}`), f(!0);
        }
      },
      [
        N,
        l,
        te,
        n,
        S,
        d
      ]
    ), ge = o(
      (e) => {
        I == null || I(e);
        const t = n;
        if (!(t === "" || w(t))) {
          if (t.startsWith("/")) {
            B.current || K(), B.current = !1;
            return;
          }
          i(t, { type: "custom", source: "type", segments: null });
        }
      },
      [I, n, i, K]
    ), ye = o(
      (e) => {
        const t = g.current;
        t !== null && w(t) && (e.preventDefault(), e.clipboardData.setData("text/plain", t));
      },
      []
    ), ve = o(
      (e) => {
        if (l) return;
        const t = e.clipboardData.getData("text");
        if (t) {
          if (e.preventDefault(), t.startsWith("/")) {
            const s = t.replace(/^\/+/, "").replace(/\/+$/, "").split("/").filter(Boolean);
            s.length > 0 && p.isLeafPath(s) ? i(
              p.commitLeaf(s.slice(0, -1), s[s.length - 1]),
              { type: "mapped", source: "paste", segments: s }
            ) : (i("", { type: "cleared", source: "clear", segments: null }), d(t), M("Must be a complete UNS path"), f(!1));
            return;
          }
          if (w(t)) {
            const a = ee(t);
            if (a && a.length > 0 && p.isLeafPath(a))
              i(t, { type: "mapped", source: "paste", segments: a });
            else {
              const s = a && a.length > 0 ? `/${a.join("/")}` : "";
              i("", { type: "cleared", source: "clear", segments: null }), d(s), M("Must be a complete UNS path"), f(!1);
            }
          } else
            i(t, { type: "custom", source: "paste", segments: null });
        }
      },
      [l, i, p, d]
    ), we = o(
      (e) => {
        const t = u && c.mode === "drill", s = !n.startsWith("/") && !w(n);
        if (t && e.key === "ArrowDown") {
          e.preventDefault(), c.items.length > 0 && J((y) => Math.min(c.items.length - 1, y + 1));
          return;
        }
        if (t && e.key === "ArrowUp") {
          e.preventDefault(), J((y) => Math.max(0, y - 1));
          return;
        }
        if (e.key === "Enter") {
          if (e.shiftKey && s) return;
          if (e.preventDefault(), e.stopPropagation(), t && c.items.length > 0) {
            const y = c.items[Math.min(A, c.items.length - 1)];
            y.isLeaf ? Y(y) : X(y);
          }
        }
      },
      [
        u,
        c.mode,
        c.items,
        n,
        A,
        X,
        Y
      ]
    ), Ce = v(null), Ne = o(
      (e) => {
        Ce.current = e, typeof R == "function" ? R(e) : R && (R.current = e);
      },
      [R]
    ), b = v(null), { portalRef: Ie, pos: Z } = Ue(
      b,
      u,
      K
    ), [se, Le] = x(null);
    Me(() => {
      !u || !b.current || Le(b.current.getBoundingClientRect().width);
    }, [u]), Ae("Escape", () => {
      (u || h !== null) && K();
    }, u || h !== null);
    const ke = w(q ?? "") ? ((oe = ee(q ?? "")) == null ? void 0 : oe.join("/")) ?? null : null;
    return /* @__PURE__ */ ie(
      "div",
      {
        ref: b,
        className: De(
          "fds-uns-path-input",
          l && "fds-uns-path-input--disabled",
          (k === "error" || h !== null) && "fds-uns-path-input--error",
          ce
        ),
        ...fe,
        children: [
          E && /* @__PURE__ */ r(
            Ee,
            {
              label: E,
              htmlFor: ne,
              necessityIndicator: m
            }
          ),
          /* @__PURE__ */ r("div", { className: "fds-uns-path-input__field", children: /* @__PURE__ */ r(
            "div",
            {
              className: "fds-uns-path-input__grow",
              "data-replicated-value": n || L,
              children: /* @__PURE__ */ r(
                "textarea",
                {
                  ref: Ne,
                  id: ne,
                  name: ue,
                  className: "fds-uns-path-input__textarea",
                  value: n,
                  placeholder: L,
                  rows: 1,
                  disabled: l,
                  autoComplete: "off",
                  spellCheck: !1,
                  role: "combobox",
                  "aria-expanded": u,
                  "aria-haspopup": "listbox",
                  "aria-autocomplete": "list",
                  onChange: (e) => me(e.target.value),
                  onFocus: he,
                  onBlur: ge,
                  onCopy: ye,
                  onPaste: ve,
                  onKeyDown: we
                }
              )
            }
          ) }),
          /* @__PURE__ */ r(
            We,
            {
              helpText: h !== null ? h : k === "error" ? W : F,
              state: k === "error" || h !== null ? "error" : "default"
            }
          ),
          u && Z && c.mode !== "closed" && typeof document < "u" && _e(
            /* @__PURE__ */ r(
              "div",
              {
                ref: Ie,
                className: "fds-uns-path-input__popover",
                onMouseDown: () => {
                  B.current = !0;
                },
                style: {
                  top: Z.top,
                  left: Z.left,
                  "--fds-uns-popover-min-width": se ? `${se}px` : "0px"
                },
                children: /* @__PURE__ */ r(
                  Ve,
                  {
                    ref: Q,
                    items: c.items,
                    highlightedIndex: A,
                    selectedLeafKey: ke,
                    isLoading: ae,
                    onFolderClick: X,
                    onLeafClick: Y
                  }
                )
              }
            ),
            document.body
          )
        ]
      }
    );
  }
);
be.displayName = "UNSPathInput";
function Ve({
  ref: P,
  items: C,
  highlightedIndex: V,
  selectedLeafKey: D,
  isLoading: N,
  onFolderClick: I,
  onLeafClick: E
}) {
  return N ? /* @__PURE__ */ ie("div", { ref: P, className: "fds-uns-path-input__loading", children: [
    /* @__PURE__ */ r(xe, { size: 14, className: "fds-uns-path-input__loading-icon", "aria-hidden": !0 }),
    "Loading…"
  ] }) : C.length === 0 ? /* @__PURE__ */ r("div", { ref: P, children: /* @__PURE__ */ r(le, { children: /* @__PURE__ */ r(O, { title: "No matching items", isDisabled: !0 }) }) }) : /* @__PURE__ */ r("div", { ref: P, children: /* @__PURE__ */ r(le, { children: C.map((m, F) => {
    const L = m.fullPath.join("/"), k = F === V ? { "data-highlighted": "true" } : {};
    if (m.isLeaf) {
      const W = L === D;
      return /* @__PURE__ */ r(
        O,
        {
          ...k,
          title: m.name,
          isSelected: W,
          selectionType: W ? "Single" : "None",
          onClick: () => E(m)
        },
        L
      );
    }
    return /* @__PURE__ */ r(
      O,
      {
        ...k,
        title: m.name,
        trailing: /* @__PURE__ */ r(je, { size: 16, "aria-hidden": !0 }),
        onClick: () => I(m)
      },
      L
    );
  }) }) });
}
export {
  be as UNSPathInput
};
