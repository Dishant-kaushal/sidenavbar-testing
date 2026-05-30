import { jsxs as U, jsx as n, Fragment as Ie } from "react/jsx-runtime";
import { forwardRef as be, useId as he, useState as $, useRef as Ne, useCallback as s } from "react";
import { Tag as _e } from "../../data-display/Tag/Tag.js";
import { InputFieldHeader as qe } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as De } from "../../forms/InputFieldFooter/InputFieldFooter.js";
import { cn as F } from "../../../utils/cn.js";
/* empty css             */
const $e = be(
  ({
    label: u,
    size: f = "Medium",
    maxLines: B = 2,
    placeholder: W,
    value: w,
    defaultValue: R,
    validationState: L = "none",
    helpText: X,
    errorText: O,
    onChange: x,
    onFocus: I,
    onBlur: b,
    isDisabled: Y = !1,
    isReadOnly: Z = !1,
    isRequired: h = !1,
    necessityIndicator: g,
    maxCharacters: d,
    isTagsMode: o = !1,
    tags: V,
    defaultTags: z,
    onTagsChange: a,
    className: T,
    id: M,
    name: C,
    disabled: ee,
    ...te
  }, re) => {
    const de = he(), N = M ?? de, j = `${N}-help`, l = C ?? "", c = Y || ee || !1, v = Z, A = W ?? (o ? "Enter Description" : "Enter value"), p = g ?? (h ? "required" : void 0), [ae, H] = $(!1), [oe, le] = $(R ?? ""), m = w !== void 0, K = m ? w : oe, [ie, P] = $(z ?? []), [i, E] = $(""), S = Ne(null), y = V !== void 0, t = y ? V : ie, ne = (p === "required" || h) && ae && (o ? t.length === 0 : !K), _ = L === "error" || ne, G = _ ? L === "error" ? O ?? "Error" : O ?? `${u} is required` : X ?? "", se = _ ? "error" : "default", ce = K.length, ue = d !== void 0 ? `${ce}/${d}` : "", J = !!G || !o && d !== void 0, Q = f === "Large" ? "BodyLargeRegular" : "BodyMediumRegular", fe = s((e) => {
      const r = e.target.value;
      d !== void 0 && r.length > d || (m || le(r), x == null || x({ name: l, value: r }));
    }, [m, l, x, d]), ve = s((e) => {
      H(!0), b == null || b({ name: l, value: e.target.value });
    }, [l, b]), pe = s((e) => {
      I == null || I({ name: l, value: e.target.value });
    }, [l, I]), q = s((e) => {
      const r = e.trim();
      if (!r || t.includes(r)) return;
      const D = [...t, r];
      y || P(D), a == null || a(D);
    }, [t, y, a]), k = s((e) => {
      const r = t.filter((D) => D !== e);
      y || P(r), a == null || a(r);
    }, [t, y, a]), me = s((e) => {
      e.key === "Enter" && (e.preventDefault(), q(i), E("")), e.key === "Backspace" && i === "" && t.length > 0 && k(t[t.length - 1]);
    }, [i, q, k, t]), ye = s(() => {
      H(!0), i.trim() && (q(i), E(""));
    }, [i, q]), xe = F(
      "fds-textarea",
      `fds-textarea--size-${f.toLowerCase()}`,
      B > 2 && `fds-textarea--lines-${B}`,
      c && "fds-textarea--disabled",
      v && "fds-textarea--readonly",
      _ && "fds-textarea--error",
      o && "fds-textarea--tags",
      T
    );
    return /* @__PURE__ */ U("div", { className: xe, children: [
      /* @__PURE__ */ n(
        qe,
        {
          label: p === "optional" ? `${u} (optional)` : u,
          necessityIndicator: p === "required" ? "required" : "none",
          size: f,
          htmlFor: N
        }
      ),
      /* @__PURE__ */ n("div", { className: "fds-textarea__field-wrapper", children: /* @__PURE__ */ n(
        "div",
        {
          className: "fds-textarea__field",
          onClick: o ? () => {
            var e;
            return (e = S.current) == null ? void 0 : e.focus();
          } : void 0,
          children: o ? (
            /* —— Tags mode: chips + inline input ——————————————————————— */
            /* @__PURE__ */ U(Ie, { children: [
              t.map((e) => /* @__PURE__ */ n(
                _e,
                {
                  id: e,
                  label: e,
                  size: f,
                  isDisabled: c,
                  onDismiss: () => k(e)
                },
                e
              )),
              /* @__PURE__ */ n(
                "input",
                {
                  ref: S,
                  className: F("fds-textarea__tag-input", Q),
                  id: N,
                  placeholder: t.length === 0 ? A : "",
                  value: i,
                  onChange: (e) => E(e.target.value),
                  onKeyDown: me,
                  onBlur: ye,
                  disabled: c,
                  readOnly: v,
                  "aria-label": u,
                  "aria-disabled": c || void 0,
                  "aria-readonly": v || void 0
                }
              )
            ] })
          ) : (
            /* —— Normal textarea mode —————————————————————————————————— */
            /* @__PURE__ */ n(
              "textarea",
              {
                ref: re,
                className: F("fds-textarea__input", Q),
                id: N,
                name: l || void 0,
                placeholder: A,
                value: m ? w : void 0,
                defaultValue: m ? void 0 : R,
                disabled: c,
                readOnly: v,
                required: p === "required" || h || void 0,
                maxLength: d,
                "aria-label": u,
                "aria-required": p === "required" || h || void 0,
                "aria-disabled": c || void 0,
                "aria-readonly": v || void 0,
                "aria-invalid": _ || void 0,
                "aria-describedby": J ? j : void 0,
                onChange: fe,
                onBlur: ve,
                onFocus: pe,
                ...te
              }
            )
          )
        }
      ) }),
      J && /* @__PURE__ */ n(
        De,
        {
          helpText: G || void 0,
          counterText: !o && d !== void 0 ? ue : void 0,
          state: se,
          size: f,
          id: j
        }
      )
    ] });
  }
);
$e.displayName = "TextArea";
export {
  $e as TextArea
};
