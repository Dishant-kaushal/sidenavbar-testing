import { useRef as a, useState as v, useCallback as E, useLayoutEffect as m, useEffect as L } from "react";
import { useDismissOnScrollOutside as C } from "./useDismissOnScrollOutside.js";
const h = 8;
function B(u, i, w, c = 4) {
  const r = a(null), [n, l] = v(null), s = a(null), f = a(w);
  f.current = w;
  const p = E(() => f.current(), []);
  return m(() => {
    if (!i || !u.current) {
      l(null);
      return;
    }
    const t = u.current.getBoundingClientRect();
    s.current = t, l({ top: t.bottom + c, left: t.left, width: t.width, placement: "below" });
  }, [i, u, c]), m(() => {
    if (!n || n.placement !== "below" || !r.current || !s.current) return;
    const t = r.current.getBoundingClientRect();
    if (t.bottom > window.innerHeight - h) {
      const e = s.current, o = e.top - c, d = window.innerHeight - e.bottom - c;
      o > d && l({ top: e.top - t.height - c, left: e.left, width: e.width, placement: "above" });
    }
  }, [n, c]), m(() => {
    if (!n || !r.current || !s.current) return;
    const t = r.current.getBoundingClientRect();
    if (t.right > window.innerWidth - h) {
      const e = s.current, o = Math.max(h, e.right - t.width);
      n.left !== o && l({ ...n, left: o });
    }
  }, [n]), C(r, p, i), L(() => {
    if (!i) return;
    const t = (e) => {
      var d, b;
      const o = e.target;
      (d = u.current) != null && d.contains(o) || (b = r.current) != null && b.contains(o) || f.current();
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, [i, u]), { portalRef: r, pos: n };
}
export {
  B as useDropdownPortal
};
