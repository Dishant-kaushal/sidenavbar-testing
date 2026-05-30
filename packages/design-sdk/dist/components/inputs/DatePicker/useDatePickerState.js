import { useState as T, useCallback as E, useRef as Et, useEffect as X, useMemo as yt } from "react";
import { formatDate as D, formatTime as j, generateCalendarDays as cs, generateMonths as Ds, generateYears as Ms, calcPrecedingPeriod as ft, calcPrecedingLastYear as ct, getPresetDateRange as ws, formatDateInput as Ss, parseDateDMY as g, parseTime as xt, getHeaderLabel as Ts } from "./datePickerUtils.js";
function Ys({
  mode: S,
  controlledOpen: Dt,
  onOpenChange: a,
  value: y,
  onChange: tt,
  rangeValue: t,
  onRangeChange: Q,
  controlledPreset: m,
  controlledPresetSelect: st,
  isDisabled: Es,
  showComparison: U = !1,
  comparisonRangeValue: f,
  onComparisonRangeChange: i
}) {
  const [At, _t] = T(!1), Z = Dt ?? At, P = E(
    (s) => {
      Dt === void 0 && _t(s), a == null || a(s);
    },
    [Dt, a]
  ), it = /* @__PURE__ */ new Date(), v = S === "single" ? y : t == null ? void 0 : t.start, [x, B] = T((v == null ? void 0 : v.getMonth()) ?? it.getMonth()), [K, A] = T((v == null ? void 0 : v.getFullYear()) ?? it.getFullYear()), [Y, $] = T("date"), Mt = Math.floor(K / 12) * 12, [qt, Ht] = T(t ?? null), Lt = t !== void 0 ? t : qt, [M, z] = T((t == null ? void 0 : t.start) ?? null), [H, N] = T((t == null ? void 0 : t.end) ?? null), [b, q] = T(t ? 2 : 0), [Yt, l] = T(null), [R, bt] = T(!1), [O, dt] = T(!!f), [_, Pt] = T("preceding"), [k, F] = T(
    (f == null ? void 0 : f.start) ?? null
  ), [G, I] = T(
    (f == null ? void 0 : f.end) ?? null
  ), [Bt, o] = T(
    f != null && f.start ? D(f.start) : ""
  ), [Kt, u] = T(
    f != null && f.end ? D(f.end) : ""
  ), [Nt, kt] = T(m ?? "custom"), wt = m ?? Nt, L = E(
    (s) => {
      kt(s), st == null || st(s);
    },
    [st]
  ), [C, r] = T(y ?? null), [Ot, n] = T(y ? D(y) : ""), [jt, W] = T(t != null && t.start ? D(t.start) : ""), [zt, J] = T(t != null && t.end ? D(t.end) : ""), [Gt, e] = T(t != null && t.start ? j(t.start) : "00:00"), [Jt, V] = T(t != null && t.end ? j(t.end) : "00:00"), Ft = Et(null), Qt = Et(!1), St = Et(wt);
  X(() => {
    S === "single" && (r(y ?? null), n(y ? D(y) : ""), y && (B(y.getMonth()), A(y.getFullYear())));
  }, [y, S]), X(() => {
    S === "range" && (z((t == null ? void 0 : t.start) ?? null), N((t == null ? void 0 : t.end) ?? null), W(t != null && t.start ? D(t.start) : ""), J(t != null && t.end ? D(t.end) : ""), e(t != null && t.start ? j(t.start) : "00:00"), V(t != null && t.end ? j(t.end) : "00:00"), q(t ? 2 : 0), t != null && t.start && (B(t.start.getMonth()), A(t.start.getFullYear())));
  }, [t, S]), X(() => {
    m !== void 0 && kt(m);
  }, [m]), X(() => {
    F((f == null ? void 0 : f.start) ?? null), I((f == null ? void 0 : f.end) ?? null), o(
      f != null && f.start ? D(f.start) : ""
    ), u(
      f != null && f.end ? D(f.end) : ""
    ), dt(!!f);
  }, [f]), X(() => {
    o(k ? D(k) : "");
  }, [k]), X(() => {
    u(G ? D(G) : "");
  }, [G]), X(() => {
    if (Z) {
      St.current = wt;
      const s = S === "single" ? y : t == null ? void 0 : t.start;
      s && (B(s.getMonth()), A(s.getFullYear())), $("date");
    }
  }, [Z]), X(() => {
    R && requestAnimationFrame(() => {
      var c;
      const s = (c = Ft.current) == null ? void 0 : c.querySelector(".fds-datepicker__preset-dropdown"), d = s == null ? void 0 : s.querySelector('[role="menuitem"]:not([aria-disabled="true"])');
      d == null || d.focus();
    });
  }, [R]);
  const Ut = E(() => {
    Z && (S === "single" ? (r(y ?? null), n(y ? D(y) : "")) : (z((t == null ? void 0 : t.start) ?? null), N((t == null ? void 0 : t.end) ?? null), W(t != null && t.start ? D(t.start) : ""), J(t != null && t.end ? D(t.end) : ""), e(t != null && t.start ? j(t.start) : "00:00"), V(t != null && t.end ? j(t.end) : "00:00"), q(t ? 2 : 0), F((f == null ? void 0 : f.start) ?? null), I((f == null ? void 0 : f.end) ?? null), o(
      f != null && f.start ? D(f.start) : ""
    ), u(
      f != null && f.end ? D(f.end) : ""
    ), dt(!!f)), L(St.current), l(null), $("date"), P(!1)), R && bt(!1);
  }, [Z, R, S, y, t, f, P, L]), Tt = S === "range" && U && O, Wt = yt(
    () => cs(
      K,
      x,
      S === "range" ? M : null,
      S === "range" ? H : null,
      S === "single" ? C : null,
      S === "range" ? Yt : null,
      Tt ? k : null,
      Tt ? G : null
    ),
    [
      K,
      x,
      M,
      H,
      C,
      Yt,
      S,
      Tt,
      k,
      G
    ]
  ), Xt = yt(() => Ds(x), [x]), Zt = yt(() => Ms(Mt, K), [Mt, K]), $t = Ts(Y, K, x, Mt), ht = E(() => {
    Y === "date" ? x === 0 ? (B(11), A((s) => s - 1)) : B((s) => s - 1) : A(Y === "month" ? (s) => s - 1 : (s) => s - 12);
  }, [Y, x]), vt = E(() => {
    Y === "date" ? x === 11 ? (B(0), A((s) => s + 1)) : B((s) => s + 1) : A(Y === "month" ? (s) => s + 1 : (s) => s + 12);
  }, [Y, x]), Ct = E(() => {
    Y === "date" ? $("month") : Y === "month" && $("year");
  }, [Y]), rt = E((s) => {
    Y === "year" ? (A(s.value), $("month")) : Y === "month" && (B(s.value), $("date"));
  }, [Y]), pt = E((s) => {
    if (s.type === "outOfMonth") return;
    const d = new Date(K, x, s.date);
    if (S === "single") {
      r(d), n(D(d));
      return;
    }
    const c = U && O;
    if (c && _ === "custom" && b === 2 && M && H && k == null) {
      F(d), I(null), q(3);
      return;
    }
    if (c && _ === "custom" && b === 3 && k) {
      let p = k, It = d;
      d < p && (p = d, It = k, F(p)), I(It), q(2);
      return;
    }
    if (b === 0 || b === 2) {
      z(d), N(null), W(D(d)), J(""), q(1), L("custom"), F(null), I(null);
      return;
    }
    let w = M, h = d;
    if (d < M ? (w = d, h = M, z(w), N(h), W(D(w)), J(D(h))) : (N(h), J(D(h))), q(2), l(null), c && _ !== "custom") {
      const p = _ === "preceding" ? ft(w, h) : ct(w, h);
      F(p.start), I(p.end);
    }
  }, [
    K,
    x,
    S,
    b,
    M,
    H,
    k,
    U,
    O,
    _,
    L
  ]), mt = E((s) => {
    L(s);
    const d = ws(s);
    if (d) {
      z(d.start), N(d.end), W(D(d.start)), J(D(d.end)), e(j(d.start)), V(j(d.end)), q(2), B(d.start.getMonth()), A(d.start.getFullYear());
      const c = { start: d.start, end: d.end };
      if (Q == null || Q(c), Ht(c), U && O)
        if (_ === "preceding" || _ === "preceding_last_year") {
          const w = _ === "preceding" ? ft(d.start, d.end) : ct(d.start, d.end);
          F(w.start), I(w.end), i == null || i(w);
        } else
          F(null), I(null), i == null || i(null);
      else U && (i == null || i(null));
      P(!1);
    }
  }, [
    L,
    Q,
    P,
    U,
    O,
    _,
    i
  ]), lt = E((s) => {
    if (dt(s), !s) {
      F(null), I(null), b === 3 && q(2);
      return;
    }
    if (M && H && b === 2 && _ !== "custom") {
      const d = _ === "preceding" ? ft(M, H) : ct(M, H);
      F(d.start), I(d.end);
    }
  }, [M, H, b, _]), Rt = E((s) => {
    if (Pt(s), b === 3 && q(2), !!O) {
      if (s === "custom") {
        F(null), I(null);
        return;
      }
      if (M && H && b === 2) {
        const d = s === "preceding" ? ft(M, H) : ct(M, H);
        F(d.start), I(d.end);
      }
    }
  }, [O, M, H, b]), ot = E(() => {
    if (S === "single") tt == null || tt(C);
    else if (M && H) {
      const s = { start: M, end: H };
      Q == null || Q(s), Ht(s), U && (O && k && G ? i == null || i({
        start: k,
        end: G
      }) : i == null || i(null));
    }
    P(!1);
  }, [
    S,
    C,
    M,
    H,
    tt,
    Q,
    P,
    U,
    O,
    k,
    G,
    i
  ]), ut = E(() => {
    S === "single" ? (r(y ?? null), n(y ? D(y) : "")) : (z((t == null ? void 0 : t.start) ?? null), N((t == null ? void 0 : t.end) ?? null), W(t != null && t.start ? D(t.start) : ""), J(t != null && t.end ? D(t.end) : ""), e(t != null && t.start ? j(t.start) : "00:00"), V(t != null && t.end ? j(t.end) : "00:00"), q(t ? 2 : 0), F((f == null ? void 0 : f.start) ?? null), I((f == null ? void 0 : f.end) ?? null), o(
      f != null && f.start ? D(f.start) : ""
    ), u(
      f != null && f.end ? D(f.end) : ""
    ), dt(!!f)), L(St.current), l(null), $("date"), P(!1);
  }, [S, y, t, f, P, L]), nt = E((s) => {
    S !== "range" || b !== 1 || s.type === "outOfMonth" || l(new Date(K, x, s.date));
  }, [S, b, K, x]), et = E(() => {
    l(null);
  }, []), Vt = E((s) => {
    const d = Ss(s);
    if (n(d), d === "") {
      r(null);
      return;
    }
    const c = g(d);
    c && (r(c), B(c.getMonth()), A(c.getFullYear()), Z || P(!0));
  }, [Z, P]), gt = E((s) => {
    W(s);
    const d = g(s);
    d && (z((c) => {
      const w = new Date(d);
      return c && w.setHours(c.getHours(), c.getMinutes()), w;
    }), B(d.getMonth()), A(d.getFullYear()), q(1), L("custom"));
  }, [L]), at = E((s) => {
    J(s);
    const d = g(s);
    if (d) {
      if (M && d < M) {
        const c = new Date(d), w = new Date(M);
        c.setHours(M.getHours(), M.getMinutes()), z(c), N(w), W(D(c)), J(D(w));
      } else
        N((c) => {
          const w = new Date(d);
          return c && w.setHours(c.getHours(), c.getMinutes()), w;
        });
      q(2), L("custom");
    }
  }, [M, L]), ts = E((s) => {
    e(s);
    const d = xt(s);
    d && z((c) => {
      if (!c) return c;
      const w = new Date(c);
      return w.setHours(d.hours, d.minutes), w;
    });
  }, []), ss = E((s) => {
    V(s);
    const d = xt(s);
    d && N((c) => {
      if (!c) return c;
      const w = new Date(c);
      return w.setHours(d.hours, d.minutes), w;
    });
  }, []), ds = E((s) => {
    o(s);
    const d = g(s);
    d && F(d);
  }, []), fs = E((s) => {
    u(s);
    const d = g(s);
    d && I(d);
  }, []);
  return {
    // State
    open: Z,
    setOpen: P,
    presetOpen: R,
    setPresetOpen: bt,
    preset: wt,
    view: Y,
    // Refs
    containerRef: Ft,
    closedByKeyboard: Qt,
    // Calendar data
    days: Wt,
    monthItems: Xt,
    yearItems: Zt,
    headerLabel: $t,
    // Draft values
    draftSingle: C,
    singleInputText: Ot,
    startRawText: jt,
    endRawText: zt,
    startTimeRaw: Gt,
    endTimeRaw: Jt,
    resolvedRange: Lt,
    // Comparison state
    comparisonEnabled: O,
    comparisonMode: _,
    draftComparisonStart: k,
    draftComparisonEnd: G,
    comparisonStartRawText: Bt,
    comparisonEndRawText: Kt,
    // Derived
    isApplyDisabled: S === "single" ? C === null : !(M && H && b === 2),
    // Handlers
    closeAndRevert: Ut,
    handlePrev: ht,
    handleNext: vt,
    handleHeaderClick: Ct,
    handleItemClick: rt,
    handleDayClick: pt,
    handleDayHover: nt,
    handleDayHoverEnd: et,
    handlePresetSelect: mt,
    handleApply: ot,
    handleCancel: ut,
    handleSingleInputChange: Vt,
    handleStartDateChange: gt,
    handleEndDateChange: at,
    handleStartTimeChange: ts,
    handleEndTimeChange: ss,
    handleComparisonToggle: lt,
    handleComparisonModeChange: Rt,
    handleComparisonStartDateChange: ds,
    handleComparisonEndDateChange: fs
  };
}
export {
  Ys as useDatePickerState
};
