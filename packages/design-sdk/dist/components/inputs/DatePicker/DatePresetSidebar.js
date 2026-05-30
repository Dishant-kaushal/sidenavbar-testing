import { jsxs as d, jsx as l, Fragment as f } from "react/jsx-runtime";
import { useCallback as p } from "react";
import { cn as _ } from "../../../utils/cn.js";
import { DatePresetBase as y } from "./DatePresetBase.js";
import { Divider as h } from "../../layout/Divider/Divider.js";
/* empty css                      */
const D = [
  { label: "Custom", value: "custom" },
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Current Week", value: "current_week" },
  { label: "Previous 7 Days", value: "previous_7_days" },
  { label: "Current Month", value: "current_month" },
  { label: "Previous Month", value: "previous_month" },
  { label: "Previous 3 Month", value: "previous_3_month" },
  { label: "Previous 12 Month", value: "previous_12_month" },
  { label: "Current Year", value: "current_year" },
  { label: "Previous Year", value: "previous_year" }
];
function g({
  presets: v = D,
  selectedValue: i,
  onPresetSelect: o,
  footerSlot: s,
  className: m,
  ...b
}) {
  const c = p((e) => {
    const u = e.target;
    if (u.tagName !== "BUTTON") return;
    const n = e.currentTarget.querySelector(
      ".fds-date-preset-sidebar__list"
    );
    if (!n) return;
    const a = Array.from(n.querySelectorAll("button")), r = a.indexOf(u);
    if (r === -1) return;
    let t = -1;
    e.key === "ArrowDown" ? (e.preventDefault(), t = r < a.length - 1 ? r + 1 : 0) : e.key === "ArrowUp" && (e.preventDefault(), t = r > 0 ? r - 1 : a.length - 1), t >= 0 && a[t].focus();
  }, []);
  return /* @__PURE__ */ d(
    "div",
    {
      className: _("fds-date-preset-sidebar", m),
      onKeyDown: c,
      ...b,
      children: [
        /* @__PURE__ */ l("div", { className: "fds-date-preset-sidebar__list", role: "listbox", children: v.map((e) => /* @__PURE__ */ l(
          y,
          {
            id: e.value,
            label: e.label,
            isSelected: i === e.value,
            onClick: () => o == null ? void 0 : o(e.value),
            role: "option",
            "aria-selected": i === e.value
          }
        )) }),
        s && /* @__PURE__ */ d(f, { children: [
          /* @__PURE__ */ l(h, { variant: "Muted" }),
          /* @__PURE__ */ l("div", { className: "fds-date-preset-sidebar__footer", children: s })
        ] })
      ]
    }
  );
}
g.displayName = "DatePresetSidebar";
export {
  D as DEFAULT_PRESETS,
  g as DatePresetSidebar
};
