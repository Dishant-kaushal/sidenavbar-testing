import { jsxs as $, jsx as o } from "react/jsx-runtime";
import { useState as Fe, useRef as Ke, useEffect as Ue, useCallback as Ve } from "react";
import { createPortal as j } from "react-dom";
import { cn as G } from "../../../utils/cn.js";
import { useKeyboard as Ye } from "../../../hooks/useKeyboard.js";
import { useDropdownPortal as W } from "../../../hooks/useDropdownPortal.js";
import { DatePickerTrigger as $e } from "./DatePickerTrigger.js";
import { DatePickerPopover as je } from "./DatePickerPopover.js";
import { CalendarBase as Ge } from "./CalendarBase.js";
import { DEFAULT_PRESETS as We } from "./DatePresetSidebar.js";
import { DropdownMenu as ze } from "../../overlays/DropdownMenu/DropdownMenu.js";
import { ActionListItem as Je } from "../../overlays/DropdownMenu/ActionListItem.js";
import { ActionListItemGroup as Qe } from "../../overlays/DropdownMenu/ActionListItemGroup.js";
import { useDatePickerState as Xe } from "./useDatePickerState.js";
import { formatDate as E } from "./datePickerUtils.js";
/* empty css               */
const Ze = {
  custom: "Custom",
  today: "Today",
  yesterday: "Yesterday",
  current_week: "Current Week",
  previous_7_days: "Past 7 days",
  current_month: "Current Month",
  previous_month: "Previous Month",
  previous_3_month: "Previous 3 Month",
  previous_12_month: "Previous 12 Month",
  current_year: "Current Year",
  previous_year: "Previous Year"
};
function et({
  mode: r = "single",
  isOpen: z,
  onOpenChange: J,
  value: u,
  onChange: Q,
  rangeValue: X,
  onRangeChange: Z,
  showPresets: ee = !0,
  showPresetChip: h = !0,
  presets: _,
  selectedPreset: te,
  onPresetSelect: re,
  label: T,
  placeholder: ne,
  helpText: oe,
  errorText: w,
  validationState: g,
  isRequired: C = !1,
  isDisabled: l,
  showPeriodicity: b = !1,
  periodicitySlot: v,
  showComparison: S = !1,
  comparisonRangeValue: ae,
  onComparisonRangeChange: se,
  className: ie,
  ...le
}) {
  const ce = Xe({
    mode: r,
    controlledOpen: z,
    onOpenChange: J,
    value: u,
    onChange: Q,
    rangeValue: X,
    onRangeChange: Z,
    controlledPreset: te,
    controlledPresetSelect: re,
    isDisabled: l,
    showComparison: S,
    comparisonRangeValue: ae,
    onComparisonRangeChange: se
  }), {
    open: t,
    setOpen: c,
    presetOpen: a,
    setPresetOpen: s,
    preset: y,
    view: m,
    containerRef: n,
    closedByKeyboard: d,
    days: R,
    monthItems: x,
    yearItems: I,
    headerLabel: A,
    singleInputText: de,
    startRawText: pe,
    endRawText: ue,
    startTimeRaw: me,
    endTimeRaw: fe,
    isApplyDisabled: M,
    resolvedRange: f,
    comparisonEnabled: he,
    comparisonMode: ge,
    comparisonStartRawText: Ce,
    comparisonEndRawText: ve,
    closeAndRevert: p,
    handlePrev: N,
    handleNext: L,
    handleHeaderClick: O,
    handleItemClick: H,
    handleDayClick: q,
    handleDayHover: ye,
    handleDayHoverEnd: De,
    handlePresetSelect: B,
    handleApply: F,
    handleCancel: K,
    handleSingleInputChange: ke,
    handleStartDateChange: Pe,
    handleEndDateChange: Ee,
    handleStartTimeChange: _e,
    handleEndTimeChange: Te,
    handleComparisonToggle: we,
    handleComparisonModeChange: be,
    handleComparisonStartDateChange: Se,
    handleComparisonEndDateChange: Re
  } = ce, [xe, Ie] = Fe(!1), Ae = r === "range" ? f != null : u != null, U = C && xe && !Ae, Me = g === "error" || U, Ne = g === "error" ? w : U ? w ?? `${T ?? "This field"} is required` : void 0, { portalRef: V, pos: D } = W(n, t, p), { portalRef: Le, pos: k } = W(n, a, () => s(!1));
  Ye("Escape", p);
  const P = Ke(t);
  Ue(() => {
    !P.current && t && requestAnimationFrame(() => {
      var i;
      const e = (i = V.current) == null ? void 0 : i.querySelector(
        'input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      e == null || e.focus();
    }), P.current && !t && (Ie(!0), d.current && (d.current = !1, requestAnimationFrame(() => {
      var i;
      const e = (i = n.current) == null ? void 0 : i.querySelector(
        "button.fds-date-trigger__field, input.fds-date-trigger__input"
      );
      e == null || e.focus();
    }))), P.current = t;
  }, [t, n, d]);
  const Oe = Ve(
    (e) => {
      if (l) return;
      const i = e.target;
      if (!(i.closest(".fds-date-trigger__field") !== null)) {
        e.key === "Escape" && (t || a) && (e.preventDefault(), e.stopPropagation(), d.current = !0, p());
        return;
      }
      const Y = i.tagName === "INPUT";
      switch (e.key) {
        case "Enter":
        case " ":
          !Y && r === "range" && (e.preventDefault(), s(!1), c(!t));
          break;
        case "Escape":
          (t || a) && (e.preventDefault(), e.stopPropagation(), d.current = !0, p());
          break;
        case "ArrowDown":
        case "ArrowUp":
          Y || (e.preventDefault(), t || (s(!1), c(!0)));
          break;
      }
    },
    [l, t, a, r, c, s, p, d]
  ), He = r === "single" && u ? E(u) : void 0, qe = r === "range" && f ? `${E(f.start)} - ${E(f.end)}` : void 0, Be = Ze[y] ?? "Custom";
  return /* @__PURE__ */ $("div", { ref: n, className: G("fds-datepicker", ie), onKeyDown: Oe, ...le, children: [
    /* @__PURE__ */ $("div", { className: G("fds-datepicker__trigger-row", b && !!v && "fds-datepicker__trigger-row--with-periodicity"), children: [
      /* @__PURE__ */ o(
        $e,
        {
          selectionType: r,
          label: T,
          placeholder: ne,
          date: He,
          presetValue: Be,
          range: qe,
          showPreset: h,
          isOpen: t,
          isDisabled: l,
          helpText: oe,
          errorText: Ne,
          validationState: Me ? "error" : g,
          necessityIndicator: C ? "required" : void 0,
          onClick: () => {
            l || (!t && n.current && n.current.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 })), s(!1), c(!t));
          },
          onPresetClick: () => {
            l || (!a && n.current && n.current.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 })), c(!1), s(!a));
          },
          inputValue: r === "single" ? de : void 0,
          onInputChange: r === "single" ? ke : void 0,
          onInputFocus: () => {
            !l && !t && c(!0);
          }
        }
      ),
      b && v && /* @__PURE__ */ o("div", { className: "fds-datepicker__periodicity", onMouseDown: () => {
        t && c(!1), a && s(!1);
      }, children: v })
    ] }),
    h && a && k && typeof document < "u" && j(
      /* @__PURE__ */ o(
        "div",
        {
          ref: Le,
          className: "fds-datepicker__preset-dropdown",
          style: { top: k.top, left: k.left },
          children: /* @__PURE__ */ o(ze, { children: /* @__PURE__ */ o(Qe, { children: (_ ?? We).filter((e) => e.value !== "custom").map((e) => /* @__PURE__ */ o(
            Je,
            {
              title: e.label,
              selectionType: "Single",
              isSelected: y === e.value,
              onClick: () => {
                B(e.value), s(!1);
              }
            },
            e.value
          )) }) })
        }
      ),
      document.body
    ),
    t && D && typeof document < "u" && j(
      /* @__PURE__ */ o(
        "div",
        {
          ref: V,
          className: "fds-datepicker__popover",
          style: { top: D.top, left: D.left },
          children: r === "single" ? /* @__PURE__ */ o(
            Ge,
            {
              view: m,
              headerLabel: A,
              days: R,
              items: m === "month" ? x : I,
              onDayClick: q,
              onItemClick: H,
              onHeaderClick: O,
              onPrev: N,
              onNext: L,
              showFooter: !0,
              isApplyDisabled: M,
              onCancel: K,
              onApply: F
            }
          ) : /* @__PURE__ */ o(
            je,
            {
              isRequired: C,
              showPresets: ee && h,
              presets: _,
              selectedPreset: y,
              onPresetSelect: B,
              startDate: pe,
              endDate: ue,
              startTime: me,
              endTime: fe,
              onStartDateChange: Pe,
              onEndDateChange: Ee,
              onStartTimeChange: _e,
              onEndTimeChange: Te,
              calendarLabel: A,
              view: m,
              days: R,
              items: m === "month" ? x : I,
              onDayClick: q,
              onDayHover: ye,
              onDayHoverEnd: De,
              onItemClick: H,
              onCalendarLabelClick: O,
              onPrevMonth: N,
              onNextMonth: L,
              isApplyDisabled: M,
              onCancel: K,
              onApply: F,
              showComparison: S,
              comparisonEnabled: he,
              onComparisonToggle: we,
              comparisonMode: ge,
              onComparisonModeChange: be,
              comparisonStartDate: Ce,
              comparisonEndDate: ve,
              onComparisonStartDateChange: Se,
              onComparisonEndDateChange: Re
            }
          )
        }
      ),
      document.body
    )
  ] });
}
et.displayName = "DatePicker";
export {
  et as DatePicker
};
