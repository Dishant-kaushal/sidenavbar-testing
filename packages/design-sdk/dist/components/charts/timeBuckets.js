function g(t) {
  const e = new Date(t);
  return e.setMinutes(0, 0, 0), e;
}
function f(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function h(t) {
  const e = f(t);
  return e.setDate(e.getDate() - e.getDay()), e;
}
function m(t) {
  const e = new Date(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function M(t) {
  const e = new Date(t);
  return e.setMonth(0, 1), e.setHours(0, 0, 0, 0), e;
}
function c(t, e, r) {
  const n = new Date(t);
  return e === "Hourly" ? n.setHours(n.getHours() + r) : e === "Daily" ? n.setDate(n.getDate() + r) : e === "Weekly" ? n.setDate(n.getDate() + r * 7) : e === "Monthly" ? n.setMonth(n.getMonth() + r) : n.setFullYear(n.getFullYear() + r), n;
}
function l(t, e) {
  return e === "Hourly" ? g(t) : e === "Daily" ? f(t) : e === "Weekly" ? h(t) : e === "Monthly" ? m(t) : M(t);
}
function i(t, e) {
  if (e === "Hourly") return `${String(t.getHours()).padStart(2, "0")}:00`;
  if (e === "Daily") return t.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if (e === "Weekly") {
    const r = c(t, "Weekly", 1);
    return `${t.toLocaleDateString("en-US", { month: "short", day: "numeric" })}–${r.toLocaleDateString("en-US", { day: "numeric" })}`;
  }
  return e === "Monthly" ? t.toLocaleDateString("en-US", { month: "short", year: "numeric" }) : String(t.getFullYear());
}
function S(t, e, r = {}) {
  const { clipping: n = !0 } = r;
  if (t.end.getTime() <= t.start.getTime()) return [];
  const a = l(t.start, e), s = [];
  let o = n ? new Date(t.start) : a;
  for (; o.getTime() < t.end.getTime(); ) {
    const u = c(l(o, e), e, 1), D = n ? new Date(Math.min(u.getTime(), t.end.getTime())) : u;
    if (s.push({
      start: new Date(o),
      end: D,
      label: i(l(o, e), e)
    }), o = u, s.length > 1e4) break;
  }
  return s;
}
function k(t) {
  if (t.end.getTime() - t.start.getTime() <= 0) return [];
  const r = [];
  let n = new Date(t.start);
  for (; n.getTime() < t.end.getTime(); ) {
    const a = t.end.getTime() - n.getTime();
    let s;
    a >= 864e5 * 28 ? s = "Monthly" : a >= 864e5 * 7 ? s = "Weekly" : a >= 864e5 ? s = "Daily" : s = "Hourly";
    const o = c(l(n, s), s, 1), u = new Date(Math.min(o.getTime(), t.end.getTime()));
    if (r.push({
      start: new Date(n),
      end: u,
      label: i(l(n, s), s)
    }), n = u, r.length > 1e4) break;
  }
  return r;
}
export {
  S as bucketRange,
  k as bucketRangeInexact
};
