import { jsxs as o, jsx as t, Fragment as Z } from "react/jsx-runtime";
import { useState as c, useRef as Fe, useEffect as Q } from "react";
import { SelectInput as u } from "../../inputs/SelectInput/SelectInput.js";
import { DropdownMenu as g } from "../../overlays/DropdownMenu/DropdownMenu.js";
import { ActionListItem as y } from "../../overlays/DropdownMenu/ActionListItem.js";
import { ActionListItemGroup as _ } from "../../overlays/DropdownMenu/ActionListItemGroup.js";
import { Radio as Te } from "../../inputs/Radio/Radio.js";
import { RadioGroup as Re } from "../../inputs/Radio/RadioGroup.js";
import { ProductAccordionItem as V } from "../ProductAccordion/ProductAccordionItem.js";
import { Switch as v } from "../../inputs/Switch/Switch.js";
import { ListCardLeadingItem as Ue } from "../ListCard/ListCardLeadingItem.js";
import { ListCardTrailingItem as S } from "../ListCard/ListCardTrailingItem.js";
import { ListCard as ee } from "../ListCard/ListCard.js";
import { TextInput as We } from "../../inputs/TextInput/TextInput.js";
import { AddDurationPanel as Ye } from "./AddDurationPanel.js";
import { AddShiftPanel as Ge } from "./AddShiftPanel.js";
import { Modal as De } from "../../overlays/Modal/Modal.js";
/* empty css                         */
const k = [
  {
    id: "today",
    label: "Today",
    calendarType: "today",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 0,
    xPeriod: "day",
    xEvent: "Start",
    y: 0,
    yPeriod: "day",
    yEvent: "End",
    periodicities: ["Hourly"]
  },
  {
    id: "yesterday",
    label: "Yesterday",
    calendarType: "yesterday",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 1,
    xPeriod: "day",
    xEvent: "Start",
    y: 1,
    yPeriod: "day",
    yEvent: "End",
    periodicities: ["Hourly"]
  },
  {
    id: "current_week",
    label: "Current Week",
    calendarType: "current_week",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 0,
    xPeriod: "week",
    xEvent: "Start",
    y: 0,
    yPeriod: "week",
    yEvent: "Now",
    periodicities: ["Hourly", "Daily"]
  },
  {
    id: "previous_week",
    label: "Previous Week",
    calendarType: "previous_week",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 1,
    xPeriod: "week",
    xEvent: "Start",
    y: 1,
    yPeriod: "week",
    yEvent: "End",
    periodicities: ["Hourly", "Daily"]
  },
  {
    id: "last_7d",
    label: "Last 7 Days",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 7,
    xPeriod: "day",
    xEvent: "Start",
    y: 0,
    yPeriod: "day",
    yEvent: "Now",
    periodicities: ["Hourly", "Daily"]
  },
  {
    id: "current_month",
    label: "Current Month",
    calendarType: "current_month",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 0,
    xPeriod: "month",
    xEvent: "Start",
    y: 0,
    yPeriod: "month",
    yEvent: "Now",
    periodicities: ["Daily"]
  },
  {
    id: "previous_month",
    label: "Previous Month",
    calendarType: "previous_month",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 1,
    xPeriod: "month",
    xEvent: "Start",
    y: 1,
    yPeriod: "month",
    yEvent: "End",
    periodicities: ["Daily"]
  },
  {
    id: "last_30d",
    label: "Last 30 Days",
    isBuiltIn: !0,
    navigation: "Previous",
    x: 30,
    xPeriod: "day",
    xEvent: "Start",
    y: 0,
    yPeriod: "day",
    yEvent: "Now",
    periodicities: ["Daily"]
  }
], H = new Set(k.map((i) => i.id)), $e = new Set(k.map((i) => i.id)), je = "today", Ie = [
  { value: "fixed", label: "Fixed Type" },
  { value: "local", label: "Local Time" },
  { value: "global", label: "Global Timepicker" }
], Je = [
  "UTC",
  "Asia/Kolkata",
  "Asia/Dubai",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Paris",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Australia/Sydney"
], Ke = {
  minute: 1,
  hour: 60,
  day: 1440,
  week: 10080,
  month: 43200,
  year: 525600
}, Xe = Array.from({ length: 24 }, (i, d) => String(d).padStart(2, "0")), Ze = Array.from({ length: 60 }, (i, d) => String(d).padStart(2, "0")), Qe = Array.from({ length: 31 }, (i, d) => String(d + 1).padStart(2, "0")), Ve = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], ve = Array.from({ length: 11 }, (i, d) => String(2020 + d)), ei = ["S", "M", "T", "W", "T", "F", "S"], ii = {
  identifier: "start",
  hour: "",
  minute: "",
  dayOfWeek: null,
  date: "",
  month: "",
  year: ""
};
function Pe(i) {
  var I;
  if ((I = i.periodicities) != null && I.length) return i.periodicities.join(", ");
  if (i.calendarType)
    switch (i.calendarType) {
      case "today":
      case "yesterday":
        return "Hourly";
      case "current_week":
      case "previous_week":
        return "Hourly, Daily";
      case "current_month":
      case "previous_month":
        return "Daily";
    }
  const d = (i.x ?? 1) * (Ke[i.xPeriod ?? "day"] ?? 1440);
  return d <= 60 ? "Minute, Hourly" : d <= 1440 ? "Hourly" : d <= 10080 ? "Hourly, Daily" : d <= 43200 ? "Daily" : "Daily, Monthly";
}
function Si({ value: i, onChange: d, globalTimepickers: I = [], mode: Ne, showFixedType: A = !0 }) {
  var ue, ge, _e;
  const [z, ie] = c((i == null ? void 0 : i.timezone) ?? "Asia/Kolkata"), [P, q] = c(() => {
    const e = (i == null ? void 0 : i.timeType) ?? "fixed";
    return !A && e === "fixed" ? "local" : e;
  }), [E, F] = c((i == null ? void 0 : i.globalTimepickerId) ?? ""), [C, R] = c(
    i != null && i.allDurations ? new Set(i.allDurations.filter((e) => H.has(e.id)).map((e) => e.id)) : new Set($e)
  ), [N, U] = c(
    ((ue = i == null ? void 0 : i.allDurations) == null ? void 0 : ue.filter((e) => !H.has(e.id))) ?? []
  ), [x, w] = c((i == null ? void 0 : i.defaultDurationId) ?? je), [O, te] = c((i == null ? void 0 : i.disablePeriodicities) ?? !1), [ne, le] = c((i == null ? void 0 : i.comparisonMode) ?? !1), [oe, ce] = c((i == null ? void 0 : i.disableTimeSelection) ?? !1), [ae, se] = c((i == null ? void 0 : i.futureDaysAllowed) ?? ""), [T, W] = c((i == null ? void 0 : i.shifts) ?? []), [Y, de] = c((i == null ? void 0 : i.shiftAggregator) ?? ""), [r, re] = c((i == null ? void 0 : i.cycleTime) ?? ii), [ke, Ce] = c(!1), [xe, Ae] = c(!1), [Ee, we] = c(!1), [p, Oe] = c(null), [me, b] = c(null), [fe, M] = c(null), [he, L] = c(null), [h, ye] = c(null), G = Fe(null);
  function a(e, n) {
    Oe(n ? e : null);
  }
  Q(() => {
    d($({}));
  }, []), Q(() => {
    i && (i.timezone !== void 0 && ie(i.timezone), i.timeType !== void 0 && q(i.timeType), i.globalTimepickerId !== void 0 && F(i.globalTimepickerId), i.disablePeriodicities !== void 0 && te(i.disablePeriodicities), i.comparisonMode !== void 0 && le(i.comparisonMode), i.disableTimeSelection !== void 0 && ce(i.disableTimeSelection), i.futureDaysAllowed !== void 0 && se(i.futureDaysAllowed), i.shiftAggregator !== void 0 && de(i.shiftAggregator), i.shifts && W(i.shifts), i.cycleTime && re(i.cycleTime), i.defaultDurationId && w(i.defaultDurationId), i.allDurations && (R(new Set(i.allDurations.filter((e) => H.has(e.id)).map((e) => e.id))), U(i.allDurations.filter((e) => !H.has(e.id)))));
  }, [i == null ? void 0 : i.timezone, i == null ? void 0 : i.allDurations, i == null ? void 0 : i.defaultDurationId, i == null ? void 0 : i.shifts, i == null ? void 0 : i.cycleTime]), Q(() => {
    !A && P === "fixed" && (q("local"), d($({ timeType: "local" })));
  }, [A]);
  const pe = A ? Ie : Ie.filter((e) => e.value !== "fixed");
  function $(e) {
    var be, Se;
    const n = e.enabledIds ?? C, l = e.customPresets ?? N, m = e.defaultDurationId ?? x, f = [
      ...k.filter((X) => n.has(X.id)),
      ...l
    ], K = ((be = f.find((X) => X.id === m)) == null ? void 0 : be.id) ?? ((Se = f[0]) == null ? void 0 : Se.id) ?? "";
    return {
      timezone: e.timezone ?? z,
      timeType: e.timeType ?? P,
      globalTimepickerId: e.globalTimepickerId ?? E,
      allDurations: f,
      defaultDurationId: K,
      defaultPeriodicity: (i == null ? void 0 : i.defaultPeriodicity) ?? "hourly",
      disablePeriodicities: e.disablePeriodicities ?? O,
      comparisonMode: e.comparisonMode ?? ne,
      disableTimeSelection: e.disableTimeSelection ?? oe,
      futureDaysAllowed: e.futureDaysAllowed ?? ae,
      shifts: e.shifts ?? T,
      shiftAggregator: e.shiftAggregator ?? Y,
      cycleTime: e.cycleTime ?? r
    };
  }
  function s(e) {
    d($(e));
  }
  function j(e, n) {
    const l = new Set(C);
    if (n)
      l.add(e);
    else if (l.delete(e), x === e) {
      const m = k.find((K) => l.has(K.id)), f = (m == null ? void 0 : m.id) ?? "";
      w(f), R(l), s({ enabledIds: l, defaultDurationId: f });
      return;
    }
    R(l), s({ enabledIds: l });
  }
  function J(e) {
    w(e), s({ defaultDurationId: e });
  }
  function Me(e) {
    const n = N.filter((l) => l.id !== e);
    if (U(n), x === e) {
      const l = [...k.filter((f) => C.has(f.id)), ...n][0], m = (l == null ? void 0 : l.id) ?? "";
      w(m), s({ customPresets: n, defaultDurationId: m });
    } else
      s({ customPresets: n });
  }
  function Le(e) {
    let n;
    fe ? n = N.map((l) => l.id === e.id ? e : l) : n = [...N, e], U(n), s({ customPresets: n }), b(null), M(null);
  }
  function Be(e) {
    const n = T.filter((l) => l.id !== e);
    W(n), s({ shifts: n });
  }
  function He(e) {
    let n;
    he ? n = T.map((l) => l.id === e.id ? e : l) : n = [...T, e], W(n), s({ shifts: n }), b(null), L(null);
  }
  function D(e) {
    const n = { ...r, ...e };
    re(n), s({ cycleTime: n });
  }
  const ze = C.size + N.length, qe = P === "global", B = Ne === "series";
  return /* @__PURE__ */ o("div", { className: "fds-ttc", ref: G, children: [
    /* @__PURE__ */ t("div", { className: "fds-ttc__body", children: /* @__PURE__ */ o("div", { className: "fds-ttc__section", children: [
      /* @__PURE__ */ o("div", { style: { padding: "16px 16px 0 16px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
          u,
          {
            label: "TimeZone",
            name: "timezone",
            placeholder: "Select timezone",
            value: z,
            isOpen: p === "timezone",
            onOpenChange: (e) => a("timezone", e),
            children: /* @__PURE__ */ t(g, { children: /* @__PURE__ */ t(_, { children: Je.map((e) => /* @__PURE__ */ t(
              y,
              {
                title: e,
                selectionType: "Single",
                isSelected: z === e,
                onClick: () => {
                  ie(e), a("timezone", !1), s({ timezone: e });
                }
              },
              e
            )) }) })
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
          u,
          {
            label: "Time Type",
            name: "timeType",
            placeholder: "Select time type",
            value: ((ge = pe.find((e) => e.value === P)) == null ? void 0 : ge.label) ?? "",
            isOpen: p === "timeType",
            onOpenChange: (e) => a("timeType", e),
            children: /* @__PURE__ */ t(g, { children: /* @__PURE__ */ t(_, { children: pe.map((e) => /* @__PURE__ */ t(
              y,
              {
                title: e.label,
                selectionType: "Single",
                isSelected: P === e.value,
                onClick: () => {
                  q(e.value), a("timeType", !1);
                  const n = e.value !== "global" ? "" : E;
                  F(n), s({ timeType: e.value, globalTimepickerId: n });
                }
              },
              e.value
            )) }) })
          }
        ) }),
        P === "global" && /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
          u,
          {
            label: "Global Timepicker",
            name: "globalTimepicker",
            placeholder: "Select timepicker",
            value: ((_e = I.find((e) => e.id === E)) == null ? void 0 : _e.name) ?? "",
            isOpen: p === "globalTimepicker",
            onOpenChange: (e) => a("globalTimepicker", e),
            children: /* @__PURE__ */ t(g, { children: /* @__PURE__ */ o(_, { children: [
              I.length === 0 && /* @__PURE__ */ t(y, { title: "No timepickers available", isDisabled: !0 }),
              I.map((e) => /* @__PURE__ */ t(
                y,
                {
                  title: e.name,
                  selectionType: "Single",
                  isSelected: E === e.id,
                  onClick: () => {
                    F(e.id), a("globalTimepicker", !1), s({ globalTimepickerId: e.id });
                  }
                },
                e.id
              ))
            ] }) })
          }
        ) })
      ] }),
      !qe && /* @__PURE__ */ o(Z, { children: [
        /* @__PURE__ */ t(
          V,
          {
            title: "Cycle Time",
            isExpanded: Ee,
            onToggle: () => we((e) => !e),
            children: /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-body", children: [
              /* @__PURE__ */ o(
                Re,
                {
                  label: "Cycle Time Identifier",
                  name: "cycle-identifier",
                  value: r.identifier,
                  onChange: (e) => D({ identifier: e.value }),
                  orientation: "Horizontal",
                  children: [
                    /* @__PURE__ */ t(Te, { value: "start", label: "Start" }),
                    /* @__PURE__ */ t(Te, { value: "end", label: "End" })
                  ]
                }
              ),
              /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-row fds-ttc__cycle-row--gap16", children: [
                /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
                  u,
                  {
                    label: "Hr",
                    name: "cycle-hr",
                    placeholder: "Select Hr",
                    value: r.hour,
                    isOpen: p === "hr",
                    onOpenChange: (e) => a("hr", e),
                    children: /* @__PURE__ */ t(g, { className: "fds-ttc__cycle-dropdown-scroll", children: /* @__PURE__ */ t(_, { children: Xe.map((e) => /* @__PURE__ */ t(
                      y,
                      {
                        title: e,
                        selectionType: "Single",
                        isSelected: r.hour === e,
                        onClick: () => {
                          D({ hour: e }), a("hr", !1);
                        }
                      },
                      e
                    )) }) })
                  }
                ) }),
                /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
                  u,
                  {
                    label: "Min",
                    name: "cycle-min",
                    placeholder: "Select min",
                    value: r.minute,
                    isOpen: p === "min",
                    onOpenChange: (e) => a("min", e),
                    children: /* @__PURE__ */ t(g, { className: "fds-ttc__cycle-dropdown-scroll", children: /* @__PURE__ */ t(_, { children: Ze.map((e) => /* @__PURE__ */ t(
                      y,
                      {
                        title: e,
                        selectionType: "Single",
                        isSelected: r.minute === e,
                        onClick: () => {
                          D({ minute: e }), a("min", !1);
                        }
                      },
                      e
                    )) }) })
                  }
                ) })
              ] }),
              /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-day-section", children: [
                /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-day-label", children: [
                  /* @__PURE__ */ t("span", { className: "fds-ttc__label-text", children: "Day" }),
                  /* @__PURE__ */ t("span", { className: "fds-ttc__required-marker", children: "*" })
                ] }),
                /* @__PURE__ */ t("div", { className: "fds-ttc__cycle-day-row", children: ei.map((e, n) => /* @__PURE__ */ t(
                  "button",
                  {
                    className: `fds-ttc__cycle-day-btn${r.dayOfWeek === n ? " fds-ttc__cycle-day-btn--active" : ""}`,
                    onClick: () => D({ dayOfWeek: r.dayOfWeek === n ? null : n }),
                    children: e
                  },
                  n
                )) })
              ] }),
              /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-row fds-ttc__cycle-row--gap12", children: [
                /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
                  u,
                  {
                    label: "Date",
                    name: "cycle-date",
                    placeholder: "Select date",
                    value: r.date,
                    isOpen: p === "date",
                    onOpenChange: (e) => a("date", e),
                    children: /* @__PURE__ */ t(g, { className: "fds-ttc__cycle-dropdown-scroll", children: /* @__PURE__ */ t(_, { children: Qe.map((e) => /* @__PURE__ */ t(
                      y,
                      {
                        title: e,
                        selectionType: "Single",
                        isSelected: r.date === e,
                        onClick: () => {
                          D({ date: e }), a("date", !1);
                        }
                      },
                      e
                    )) }) })
                  }
                ) }),
                /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
                  u,
                  {
                    label: "Month",
                    name: "cycle-month",
                    placeholder: "Select month",
                    value: r.month,
                    isOpen: p === "month",
                    onOpenChange: (e) => a("month", e),
                    children: /* @__PURE__ */ t(g, { children: /* @__PURE__ */ t(_, { children: Ve.map((e) => /* @__PURE__ */ t(
                      y,
                      {
                        title: e,
                        selectionType: "Single",
                        isSelected: r.month === e,
                        onClick: () => {
                          D({ month: e }), a("month", !1);
                        }
                      },
                      e
                    )) }) })
                  }
                ) })
              ] }),
              /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
                u,
                {
                  label: "Year",
                  name: "cycle-year",
                  placeholder: "Select year",
                  value: r.year,
                  isOpen: p === "year",
                  onOpenChange: (e) => a("year", e),
                  children: /* @__PURE__ */ t(g, { children: /* @__PURE__ */ t(_, { children: ve.map((e) => /* @__PURE__ */ t(
                    y,
                    {
                      title: e,
                      selectionType: "Single",
                      isSelected: r.year === e,
                      onClick: () => {
                        D({ year: e }), a("year", !1);
                      }
                    },
                    e
                  )) }) })
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ t(
          V,
          {
            title: "Duration",
            isExpanded: ke,
            onToggle: () => Ce((e) => !e),
            trailingIcon: /* @__PURE__ */ o("div", { className: "fds-ttc__duration-header-actions", onClick: (e) => e.stopPropagation(), children: [
              /* @__PURE__ */ t("span", { className: "fds-ttc__duration-counter", children: ze }),
              /* @__PURE__ */ t(
                "span",
                {
                  className: "fds-ttc__duration-add-btn material-icons",
                  role: "button",
                  tabIndex: 0,
                  title: "Add preset",
                  onClick: () => {
                    var n;
                    const e = (n = G.current) == null ? void 0 : n.getBoundingClientRect();
                    e && ye({ x: e.right + 30, y: e.top }), M(null), b("duration");
                  },
                  children: "add"
                }
              )
            ] }),
            children: /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-body", children: [
              !B && /* @__PURE__ */ o("div", { className: "fds-ttc__duration-toggle-row", children: [
                /* @__PURE__ */ t("span", { className: "fds-ttc__duration-toggle-label", children: "Disable Periodicities" }),
                /* @__PURE__ */ t(
                  v,
                  {
                    name: "disablePeriodicities",
                    accessibilityLabel: "Disable Periodicities",
                    isChecked: O,
                    onChange: ({ isChecked: e }) => {
                      te(e), s({ disablePeriodicities: e });
                    }
                  }
                )
              ] }),
              k.map((e) => {
                const n = C.has(e.id), l = x === e.id && n, m = Pe(e);
                return /* @__PURE__ */ t(
                  ee,
                  {
                    title: e.label,
                    subtitle: O || B ? void 0 : `Periodicity: ${m}`,
                    isSelected: l,
                    className: l ? void 0 : "fds-ttc__duration-card--hideable",
                    onClick: () => {
                      n ? l || J(e.id) : j(e.id, !0);
                    },
                    trailingItems: l ? /* @__PURE__ */ t(S, { trailing: "Icon", icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon fds-ttc__duration-icon--active", children: "check_circle" }) }) : n ? /* @__PURE__ */ o(Z, { children: [
                      /* @__PURE__ */ t(
                        S,
                        {
                          trailing: "Icon",
                          title: "Set as default",
                          icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon", children: "check_circle" }),
                          onClick: (f) => {
                            f.stopPropagation(), J(e.id);
                          }
                        }
                      ),
                      /* @__PURE__ */ t(
                        S,
                        {
                          trailing: "Icon",
                          title: "Hide",
                          icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon", children: "visibility" }),
                          onClick: (f) => {
                            f.stopPropagation(), j(e.id, !1);
                          }
                        }
                      )
                    ] }) : /* @__PURE__ */ t(
                      S,
                      {
                        trailing: "Icon",
                        title: "Show",
                        icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon", children: "visibility_off" }),
                        onClick: (f) => {
                          f.stopPropagation(), j(e.id, !0);
                        }
                      }
                    )
                  },
                  e.id
                );
              }),
              N.map((e) => {
                const n = x === e.id, l = Pe(e);
                return /* @__PURE__ */ t(
                  ee,
                  {
                    title: e.label,
                    subtitle: O || B ? void 0 : `Periodicity: ${l}`,
                    isSelected: n,
                    className: n ? void 0 : "fds-ttc__duration-card--hideable",
                    onClick: () => {
                      M(e), b("duration");
                    },
                    trailingItems: n ? /* @__PURE__ */ t(S, { trailing: "Icon", icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon fds-ttc__duration-icon--active", children: "check_circle" }) }) : /* @__PURE__ */ o(Z, { children: [
                      /* @__PURE__ */ t(
                        S,
                        {
                          trailing: "Icon",
                          title: "Set as default",
                          icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon", children: "check_circle" }),
                          onClick: (m) => {
                            m.stopPropagation(), J(e.id);
                          }
                        }
                      ),
                      /* @__PURE__ */ t(
                        S,
                        {
                          trailing: "Icon",
                          title: "Delete",
                          icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon fds-ttc__duration-icon--danger", children: "delete_outline" }),
                          onClick: (m) => {
                            m.stopPropagation(), Me(e.id);
                          }
                        }
                      )
                    ] })
                  },
                  e.id
                );
              })
            ] })
          }
        ),
        !B && /* @__PURE__ */ t(
          V,
          {
            title: "Shift",
            isExpanded: xe,
            onToggle: () => Ae((e) => !e),
            trailingIcon: /* @__PURE__ */ o("div", { className: "fds-ttc__duration-header-actions", onClick: (e) => e.stopPropagation(), children: [
              /* @__PURE__ */ t("span", { className: "fds-ttc__duration-counter", children: T.length }),
              /* @__PURE__ */ t(
                "span",
                {
                  className: "fds-ttc__duration-add-btn material-icons",
                  role: "button",
                  tabIndex: 0,
                  title: "Add shift",
                  onClick: () => {
                    var n;
                    const e = (n = G.current) == null ? void 0 : n.getBoundingClientRect();
                    e && ye({ x: e.right + 30, y: e.top }), L(null), b("shift");
                  },
                  children: "add"
                }
              )
            ] }),
            children: /* @__PURE__ */ o("div", { className: "fds-ttc__cycle-body", children: [
              T.map((e) => /* @__PURE__ */ t(
                ee,
                {
                  title: e.name,
                  subtitle: `Time: ${e.startTime || "00:00"} - ${e.endTime || "00:00"}`,
                  className: "fds-ttc__duration-card--hideable",
                  leadingItem: /* @__PURE__ */ t(Ue, { leading: "Color", color: e.color }),
                  onClick: () => {
                    L(e), b("shift");
                  },
                  trailingItems: /* @__PURE__ */ t(
                    S,
                    {
                      trailing: "Icon",
                      title: "Delete",
                      icon: /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__duration-icon fds-ttc__duration-icon--danger", children: "delete_outline" }),
                      onClick: (n) => {
                        n.stopPropagation(), Be(e.id);
                      }
                    }
                  )
                },
                e.id
              )),
              T.length === 0 && /* @__PURE__ */ t("p", { className: "fds-ttc__shift-empty", children: "No shifts added. Click + to add one." }),
              /* @__PURE__ */ t("div", { className: "fds-ttc__required-select", children: /* @__PURE__ */ t(
                u,
                {
                  label: "Shift Aggregator",
                  name: "shiftAggregator",
                  placeholder: "Select aggregator",
                  value: Y,
                  isOpen: p === "shiftAggregator",
                  onOpenChange: (e) => a("shiftAggregator", e),
                  children: /* @__PURE__ */ t(g, { children: /* @__PURE__ */ t(_, { children: ["Sum", "Average", "Min", "Max", "First", "Last"].map((e) => /* @__PURE__ */ t(
                    y,
                    {
                      title: e,
                      selectionType: "Single",
                      isSelected: Y === e,
                      onClick: () => {
                        de(e), a("shiftAggregator", !1), s({ shiftAggregator: e });
                      }
                    },
                    e
                  )) }) })
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ o("label", { className: "fds-ttc__switch-row", children: [
          /* @__PURE__ */ t("span", { className: "fds-ttc__switch-label", children: "Comparison Mode" }),
          /* @__PURE__ */ t(
            v,
            {
              name: "comparisonMode",
              accessibilityLabel: "Comparison Mode",
              isChecked: ne,
              onChange: ({ isChecked: e }) => {
                le(e), s({ comparisonMode: e });
              }
            }
          )
        ] }),
        /* @__PURE__ */ o("label", { className: "fds-ttc__switch-row", children: [
          /* @__PURE__ */ o("span", { className: "fds-ttc__switch-label", children: [
            "Disable Time Selection",
            /* @__PURE__ */ t("span", { className: "material-icons fds-ttc__info-icon", title: "When enabled, users cannot change the time selection.", children: "info_outline" })
          ] }),
          /* @__PURE__ */ t(
            v,
            {
              name: "disableTimeSelection",
              accessibilityLabel: "Disable Time Selection",
              isChecked: oe,
              onChange: ({ isChecked: e }) => {
                ce(e), s({ disableTimeSelection: e });
              }
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { style: { padding: "16px" }, children: /* @__PURE__ */ t(
          We,
          {
            label: "Future Days Allowed",
            name: "futureDaysAllowed",
            placeholder: "Enter value",
            value: ae,
            helpText: "Limits how far in the future a date can be selected.",
            onChange: ({ value: e }) => {
              se(e), s({ futureDaysAllowed: e });
            }
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ t(
      De,
      {
        isOpen: me === "duration",
        size: "Small",
        hasBodyPadding: !1,
        positionX: h == null ? void 0 : h.x,
        positionY: h == null ? void 0 : h.y,
        children: /* @__PURE__ */ t(
          Ye,
          {
            preset: fe ?? void 0,
            onClose: () => {
              b(null), M(null);
            },
            onSave: Le
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      De,
      {
        isOpen: me === "shift",
        size: "Small",
        hasBodyPadding: !1,
        positionX: h == null ? void 0 : h.x,
        positionY: h == null ? void 0 : h.y,
        children: /* @__PURE__ */ t(
          Ge,
          {
            shift: he ?? void 0,
            onClose: () => {
              b(null), L(null);
            },
            onSave: He
          }
        )
      }
    )
  ] });
}
export {
  Si as TimeTabConfiguration
};
