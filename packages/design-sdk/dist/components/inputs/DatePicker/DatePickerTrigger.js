import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { forwardRef as S } from "react";
import { Calendar as f } from "react-feather";
import { ExpandAllIcon as A } from "./ExpandAllIcon.js";
import { cn as c } from "../../../utils/cn.js";
import { InputFieldHeader as H } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as q } from "../../forms/InputFieldFooter/InputFieldFooter.js";
/* empty css                      */
const w = S(
  ({
    selectionType: r = "single",
    label: m,
    necessityIndicator: b,
    placeholder: R,
    date: n,
    presetValue: z,
    range: p,
    isOpen: t = !1,
    isDisabled: s = !1,
    helpText: B,
    errorText: M,
    validationState: j = "none",
    showPreset: _ = !0,
    onClick: h,
    onPresetClick: i,
    onInputChange: l,
    inputValue: N,
    onInputFocus: g,
    className: y
  }, D) => {
    const u = R ?? (r === "single" ? "Select Date" : "Select Date Range"), o = j === "error", x = o ? M : B, v = r === "single" ? !!n : !!p, E = c(
      "fds-date-trigger",
      r === "range" && "fds-date-trigger--range",
      r === "range" && !_ && "fds-date-trigger--no-chip",
      t && "fds-date-trigger--open",
      s && "fds-date-trigger--disabled",
      o && "fds-date-trigger--error",
      y
    );
    return /* @__PURE__ */ d("div", { className: E, children: [
      m && /* @__PURE__ */ e(H, { label: m, necessityIndicator: b }),
      r === "single" ? (
        /* ── Single date — editable input field ───────────── */
        /* @__PURE__ */ e(
          "div",
          {
            className: "fds-date-trigger__field",
            onClick: h,
            "aria-expanded": t,
            children: /* @__PURE__ */ d("span", { className: "fds-date-trigger__leading", children: [
              /* @__PURE__ */ e("span", { className: "fds-date-trigger__icon", children: /* @__PURE__ */ e(f, { size: 16 }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  className: c(
                    "fds-date-trigger__input BodyMediumRegular",
                    !v && !N && "fds-date-trigger__input--placeholder"
                  ),
                  placeholder: u,
                  value: N ?? n ?? "",
                  onChange: (a) => l == null ? void 0 : l(a.target.value),
                  onFocus: () => g == null ? void 0 : g(),
                  onClick: (a) => a.stopPropagation(),
                  disabled: s
                }
              )
            ] })
          }
        )
      ) : (
        /* ── Range trigger — button (read-only) ───────────── */
        /* @__PURE__ */ e(
          "button",
          {
            ref: D,
            type: "button",
            className: "fds-date-trigger__field",
            onClick: h,
            disabled: s,
            "aria-expanded": t,
            "aria-haspopup": "dialog",
            children: /* @__PURE__ */ d("span", { className: "fds-date-trigger__leading", children: [
              _ ? /* @__PURE__ */ d(
                "span",
                {
                  className: "fds-date-trigger__preset",
                  onClick: (a) => {
                    a.stopPropagation(), i == null || i();
                  },
                  role: "button",
                  tabIndex: -1,
                  children: [
                    /* @__PURE__ */ e(f, { size: 16 }),
                    /* @__PURE__ */ e("span", { className: "fds-date-trigger__preset-label BodyMediumRegular", children: z || "Custom" }),
                    /* @__PURE__ */ e("span", { className: "fds-date-trigger__preset-expand", children: /* @__PURE__ */ e(A, {}) })
                  ]
                }
              ) : /* @__PURE__ */ e("span", { className: "fds-date-trigger__icon", children: /* @__PURE__ */ e(f, { size: 16 }) }),
              /* @__PURE__ */ e(
                "span",
                {
                  className: c(
                    "fds-date-trigger__value BodyMediumRegular",
                    !v && "fds-date-trigger__value--placeholder"
                  ),
                  children: p || u
                }
              )
            ] })
          }
        )
      ),
      x && /* @__PURE__ */ e(
        q,
        {
          helpText: x,
          state: o ? "error" : "default"
        }
      )
    ] });
  }
);
w.displayName = "DatePickerTrigger";
export {
  w as DatePickerTrigger
};
