import { jsx as v } from "react/jsx-runtime";
import { useRef as k, useState as p, useCallback as c, useMemo as S, useContext as h, createContext as w } from "react";
const d = w(null);
function C({ children: x }) {
  const e = k([]), [, g] = p(0), o = c(() => g((r) => r + 1), []), u = c(
    (r, t) => {
      const n = e.current.findIndex((s) => s.id === r);
      return n >= 0 ? e.current[n] = { id: r, onDismiss: t } : e.current = [...e.current, { id: r, onDismiss: t }], o(), e.current.findIndex((s) => s.id === r) + 1;
    },
    [o]
  ), i = c(
    (r) => {
      const t = e.current.length;
      e.current = e.current.filter((n) => n.id !== r), e.current.length !== t && o();
    },
    [o]
  ), a = c((r) => {
    const t = e.current.findIndex((n) => n.id === r);
    return t >= 0 ? t + 1 : 0;
  }, []), l = c(() => {
    [...e.current].reverse().forEach((r) => r.onDismiss());
  }, []), f = e.current.length, m = S(
    () => ({ register: u, unregister: i, getLevel: a, closeAll: l, totalLevels: f }),
    [u, i, a, l, f]
  );
  return /* @__PURE__ */ v(d.Provider, { value: m, children: x });
}
C.displayName = "DrawerStackProvider";
function I() {
  return h(d);
}
export {
  C as DrawerStackProvider,
  I as useDrawerStack
};
