import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { Switch as n } from "../Switch/Switch.js";
import { DatePresetBase as p } from "./DatePresetBase.js";
/* empty css                    */
const t = [
  { value: "preceding", label: "Previous period" },
  { value: "preceding_last_year", label: "Same period last year" },
  { value: "custom", label: "Custom" }
];
function c({
  isEnabled: a,
  onToggle: s,
  mode: o,
  onModeChange: r
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: "fds-comparison-panel",
      role: "listbox",
      "aria-label": "Comparison period",
      children: [
        /* @__PURE__ */ i("div", { className: "fds-comparison-panel__toggle", children: [
          /* @__PURE__ */ l("span", { className: "fds-comparison-panel__title BodySmallSemibold", children: "Compare" }),
          /* @__PURE__ */ l(
            n,
            {
              isChecked: a,
              size: "Small",
              accessibilityLabel: "Enable comparison mode",
              onChange: ({ isChecked: e }) => s(e)
            }
          )
        ] }),
        t.map((e) => /* @__PURE__ */ l(
          p,
          {
            id: e.value,
            label: e.label,
            isSelected: o === e.value,
            disabled: !a,
            onClick: () => r(e.value),
            role: "option",
            "aria-selected": o === e.value,
            "aria-disabled": !a
          },
          e.value
        ))
      ]
    }
  );
}
c.displayName = "ComparisonPanel";
export {
  c as ComparisonPanel
};
