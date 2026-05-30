import { jsxs as T, jsx as l } from "react/jsx-runtime";
import { forwardRef as re, useState as d, useRef as w, useEffect as B, useCallback as s } from "react";
import { createPortal as se } from "react-dom";
import { cn as $ } from "../../../utils/cn.js";
import { useDropdownPortal as ce } from "../../../hooks/useDropdownPortal.js";
import { InputFieldHeader as le } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as ae } from "../../forms/InputFieldFooter/InputFieldFooter.js";
import { ColorPicker as ie } from "./ColorPicker.js";
import { hexToRgb as q, rgbToHsb as pe, normalizeColorInput as fe, hsbToRgb as K, rgbToHex as u } from "./colorUtils.js";
/* empty css               */
const de = re(
  ({
    label: F,
    value: r = "",
    onChange: i,
    placeholder: M = "Enter color hex code",
    helpText: j,
    errorText: z,
    validationState: A = "none",
    isDisabled: c = !1,
    swatches: U,
    className: v,
    ...D
  }, L) => {
    const [t, p] = d(!1), m = w(null), { portalRef: N, pos: g } = ce(m, t, () => p(!1), 8), V = q(r || "#000000"), [h, b, y] = V ?? [0, 0, 0], [x, C, _] = pe(h, b, y), [S, G] = d(100), [J, Q] = d("Hex"), [H, f] = d(r);
    B(() => {
      f(r);
    }, [r]);
    const k = A === "error", E = k ? z : j, W = !!r, R = w(!1), I = w(t);
    B(() => {
      !I.current && t && requestAnimationFrame(() => {
        var o;
        const e = (o = N.current) == null ? void 0 : o.querySelector("button:not([disabled]), input:not([disabled])");
        e == null || e.focus();
      }), I.current && !t && R.current && (R.current = !1, requestAnimationFrame(() => {
        var o;
        const e = (o = m.current) == null ? void 0 : o.querySelector(".fds-color-input__text-input");
        e == null || e.focus();
      })), I.current = t;
    }, [t]);
    const X = s((e) => {
      c || e.target.closest(".fds-color-input__text-input") !== null || e.key === "Escape" && t && (e.preventDefault(), e.stopPropagation(), R.current = !0, p(!1));
    }, [c, t]), n = s((e) => {
      i == null || i(e);
    }, [i]), P = s(() => {
      const e = fe(H);
      e ? n(`#${e.toUpperCase()}`) : f(r);
    }, [H, r, n]), Y = s((e) => {
      n(e.toUpperCase());
    }, [n]), Z = s((e) => {
      const [o, a, O] = K(e, C, _);
      n(u(o, a, O));
    }, [C, _, n]), ee = s((e, o) => {
      const [a, O, ne] = K(x, e, o);
      n(u(a, O, ne));
    }, [x, n]), oe = s((e, o, a) => {
      n(u(e, o, a));
    }, [n]), te = s((e) => {
      const o = q(e);
      o && n(u(...o));
    }, [n]);
    return /* @__PURE__ */ T("div", { ref: m, className: $("fds-color-input", v), onKeyDown: X, ...D, children: [
      F && /* @__PURE__ */ l(le, { label: F }),
      /* @__PURE__ */ T(
        "div",
        {
          className: $(
            "fds-color-input__field",
            t && "fds-color-input__field--open",
            k && "fds-color-input__field--error",
            c && "fds-color-input__field--disabled"
          ),
          children: [
            /* @__PURE__ */ l(
              "input",
              {
                ref: L,
                className: "fds-color-input__text-input BodyMediumRegular",
                type: "text",
                value: H,
                placeholder: M,
                disabled: c,
                onClick: () => {
                  c || p(!t);
                },
                onChange: (e) => f(e.target.value),
                onBlur: P,
                onKeyDown: (e) => {
                  e.key === "Enter" && (e.preventDefault(), P()), e.key === "Escape" && (e.preventDefault(), f(r));
                }
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: "fds-color-input__swatch",
                onClick: () => {
                  c || p(!t);
                },
                tabIndex: -1,
                disabled: c,
                "aria-label": "Open color picker",
                children: W && /* @__PURE__ */ l(
                  "span",
                  {
                    className: "fds-color-input__swatch-fill",
                    style: { background: `rgba(${h},${b},${y},${S / 100})` }
                  }
                )
              }
            )
          ]
        }
      ),
      E && /* @__PURE__ */ l(
        ae,
        {
          helpText: E,
          state: k ? "error" : "default"
        }
      ),
      t && g && typeof document < "u" && se(
        /* @__PURE__ */ l(
          "div",
          {
            ref: N,
            className: "fds-color-input__popover",
            style: { top: g.top, left: g.left },
            children: /* @__PURE__ */ l(
              ie,
              {
                hue: x,
                saturation: C,
                brightness: _,
                opacity: S,
                r: h,
                g: b,
                b: y,
                hex: r || "#000000",
                configMode: J,
                onHueChange: Z,
                onSaturationBrightnessChange: ee,
                onOpacityChange: G,
                onRgbChange: oe,
                onHexChange: te,
                onConfigModeChange: Q,
                onColorSelect: Y,
                swatches: U,
                selectedColor: r
              }
            )
          }
        ),
        document.body
      )
    ] });
  }
);
de.displayName = "ColorInput";
export {
  de as ColorInput
};
