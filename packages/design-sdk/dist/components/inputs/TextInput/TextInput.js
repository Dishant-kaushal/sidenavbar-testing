import { jsxs as N, jsx as e } from "react/jsx-runtime";
import { forwardRef as be, useId as we, useState as X, useCallback as h } from "react";
import { X as Ie } from "react-feather";
import { IconButton as Ee } from "../../actions/IconButton/IconButton.js";
import { Spinner as Te } from "../../feedback/Spinner/Spinner.js";
import { InputFieldHeader as Pe } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as qe } from "../../forms/InputFieldFooter/InputFieldFooter.js";
import { cn as b } from "../../../utils/cn.js";
/* empty css              */
const Me = {
  name: "name",
  email: "email",
  countryName: "country-name",
  postalCode: "postal-code",
  telephone: "tel",
  username: "username",
  none: "off",
  currentPassword: "current-password",
  newPassword: "new-password",
  oneTimeCode: "one-time-code"
}, Oe = {
  text: "text",
  search: "search",
  telephone: "tel",
  email: "email",
  url: "url",
  number: "number",
  password: "password"
}, Fe = be(
  ({
    label: c,
    size: w = "Medium",
    labelPosition: Y = "top",
    necessityIndicator: G,
    name: J,
    type: K = "text",
    placeholder: Q,
    value: I,
    defaultValue: V,
    validationState: E = "none",
    helpText: W,
    errorText: A,
    successText: Z,
    onChange: s,
    onFocus: u,
    onBlur: p,
    isDisabled: B = !1,
    isReadOnly: k = !1,
    isRequired: m = !1,
    icon: T,
    leadingSlot: f,
    showClearButton: H = !1,
    onClearButtonClicked: v,
    prefix: P,
    suffix: q,
    trailingIcon: L,
    isLoading: i = !1,
    maxCharacters: r,
    autoFocus: C = !1,
    autoCompleteSuggestionType: g,
    keyboardReturnKeyType: j,
    className: ee,
    id: te,
    disabled: se,
    readOnly: re,
    ...de
  }, ie) => {
    const oe = we(), M = te ?? oe, D = `${M}-help`, t = J ?? "", x = B || se || !1, _ = k, ae = Q ?? "Enter value", o = G ?? (m ? "required" : void 0), [le, ne] = X(!1), [ce, R] = X(V ?? ""), d = I !== void 0, O = d ? I : ce, a = E === "error" || (o === "required" || m) && le && !O, F = E === "success" && !a, S = a ? E === "error" ? A ?? "Error" : A ?? `${c} is required` : F ? Z ?? "" : W ?? "", ue = a ? "error" : F ? "success" : "default", U = !i && (!!S || r !== void 0), pe = O.length, me = r !== void 0 ? `${pe}/${r}` : "", fe = h((n) => {
      const z = n.target.value;
      r !== void 0 && z.length > r || (d || R(z), s == null || s({ name: t, value: z }));
    }, [d, t, s, r]), ve = h((n) => {
      ne(!0), p == null || p({ name: t, value: n.target.value });
    }, [t, p]), xe = h((n) => {
      u == null || u({ name: t, value: n.target.value });
    }, [t, u]), _e = h(() => {
      d || R(""), v == null || v(), s == null || s({ name: t, value: "" });
    }, [d, t, v, s]), y = w === "Large", $ = y ? "BodyLargeRegular" : "BodyMediumRegular", ye = y ? 20 : 16, Ne = y ? "20" : "16", l = f != null && f !== !1;
    process.env.NODE_ENV !== "production" && l && (T || P) && console.warn(
      "[TextInput] `leadingSlot` is set — `icon` and `prefix` are ignored."
    );
    const he = b(
      "fds-text-input",
      y && "fds-text-input--size-large",
      Y === "left" && "fds-text-input--label-left",
      x && "fds-text-input--disabled",
      _ && "fds-text-input--readonly",
      i && "fds-text-input--loading",
      a && "fds-text-input--error",
      F && "fds-text-input--success",
      l && "fds-text-input--with-leading-slot",
      ee
    );
    return /* @__PURE__ */ N("div", { className: he, children: [
      /* @__PURE__ */ e(
        Pe,
        {
          label: o === "optional" ? `${c} (optional)` : c,
          necessityIndicator: o === "required" ? "required" : "none",
          size: w,
          htmlFor: M
        }
      ),
      /* @__PURE__ */ e("div", { className: "fds-text-input__field-wrapper", children: /* @__PURE__ */ N("div", { className: "fds-text-input__field", children: [
        l && /* @__PURE__ */ e("div", { className: "fds-text-input__leading-slot", children: f }),
        /* @__PURE__ */ N("div", { className: "fds-text-input__leading", children: [
          !l && T && /* @__PURE__ */ e("span", { className: "fds-text-input__icon", children: T }),
          !l && P && /* @__PURE__ */ e("span", { className: b("fds-text-input__prefix", $), children: P }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: ie,
              className: b("fds-text-input__input", $),
              type: Oe[K],
              id: M,
              name: t || void 0,
              placeholder: ae,
              value: d ? I : void 0,
              defaultValue: d ? void 0 : V,
              disabled: x,
              readOnly: _ || re,
              required: o === "required" || m || void 0,
              autoFocus: C || void 0,
              autoComplete: g ? Me[g] : void 0,
              enterKeyHint: j !== "default" ? j : void 0,
              maxLength: r,
              "aria-label": c,
              "aria-required": o === "required" || m || void 0,
              "aria-disabled": x || void 0,
              "aria-readonly": _ || void 0,
              "aria-invalid": a || void 0,
              "aria-describedby": U ? D : void 0,
              "aria-busy": i || void 0,
              onChange: fe,
              onBlur: ve,
              onFocus: xe,
              ...de
            }
          )
        ] }),
        (q || H || i || L) && /* @__PURE__ */ N("span", { className: "fds-text-input__trailing", children: [
          q && /* @__PURE__ */ e("span", { className: b("fds-text-input__suffix", $), children: q }),
          H && O && !x && !_ && !i && /* @__PURE__ */ e(
            Ee,
            {
              icon: /* @__PURE__ */ e(Ie, { size: ye }),
              size: Ne,
              onClick: _e,
              "aria-label": "Clear",
              className: "fds-text-input__clear"
            }
          ),
          i && /* @__PURE__ */ e(Te, { color: "Brand", size: "Medium", accessibilityLabel: "Loading" }),
          L
        ] })
      ] }) }),
      U && /* @__PURE__ */ e(
        qe,
        {
          helpText: S || void 0,
          counterText: r !== void 0 ? me : void 0,
          state: ue,
          size: w,
          id: D
        }
      )
    ] });
  }
);
Fe.displayName = "TextInput";
export {
  Fe as TextInput
};
