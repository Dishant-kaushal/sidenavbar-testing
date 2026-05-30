import { jsx as t, jsxs as r, Fragment as Q } from "react/jsx-runtime";
import { forwardRef as O, useId as ee, useRef as te, useState as se, useCallback as g } from "react";
import { ChevronDown as T } from "react-feather";
import { cn as n } from "../../../utils/cn.js";
import { Tag as U } from "../../data-display/Tag/Tag.js";
import { InputFieldHeader as le } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as re } from "../../forms/InputFieldFooter/InputFieldFooter.js";
const ie = O(
  ({
    type: W = "multiple",
    label: f,
    name: z,
    placeholder: D = "Select",
    tags: m = [],
    maxVisibleTags: b = 2,
    helpText: X,
    errorText: E,
    validationState: I = "none",
    isDisabled: l = !1,
    isRequired: K = !1,
    isOpen: i = !1,
    isReadOnly: s = !1,
    searchable: u = !1,
    searchValue: o,
    onSearchChange: c,
    onBackspace: _,
    onSubmit: M,
    leadingIcon: x,
    leadingText: N,
    children: j,
    onClick: v,
    onFocus: q,
    onBlur: a,
    onChevronClick: p,
    className: Y
  }, Z) => {
    const y = ee(), B = te(null), h = Z ?? B, [R, S] = se(!1), w = W === "multiple-flex", d = m.length > 0, H = K && R && !d, F = I === "error" || H, V = I === "error" ? E : H ? E ?? `${f} is required` : void 0, P = F ? V : X, k = g(() => {
      S(!0), a == null || a();
    }, [a]), $ = w ? m : m.slice(0, b), A = w ? 0 : m.length - b, C = g(
      (e) => {
        var L;
        l || s || ((L = h.current) == null || L.focus(), v == null || v(e));
      },
      [l, s, v, h]
    ), G = g(
      (e) => {
        c == null || c(e.target.value);
      },
      [c]
    ), J = g(
      (e) => {
        e.key === "Backspace" && !o && (_ == null || _()), e.key === "Enter" && o && M && (e.preventDefault(), M(o));
      },
      [o, _, M]
    );
    return /* @__PURE__ */ t("div", { className: n("fds-select-input__multi", Y), children: /* @__PURE__ */ r(
      "div",
      {
        className: n(
          "fds-text-input",
          l && "fds-text-input--disabled",
          s && "fds-text-input--readonly",
          F && "fds-text-input--error",
          i && "fds-select-input--open"
        ),
        children: [
          /* @__PURE__ */ t(
            le,
            {
              label: f,
              htmlFor: y,
              necessityIndicator: K ? "required" : "none"
            }
          ),
          /* @__PURE__ */ r("div", { className: "fds-text-input__field-wrapper fds-select-input__multi-field-wrapper", children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: n(
                  "fds-text-input__field fds-select-input__multi-trigger",
                  w && "fds-select-input__multi-trigger--flex"
                ),
                role: "combobox",
                "aria-expanded": i,
                "aria-haspopup": "listbox",
                "aria-disabled": l || void 0,
                onClick: C,
                children: w ? /* @__PURE__ */ r(Q, { children: [
                  /* @__PURE__ */ r(
                    "span",
                    {
                      className: n(
                        "fds-select-input__leading-col",
                        !u && "fds-select-input__leading-col--no-search"
                      ),
                      children: [
                        d && /* @__PURE__ */ t("span", { className: "fds-select-input__tags fds-select-input__tags--flex", children: $.map((e) => /* @__PURE__ */ t(
                          U,
                          {
                            id: e.label,
                            label: e.label,
                            size: "Medium",
                            isDisabled: l || s,
                            onDismiss: l || s ? void 0 : e.onDismiss
                          }
                        )) }),
                        /* @__PURE__ */ r(
                          "span",
                          {
                            className: n(
                              "fds-select-input__input-row",
                              (!u || d && !i) && "fds-select-input__input-row--hidden"
                            ),
                            children: [
                              x && /* @__PURE__ */ t("span", { className: "fds-text-input__icon", children: x }),
                              N && /* @__PURE__ */ t("span", { className: "fds-text-input__prefix BodyMediumRegular", children: N }),
                              /* @__PURE__ */ t(
                                "input",
                                {
                                  ref: h,
                                  id: y,
                                  type: "text",
                                  role: "searchbox",
                                  className: "fds-select-input__multi-input BodyMediumRegular",
                                  name: z,
                                  placeholder: d ? "" : D,
                                  value: o ?? "",
                                  disabled: l,
                                  readOnly: s || !u,
                                  "aria-label": f,
                                  "aria-readonly": s || !u || void 0,
                                  "aria-autocomplete": "list",
                                  autoComplete: "off",
                                  onChange: G,
                                  onKeyDown: J,
                                  onFocus: q,
                                  onBlur: k
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  !s && /* @__PURE__ */ t("span", { className: "fds-select-input__trailing--flex", children: /* @__PURE__ */ t(
                    "span",
                    {
                      className: n(
                        "fds-select-input__multi-chevron",
                        i && "fds-select-input__multi-chevron--open"
                      ),
                      role: "button",
                      "aria-label": i ? "Close menu" : "Open menu",
                      onMouseDown: (e) => e.preventDefault(),
                      onClick: (e) => {
                        l || (e.stopPropagation(), p == null || p());
                      },
                      children: /* @__PURE__ */ t(T, { size: 16 })
                    }
                  ) })
                ] }) : /* @__PURE__ */ r(Q, { children: [
                  /* @__PURE__ */ r("span", { className: "fds-text-input__leading", children: [
                    x && /* @__PURE__ */ t("span", { className: "fds-text-input__icon", children: x }),
                    N && /* @__PURE__ */ t("span", { className: "fds-text-input__prefix BodyMediumRegular", children: N }),
                    d && /* @__PURE__ */ r("span", { className: "fds-select-input__tags", children: [
                      $.map((e) => /* @__PURE__ */ t(
                        U,
                        {
                          id: e.label,
                          label: e.label,
                          size: "Medium",
                          isDisabled: l || s,
                          onDismiss: l || s ? void 0 : e.onDismiss
                        }
                      )),
                      A > 0 && /* @__PURE__ */ r("span", { className: "fds-select-input__overflow BodySmallRegular", children: [
                        "+",
                        A,
                        " more"
                      ] })
                    ] }),
                    /* @__PURE__ */ t(
                      "input",
                      {
                        ref: h,
                        id: y,
                        type: "text",
                        role: "searchbox",
                        className: "fds-select-input__multi-input BodyMediumRegular",
                        name: z,
                        placeholder: d ? "" : D,
                        value: o ?? "",
                        disabled: l,
                        readOnly: s || !u,
                        "aria-label": f,
                        "aria-readonly": s || !u || void 0,
                        "aria-autocomplete": "list",
                        autoComplete: "off",
                        onChange: G,
                        onKeyDown: J,
                        onFocus: q,
                        onBlur: a
                      }
                    )
                  ] }),
                  !s && /* @__PURE__ */ t("span", { className: "fds-text-input__trailing", children: /* @__PURE__ */ t(
                    "span",
                    {
                      className: n(
                        "fds-select-input__multi-chevron",
                        i && "fds-select-input__multi-chevron--open"
                      ),
                      role: "button",
                      "aria-label": i ? "Close menu" : "Open menu",
                      onMouseDown: (e) => e.preventDefault(),
                      onClick: (e) => {
                        l || (e.stopPropagation(), p == null || p());
                      },
                      children: /* @__PURE__ */ t(T, { size: 16 })
                    }
                  ) })
                ] })
              }
            ),
            i && j && /* @__PURE__ */ t("div", { className: "fds-select-input__popover", children: j })
          ] }),
          P && /* @__PURE__ */ t(
            re,
            {
              helpText: P,
              state: F ? "error" : "default"
            }
          )
        ]
      }
    ) });
  }
);
ie.displayName = "MultiSelectField";
export {
  ie as MultiSelectField
};
