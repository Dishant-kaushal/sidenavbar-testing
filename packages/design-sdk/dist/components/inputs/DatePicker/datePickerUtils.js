function A(s, t) {
  const e = t.getTime() - s.getTime();
  return {
    start: new Date(s.getTime() - e),
    end: new Date(s)
  };
}
function H(s, t) {
  return {
    start: new Date(s.getFullYear() - 1, s.getMonth(), s.getDate()),
    end: new Date(t.getFullYear() - 1, t.getMonth(), t.getDate())
  };
}
function J(s, t, e) {
  const n = e.getTime() - t.getTime();
  return { start: s, end: new Date(s.getTime() + n) };
}
function N(s, t, e, n, r, a, l, h) {
  const M = new Date(s, t, 1).getDay(), T = new Date(s, t + 1, 0).getDate(), C = new Date(s, t, 0).getDate(), S = M + T, x = Math.ceil(S / 7), m = /* @__PURE__ */ new Date(), b = `${m.getFullYear()}-${m.getMonth()}-${m.getDate()}`, F = [];
  let f = 1, L = 1;
  for (let y = 0; y < x; y++) {
    const w = [];
    for (let Y = 0; Y < 7; Y++) {
      const I = y * 7 + Y;
      if (I < M) {
        const p = C - M + I + 1;
        w.push({ date: p, type: "outOfMonth" });
      } else if (f > T)
        w.push({ date: L++, type: "outOfMonth" });
      else {
        const p = new Date(s, t, f), $ = `${s}-${t}-${f}` === b;
        let c = $ ? "currentDate" : "default", g = !1;
        if (e && n) {
          const u = e.getTime(), i = n.getTime(), o = p.getTime();
          u === i && o === u ? g = !0 : o === u ? c = "rangeStart" : o === i ? c = "rangeEnd" : o > u && o < i && (c = "rangeIn");
        } else if (e && !n) {
          const u = e.getTime(), i = p.getTime();
          if (a) {
            const o = a.getTime();
            if (u === o)
              i === u && (g = !0);
            else {
              const D = Math.min(u, o), d = Math.max(u, o);
              i === D ? c = "rangeStart" : i === d ? c = "rangeEnd" : i > D && i < d && (c = "rangeIn");
            }
          } else
            i === u && (g = !0);
        }
        if (l && h) {
          const u = new Date(
            l.getFullYear(),
            l.getMonth(),
            l.getDate()
          ).getTime(), i = new Date(
            h.getFullYear(),
            h.getMonth(),
            h.getDate()
          ).getTime(), o = new Date(s, t, f).getTime(), D = e ? new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() : null, d = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime() : null, v = o >= u && o <= i, O = D !== null && d !== null && o >= D && o <= d;
          v && O ? o === D ? (c = "intersectStart", g = !0) : o === d ? (c = "intersectEnd", g = !0) : c = "intersectIn" : v && (o === u && o === i ? (c = "comparedStart", g = !0) : o === u ? c = "comparedStart" : o === i ? c = "comparedEnd" : c = "comparedIn");
        }
        r && r.getFullYear() === s && r.getMonth() === t && r.getDate() === f && (g = !0), w.push({ date: f, type: c, isSelected: g, isCurrentDate: $ }), f++;
      }
    }
    F.push(w);
  }
  return F;
}
const _ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function B(s) {
  const t = [];
  for (let e = 0; e < 4; e++) {
    const n = [];
    for (let r = 0; r < 3; r++) {
      const a = e * 3 + r;
      n.push({ label: _[a], value: a, isSelected: a === s });
    }
    t.push(n);
  }
  return t;
}
function R(s, t) {
  const e = [];
  let n = s;
  for (let r = 0; r < 4; r++) {
    const a = [];
    for (let l = 0; l < 3; l++)
      a.push({ label: String(n), value: n, isSelected: n === t }), n++;
    e.push(a);
  }
  return e;
}
function W(s) {
  const t = /* @__PURE__ */ new Date(), e = new Date(t.getFullYear(), t.getMonth(), t.getDate()), n = new Date(e);
  switch (n.setDate(e.getDate() - 1), s) {
    case "today":
      return { start: e, end: e };
    case "yesterday":
      return { start: n, end: n };
    case "current_week": {
      const r = e.getDay(), a = new Date(e);
      return a.setDate(e.getDate() - (r + 6) % 7), { start: a, end: e };
    }
    case "previous_7_days": {
      const r = new Date(e);
      return r.setDate(e.getDate() - 7), { start: r, end: n };
    }
    case "current_month":
      return { start: new Date(e.getFullYear(), e.getMonth(), 1), end: e };
    case "previous_month": {
      const r = new Date(e.getFullYear(), e.getMonth() - 1, 1), a = new Date(e.getFullYear(), e.getMonth(), 0);
      return { start: r, end: a };
    }
    case "previous_3_month": {
      const r = new Date(e.getFullYear(), e.getMonth() - 3, 1), a = new Date(e.getFullYear(), e.getMonth(), 0);
      return { start: r, end: a };
    }
    case "previous_12_month": {
      const r = new Date(e.getFullYear(), e.getMonth() - 12, 1), a = new Date(e.getFullYear(), e.getMonth(), 0);
      return { start: r, end: a };
    }
    case "current_year":
      return { start: new Date(e.getFullYear(), 0, 1), end: e };
    case "previous_year": {
      const r = e.getFullYear() - 1;
      return { start: new Date(r, 0, 1), end: new Date(r, 11, 31) };
    }
    default:
      return null;
  }
}
function j(s) {
  const t = String(s.getDate()).padStart(2, "0"), e = String(s.getMonth() + 1).padStart(2, "0"), n = s.getFullYear();
  return `${t}/${e}/${n}`;
}
function q(s) {
  const t = s.replace(/\D/g, "").slice(0, 8);
  let e = t.slice(0, 2), n = t.slice(2, 4);
  const r = t.slice(4, 8);
  if (e.length === 2) {
    const l = parseInt(e, 10);
    l < 1 ? e = "01" : l > 31 && (e = "31");
  }
  if (n.length === 2) {
    const l = parseInt(n, 10);
    l < 1 ? n = "01" : l > 12 && (n = "12");
  }
  let a = e;
  return e.length === 2 && t.length > 2 && (a += "/"), n && (a += n), n.length === 2 && t.length > 4 && (a += "/"), r && (a += r), a;
}
function z(s) {
  const t = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!t) return null;
  const e = parseInt(t[1], 10), n = parseInt(t[2], 10), r = parseInt(t[3], 10);
  if (n < 1 || n > 12 || e < 1) return null;
  const a = new Date(r, n - 1, e);
  return a.getFullYear() !== r || a.getMonth() !== n - 1 || a.getDate() !== e ? null : a;
}
function G(s) {
  const t = s.replace(/\D/g, "").slice(0, 4);
  let e = t.slice(0, 2);
  const n = t.slice(2, 4);
  e.length === 2 && parseInt(e, 10) > 23 && (e = "23");
  let r = n;
  n.length === 2 && parseInt(n, 10) > 59 && (r = "59");
  let a = e;
  return e.length === 2 && t.length > 2 && (a += ":"), r && (a += r), a;
}
function K(s) {
  const t = s.match(/^(\d{1,2}):(\d{2})$/);
  if (!t) return null;
  const e = parseInt(t[1], 10), n = parseInt(t[2], 10);
  return e > 23 || n > 59 ? null : { hours: e, minutes: n };
}
function Q(s) {
  const t = String(s.getHours()).padStart(2, "0"), e = String(s.getMinutes()).padStart(2, "0");
  return `${t}:${e}`;
}
function U(s, t, e, n) {
  switch (s) {
    case "date":
      return `${_[e]} ${t}`;
    case "month":
      return String(t);
    case "year":
      return `${n} - ${n + 11}`;
  }
}
export {
  J as calcCustomComparison,
  H as calcPrecedingLastYear,
  A as calcPrecedingPeriod,
  j as formatDate,
  q as formatDateInput,
  Q as formatTime,
  G as formatTimeInput,
  N as generateCalendarDays,
  B as generateMonths,
  R as generateYears,
  U as getHeaderLabel,
  W as getPresetDateRange,
  z as parseDateDMY,
  K as parseTime
};
