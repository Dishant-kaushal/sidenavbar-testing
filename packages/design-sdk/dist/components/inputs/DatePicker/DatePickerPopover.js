import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { cn as h } from "../../../utils/cn.js";
import { TextInput as a } from "../TextInput/TextInput.js";
import { formatDateInput as t, formatTimeInput as $ } from "./datePickerUtils.js";
import { Divider as D } from "../../layout/Divider/Divider.js";
import { CalendarHeader as E } from "./CalendarHeader.js";
import { CalendarWeekdays as C } from "./CalendarWeekdays.js";
import { CalendarDayCell as n } from "./CalendarDayCell.js";
import { CalendarFooter as ee } from "./CalendarFooter.js";
import { MonthYearCell as le } from "./MonthYearCell.js";
import { DatePresetSidebar as re } from "./DatePresetSidebar.js";
import { ComparisonPanel as pe } from "./ComparisonPanel.js";
/* empty css                      */
function de({
  showPresets: j = !0,
  presets: w,
  selectedPreset: A,
  onPresetSelect: F,
  startDate: V = "",
  startTime: W = "",
  endDate: k = "",
  endTime: z = "",
  onStartDateChange: m,
  onStartTimeChange: v,
  onEndDateChange: c,
  onEndTimeChange: f,
  calendarLabel: B = "March 2026",
  onPrevMonth: G,
  onNextMonth: I,
  onCalendarLabelClick: J,
  view: i = "date",
  days: K = [],
  onDayClick: o,
  onDayHover: u,
  onDayHoverEnd: Y,
  items: O = [],
  onItemClick: M,
  isApplyDisabled: Q = !1,
  onCancel: U,
  onApply: X,
  showComparison: L = !1,
  comparisonEnabled: P = !1,
  onComparisonToggle: Z,
  comparisonMode: H = "preceding",
  onComparisonModeChange: S,
  comparisonStartDate: T = "",
  comparisonEndDate: q = "",
  onComparisonStartDateChange: _,
  onComparisonEndDateChange: b,
  isRequired: d = !1,
  className: R,
  ...g
}) {
  const x = L && P, y = L ? /* @__PURE__ */ e(
    pe,
    {
      isEnabled: P,
      onToggle: Z ?? (() => {
      }),
      mode: H,
      onModeChange: S ?? (() => {
      })
    }
  ) : null;
  return /* @__PURE__ */ p("div", { className: h("fds-datepicker-popover", R), ...g, children: [
    j && /* @__PURE__ */ e(
      re,
      {
        presets: w,
        selectedValue: A,
        onPresetSelect: F,
        footerSlot: y
      }
    ),
    /* @__PURE__ */ p("div", { className: "fds-datepicker-popover__panel", children: [
      /* @__PURE__ */ p("div", { className: "fds-datepicker-popover__inputs", children: [
        /* @__PURE__ */ p("div", { className: "fds-datepicker-popover__input-row", children: [
          /* @__PURE__ */ e(
            a,
            {
              label: "Start Date",
              placeholder: "DD/MM/YYYY",
              value: V,
              maxLength: 10,
              isRequired: d,
              onChange: (l) => m == null ? void 0 : m(t(l.value))
            }
          ),
          x ? /* @__PURE__ */ e(
            a,
            {
              label: "End Date",
              placeholder: "DD/MM/YYYY",
              value: k,
              maxLength: 10,
              isRequired: d,
              onChange: (l) => c == null ? void 0 : c(t(l.value))
            }
          ) : /* @__PURE__ */ e(
            a,
            {
              label: "Start Time",
              placeholder: "HH:MM",
              value: W,
              maxLength: 5,
              isRequired: d,
              onChange: (l) => v == null ? void 0 : v($(l.value))
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { className: "fds-datepicker-popover__input-row", children: [
          x ? /* @__PURE__ */ e(
            a,
            {
              label: "Comp. Start Date",
              placeholder: "DD/MM/YYYY",
              value: T,
              maxLength: 10,
              isRequired: d,
              onChange: (l) => _ == null ? void 0 : _(t(l.value))
            }
          ) : /* @__PURE__ */ e(
            a,
            {
              label: "End Date",
              placeholder: "DD/MM/YYYY",
              value: k,
              maxLength: 10,
              isRequired: d,
              onChange: (l) => c == null ? void 0 : c(t(l.value))
            }
          ),
          x ? /* @__PURE__ */ e(
            a,
            {
              label: "Comp. End Date",
              placeholder: "DD/MM/YYYY",
              value: q,
              maxLength: 10,
              isRequired: d,
              onChange: (l) => b == null ? void 0 : b(t(l.value))
            }
          ) : /* @__PURE__ */ e(
            a,
            {
              label: "End Time",
              placeholder: "HH:MM",
              value: z,
              maxLength: 5,
              isRequired: d,
              onChange: (l) => f == null ? void 0 : f($(l.value))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e(D, { variant: "Muted" }),
      /* @__PURE__ */ p("div", { className: "fds-datepicker-popover__calendar", children: [
        /* @__PURE__ */ p("div", { className: "fds-datepicker-popover__calendar-header", children: [
          /* @__PURE__ */ e(
            E,
            {
              label: B,
              onPrev: G,
              onNext: I,
              onLabelClick: J
            }
          ),
          i === "date" && /* @__PURE__ */ e(C, {})
        ] }),
        /* @__PURE__ */ p("div", { className: h("fds-datepicker-popover__calendar-body", i !== "date" && "fds-datepicker-popover__calendar-body--grid"), children: [
          i === "date" && /* @__PURE__ */ e("div", { onMouseLeave: () => Y == null ? void 0 : Y(), children: K.map((l, s) => /* @__PURE__ */ e("div", { id: `week-${s}`, className: "fds-datepicker-popover__week", children: l.map((r, N) => /* @__PURE__ */ e(
            n,
            {
              id: `${s}-${N}`,
              date: r.date,
              type: r.type,
              isSelected: r.isSelected,
              isCurrentDate: r.isCurrentDate,
              onClick: () => o == null ? void 0 : o(r),
              onMouseEnter: () => u == null ? void 0 : u(r)
            }
          )) })) }),
          i !== "date" && O.map((l, s) => /* @__PURE__ */ e("div", { id: `row-${s}`, className: "fds-datepicker-popover__item-row", children: l.map((r, N) => /* @__PURE__ */ e(
            le,
            {
              id: `${s}-${N}`,
              label: r.label,
              isSelected: r.isSelected,
              onClick: () => M == null ? void 0 : M(r)
            }
          )) }))
        ] })
      ] }),
      /* @__PURE__ */ e(ee, { onCancel: U, onApply: X, isApplyDisabled: Q })
    ] })
  ] });
}
de.displayName = "DatePickerPopover";
export {
  de as DatePickerPopover
};
