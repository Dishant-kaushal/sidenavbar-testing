import { jsxs as Q, jsx as d } from "react/jsx-runtime";
import { forwardRef as te, useRef as F, useCallback as h, useEffect as g, useState as oe } from "react";
import { createPortal as T } from "react-dom";
import { ChevronDown as re } from "react-feather";
import { cn as M } from "../../../utils/cn.js";
import { TextInput as ne } from "../TextInput/TextInput.js";
import { MultiSelectField as fe } from "./MultiSelectField.js";
import { useControllableState as se } from "../../../hooks/useControllableState.js";
import { useDropdownPortal as ue } from "../../../hooks/useDropdownPortal.js";
/* empty css                */
const ce = te(
  ({
    multiType: W = "multiple",
    label: P,
    name: E,
    placeholder: N,
    value: X,
    tags: q,
    maxVisibleTags: Y = 2,
    helpText: C,
    errorText: K,
    validationState: _ = "none",
    isDisabled: s = !1,
    isRequired: j = !1,
    isReadOnly: n = !1,
    searchable: o = !1,
    inputValue: S,
    onInputChange: v,
    isOpen: Z,
    onOpenChange: $,
    leadingIcon: B,
    leadingText: H,
    onBackspace: b,
    children: k,
    onClick: x,
    className: I
  }, V) => {
    const w = q != null, A = F(null), [O, z] = se({
      value: Z,
      defaultValue: !1,
      onChange: $
    }), t = O ?? !1, U = F(t), y = F(!1), r = h(
      (e) => {
        e || (y.current = !0), z(e);
      },
      [z]
    ), { portalRef: i, pos: c } = ue(A, t, () => r(!1));
    g(() => {
      t && !o && !w && requestAnimationFrame(() => {
        var u;
        const e = (u = i.current) == null ? void 0 : u.querySelector(
          '[role="menuitem"]:not([aria-disabled="true"])'
        );
        e == null || e.focus();
      });
    }, [t, o, w, i]), g(() => {
      U.current && !t && requestAnimationFrame(() => {
        var u;
        const e = (u = A.current) == null ? void 0 : u.querySelector(
          ".fds-text-input__input, .fds-select-input__multi-input"
        );
        e == null || e.focus();
      }), U.current = t;
    }, [t]);
    const [p, l] = oe(-1), m = h(
      () => {
        var e;
        return Array.from(
          ((e = i.current) == null ? void 0 : e.querySelectorAll(
            '[role="menuitem"]:not([aria-disabled="true"])'
          )) ?? []
        );
      },
      [i]
    );
    g(() => {
      var u;
      const e = m();
      e.forEach((D, f) => {
        f === p ? D.setAttribute("data-highlighted", "true") : D.removeAttribute("data-highlighted");
      }), p >= 0 && ((u = e[p]) == null || u.scrollIntoView({ block: "nearest" }));
    }), g(() => {
      t || l(-1);
    }, [t]), g(() => {
      l(-1);
    }, [S]);
    const G = h(() => {
      if (y.current) {
        y.current = !1;
        return;
      }
      !s && !n && o && r(!0);
    }, [s, n, o, r]), J = h(
      (e) => {
        s || n || e.target.closest(".fds-select-input__popover") || (x == null || x(e), o || r(!t));
      },
      [s, n, t, o, x, r]
    ), L = h(
      (e) => {
        if (!(s || n || e.defaultPrevented || e.target.getAttribute("role") === "menuitem"))
          switch (e.key) {
            case "Enter":
            case " ":
              if (t && p >= 0) {
                const a = m()[p];
                a && (e.preventDefault(), a.click());
              } else if ((o || w) && t) {
                const f = m()[0];
                f && (e.preventDefault(), f.click());
              } else o || (e.preventDefault(), r(!t));
              break;
            case "Escape":
              t && (e.preventDefault(), e.stopPropagation(), r(!1));
              break;
            case "ArrowDown": {
              if (e.preventDefault(), !t)
                r(!0), l(0);
              else {
                const f = m().length;
                l((a) => a < f - 1 ? a + 1 : a);
              }
              break;
            }
            case "ArrowUp": {
              e.preventDefault(), t ? l((f) => f > 0 ? f - 1 : 0) : (r(!0), l(0));
              break;
            }
            case "Home":
              t && (e.preventDefault(), l(0));
              break;
            case "End":
              t && (e.preventDefault(), l(m().length - 1));
              break;
          }
      },
      [s, n, t, o, w, p, m, r]
    );
    if (w)
      return /* @__PURE__ */ Q(
        "div",
        {
          ref: A,
          className: M("fds-select-input", t && "fds-select-input--open", I),
          onClick: J,
          onKeyDown: L,
          children: [
            /* @__PURE__ */ d(
              fe,
              {
                type: W,
                ref: V,
                label: P,
                name: E,
                placeholder: N ?? "Select",
                tags: q,
                maxVisibleTags: Y,
                searchValue: S,
                onSearchChange: v,
                onBackspace: b,
                helpText: _ === "error" ? void 0 : C,
                errorText: K,
                validationState: _,
                isDisabled: s,
                isRequired: j,
                isReadOnly: n,
                searchable: !!v,
                isOpen: t,
                leadingIcon: B,
                leadingText: H,
                onFocus: G,
                onChevronClick: n ? void 0 : () => r(!t)
              }
            ),
            t && k && c && typeof document < "u" && T(
              /* @__PURE__ */ d(
                "div",
                {
                  ref: i,
                  className: "fds-select-input__popover",
                  style: { top: c.top, left: c.left, width: c.width },
                  children: k
                }
              ),
              document.body
            )
          ]
        }
      );
    const R = o ? S : X, ee = N ?? (o ? "Search" : "Select");
    return /* @__PURE__ */ Q(
      "div",
      {
        ref: A,
        className: M("fds-select-input", t && "fds-select-input--open", I),
        onClick: J,
        onKeyDown: L,
        children: [
          /* @__PURE__ */ d(
            ne,
            {
              ref: V,
              label: P,
              name: E,
              placeholder: ee,
              value: R ?? "",
              readOnly: !o,
              isReadOnly: n,
              onChange: o ? (e) => v == null ? void 0 : v(e.value) : void 0,
              onFocus: G,
              helpText: _ === "error" ? void 0 : C,
              errorText: K,
              validationState: _,
              isDisabled: s,
              isRequired: j,
              icon: B,
              prefix: H,
              autoComplete: o ? "off" : void 0,
              role: "combobox",
              "aria-expanded": t,
              "aria-haspopup": "listbox",
              "aria-autocomplete": o ? "list" : void 0,
              trailingIcon: n ? void 0 : /* @__PURE__ */ d(
                "span",
                {
                  className: M("fds-select-input__chevron", t && "fds-select-input__chevron--open"),
                  role: "button",
                  "aria-label": t ? "Close menu" : "Open menu",
                  onMouseDown: (e) => {
                    e.preventDefault();
                  },
                  onClick: (e) => {
                    s || (e.stopPropagation(), r(!t));
                  },
                  children: /* @__PURE__ */ d(re, { size: 16 })
                }
              )
            }
          ),
          t && k && c && typeof document < "u" && T(
            /* @__PURE__ */ d(
              "div",
              {
                ref: i,
                className: "fds-select-input__popover",
                style: { top: c.top, left: c.left, width: c.width },
                children: k
              }
            ),
            document.body
          )
        ]
      }
    );
  }
);
ce.displayName = "SelectInput";
export {
  ce as SelectInput
};
