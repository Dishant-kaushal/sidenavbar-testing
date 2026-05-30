import { jsxs as T, jsx as p } from "react/jsx-runtime";
import { forwardRef as le, useEffect as g, useRef as x, useId as pe, useCallback as c, useImperativeHandle as de, useState as me } from "react";
import { createPortal as W } from "react-dom";
import { TextInput as he } from "../TextInput/TextInput.js";
import { MultiSelectField as ve } from "../SelectInput/MultiSelectField.js";
import { cn as X } from "../../../utils/cn.js";
import { useControllableState as Y } from "../../../hooks/useControllableState.js";
import { useDropdownPortal as ge } from "../../../hooks/useDropdownPortal.js";
/* empty css                */
const we = le(
  ({
    type: d = "single",
    label: R = "",
    name: V,
    placeholder: M = "Search",
    inputValue: P,
    defaultValue: q,
    onInputChange: Z,
    helpText: F,
    errorText: H,
    validationState: w = "none",
    isDisabled: m = !1,
    isRequired: K,
    isOpen: $,
    onOpenChange: B,
    icon: S,
    prefix: ee,
    children: j,
    onFocus: D,
    onBlur: I,
    className: C,
    tags: te,
    maxVisibleTags: re,
    onBackspace: ne,
    onSubmit: b,
    noResultsText: U = "No results found",
    showClearButton: oe = !0,
    onClearButtonClicked: y,
    isLoading: se = !1,
    ...z
  }, ae) => {
    process.env.NODE_ENV !== "production" && g(() => {
      P !== void 0 && q !== void 0 && console.error(
        "[SearchInput] Pass either `inputValue` (controlled) or `defaultValue` (uncontrolled), not both."
      );
    }, []);
    const [ue, h] = Y({
      value: P,
      defaultValue: q ?? "",
      onChange: Z
    }), v = ue ?? "", [ce, G] = Y({
      value: $,
      defaultValue: !1,
      onChange: B
    }), t = ce ?? !1, J = x(t), N = x(!1), _ = x(null), f = x(null), k = pe(), r = c(
      (e) => {
        e || (N.current = !0), G(e);
      },
      [G]
    ), { portalRef: A, pos: n } = ge(_, t, () => r(!1)), L = () => {
      if (N.current) {
        N.current = !1;
        return;
      }
      m || r(!0), D == null || D();
    };
    g(() => {
      J.current && !t && requestAnimationFrame(() => {
        var e;
        (e = f.current) == null || e.focus();
      }), J.current = t;
    }, [t]), de(
      ae,
      () => ({
        focus: () => {
          var e;
          return (e = f.current) == null ? void 0 : e.focus();
        },
        blur: () => {
          var e;
          return (e = f.current) == null ? void 0 : e.blur();
        },
        clear: () => h("")
      }),
      [h]
    );
    const a = c(() => A.current ? Array.from(
      A.current.querySelectorAll(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )
    ) : [], []), E = c(
      (e) => {
        const s = a();
        s.length !== 0 && (e === "first" ? s[0] : s[s.length - 1]).focus();
      },
      [a]
    ), [i, o] = me(-1);
    g(() => {
      var s;
      const e = a();
      e.forEach((O, u) => {
        u === i ? O.setAttribute("data-highlighted", "true") : O.removeAttribute("data-highlighted");
      }), i >= 0 && ((s = e[i]) == null || s.scrollIntoView({ block: "nearest" }));
    }), g(() => {
      t || o(-1);
    }, [t]), g(() => {
      o(-1);
    }, [v]), c(
      (e) => {
        if (t) {
          E(e);
          return;
        }
        r(!0), requestAnimationFrame(() => E(e));
      },
      [t, r, E]
    );
    const Q = c(
      (e) => {
        if (!(m || e.defaultPrevented || e.target.getAttribute("role") === "menuitem"))
          switch (e.key) {
            case "Escape":
              t && (e.preventDefault(), e.stopPropagation(), r(!1));
              break;
            case "ArrowDown": {
              if (e.preventDefault(), !t)
                r(!0), o(0);
              else {
                const u = a().length;
                o((l) => l < u - 1 ? l + 1 : l);
              }
              break;
            }
            case "ArrowUp": {
              e.preventDefault(), t ? o((u) => u > 0 ? u - 1 : 0) : (r(!0), o(0));
              break;
            }
            case "Home":
              t && (e.preventDefault(), o(0));
              break;
            case "End":
              t && (e.preventDefault(), o(a().length - 1));
              break;
            case "Enter":
              if (t && i >= 0) {
                const l = a()[i];
                l && (e.preventDefault(), l.click());
              } else d === "single" && b && (e.preventDefault(), b(v));
              break;
          }
      },
      [m, t, r, a, i, d, b, v]
    ), fe = c(
      (e) => {
        h(e.value);
      },
      [h]
    ), ie = c(() => {
      y == null || y(), requestAnimationFrame(() => {
        var e;
        return (e = f.current) == null ? void 0 : e.focus();
      });
    }, [y]);
    return d === "multiple" || d === "multiple-flex" ? /* @__PURE__ */ T("div", { ref: _, className: X("fds-search-input", C), onKeyDown: Q, ...z, children: [
      /* @__PURE__ */ p(
        ve,
        {
          type: d,
          ref: f,
          label: R,
          name: V,
          placeholder: M,
          tags: te,
          maxVisibleTags: re,
          searchValue: v,
          onSearchChange: h,
          onBackspace: ne,
          onSubmit: b,
          helpText: w === "error" ? void 0 : F,
          errorText: H,
          validationState: w,
          isDisabled: m,
          isRequired: K,
          isOpen: t,
          leadingIcon: S,
          onFocus: L,
          onBlur: I
        }
      ),
      t && n && typeof document < "u" && W(
        /* @__PURE__ */ p(
          "div",
          {
            ref: A,
            id: k,
            className: "fds-search-input__popover",
            style: { top: n.top, left: n.left, width: n.width },
            children: j || /* @__PURE__ */ p("div", { className: "fds-search-input__empty", children: U })
          }
        ),
        document.body
      )
    ] }) : /* @__PURE__ */ T("div", { ref: _, className: X("fds-search-input", C), onKeyDown: Q, ...z, children: [
      /* @__PURE__ */ p(
        he,
        {
          ref: f,
          label: R,
          name: V,
          placeholder: M,
          value: v,
          onChange: fe,
          onFocus: () => L(),
          onBlur: () => I == null ? void 0 : I(),
          helpText: w === "error" ? void 0 : F,
          errorText: H,
          validationState: w,
          isDisabled: m,
          isRequired: K,
          icon: S,
          prefix: ee,
          suffix: void 0,
          autoComplete: "off",
          showClearButton: oe,
          onClearButtonClicked: ie,
          isLoading: se,
          role: "combobox",
          "aria-expanded": t,
          "aria-haspopup": "listbox",
          "aria-autocomplete": "list",
          "aria-controls": t ? k : void 0
        }
      ),
      t && n && typeof document < "u" && W(
        /* @__PURE__ */ p(
          "div",
          {
            ref: A,
            id: k,
            className: "fds-search-input__popover",
            style: { top: n.top, left: n.left, width: n.width },
            children: j || /* @__PURE__ */ p("div", { className: "fds-search-input__empty", children: U })
          }
        ),
        document.body
      )
    ] });
  }
);
we.displayName = "SearchInput";
export {
  we as SearchInput
};
