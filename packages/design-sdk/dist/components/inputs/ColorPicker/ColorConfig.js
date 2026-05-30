import { jsxs as p, jsx as l, Fragment as G } from "react/jsx-runtime";
import { useState as a, useEffect as n, useCallback as N } from "react";
import { cn as M } from "../../../utils/cn.js";
import { normalizeColorInput as j } from "./colorUtils.js";
/* empty css                */
function z({
  mode: k = "Hex",
  hex: o = "#000000",
  r: g = 0,
  g: d = 0,
  b: y = 0,
  opacity: _ = 100,
  onModeChange: v,
  onHexChange: r,
  onRgbChange: c,
  onOpacityChange: i,
  className: K,
  ...I
}) {
  const [x, s] = a(o), [B, E] = a(String(g)), [S, R] = a(String(d)), [L, h] = a(String(y)), [m, u] = a(String(_));
  n(() => {
    s(o);
  }, [o]), n(() => {
    E(String(g));
  }, [g]), n(() => {
    R(String(d));
  }, [d]), n(() => {
    h(String(y));
  }, [y]), n(() => {
    u(String(_));
  }, [_]);
  const w = N(() => {
    const t = j(x);
    if (t) {
      const D = `#${t}`;
      s(D), r == null || r(D);
    } else
      s(o);
  }, [x, o, r]), e = N(() => {
    c == null || c(
      Math.max(0, Math.min(255, parseInt(B) || 0)),
      Math.max(0, Math.min(255, parseInt(S) || 0)),
      Math.max(0, Math.min(255, parseInt(L) || 0))
    );
  }, [B, S, L, c]), f = N(() => {
    const t = Math.max(0, Math.min(100, parseInt(m) || 0));
    i == null || i(t), u(String(t));
  }, [m, i]);
  return /* @__PURE__ */ p("div", { className: M("fds-color-config", K), ...I, children: [
    /* @__PURE__ */ p(
      "select",
      {
        className: "fds-color-config__mode-select BodySmallRegular",
        value: k,
        onChange: (t) => v == null ? void 0 : v(t.target.value),
        children: [
          /* @__PURE__ */ l("option", { value: "Hex", children: "Hex" }),
          /* @__PURE__ */ l("option", { value: "RGB", children: "RGB" })
        ]
      }
    ),
    k === "Hex" ? /* @__PURE__ */ p(G, { children: [
      /* @__PURE__ */ l(
        "input",
        {
          className: "fds-color-config__input fds-color-config__hex BodySmallRegular",
          type: "text",
          value: x,
          maxLength: 7,
          onChange: (t) => s(t.target.value),
          onBlur: w,
          onKeyDown: (t) => {
            t.key === "Enter" && w();
          },
          spellCheck: !1
        }
      ),
      /* @__PURE__ */ l(
        "input",
        {
          className: "fds-color-config__input fds-color-config__opacity BodySmallRegular",
          type: "text",
          value: m,
          maxLength: 3,
          onChange: (t) => u(t.target.value),
          onBlur: f,
          onKeyDown: (t) => {
            t.key === "Enter" && f();
          }
        }
      )
    ] }) : /* @__PURE__ */ p("div", { className: "fds-color-config__rgb", children: [
      /* @__PURE__ */ l(
        "input",
        {
          className: "fds-color-config__input BodySmallRegular",
          type: "text",
          value: B,
          maxLength: 3,
          onChange: (t) => E(t.target.value),
          onBlur: e,
          onKeyDown: (t) => {
            t.key === "Enter" && e();
          }
        }
      ),
      /* @__PURE__ */ l(
        "input",
        {
          className: "fds-color-config__input BodySmallRegular",
          type: "text",
          value: S,
          maxLength: 3,
          onChange: (t) => R(t.target.value),
          onBlur: e,
          onKeyDown: (t) => {
            t.key === "Enter" && e();
          }
        }
      ),
      /* @__PURE__ */ l(
        "input",
        {
          className: "fds-color-config__input BodySmallRegular",
          type: "text",
          value: L,
          maxLength: 3,
          onChange: (t) => h(t.target.value),
          onBlur: e,
          onKeyDown: (t) => {
            t.key === "Enter" && e();
          }
        }
      ),
      /* @__PURE__ */ l(
        "input",
        {
          className: "fds-color-config__input BodySmallRegular",
          type: "text",
          value: m,
          maxLength: 3,
          onChange: (t) => u(t.target.value),
          onBlur: f,
          onKeyDown: (t) => {
            t.key === "Enter" && f();
          }
        }
      )
    ] })
  ] });
}
z.displayName = "ColorConfig";
export {
  z as ColorConfig
};
