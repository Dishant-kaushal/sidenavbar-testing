import { jsxs as L, jsx as t } from "react/jsx-runtime";
import { useState as k } from "react";
import { cn as Q } from "../../../utils/cn.js";
import { InputFieldHeader as V } from "../../forms/InputFieldHeader/InputFieldHeader.js";
import { InputFieldFooter as W } from "../../forms/InputFieldFooter/InputFieldFooter.js";
import { UploadCta as X } from "./UploadCta.js";
import { UploadItem as Y } from "./UploadItem.js";
import { FilePreviewModal as Z } from "./FilePreviewModal.js";
import { ensureFileId as B, triggerDownload as P, deriveFileTypeFromName as R, formatFileSize as ee } from "./fileHelpers.js";
/* empty css               */
function re({
  uploadType: q,
  mode: v,
  label: l,
  necessityIndicator: x = "none",
  helpText: C,
  errorText: F,
  validationState: y = "none",
  isRequired: T = !1,
  isDisabled: _ = !1,
  accept: w,
  maxSize: p,
  maxCount: s,
  files: o = [],
  onFilesSelect: c,
  onRemove: m,
  onDownload: f,
  onPreview: a,
  onReupload: d,
  disableBuiltInPreview: I = !1,
  disableBuiltInDownload: D = !1,
  className: H,
  ...O
}) {
  const u = q ?? v ?? "single", [S, $] = k(!1), h = T && S && o.length === 0, E = y === "error" || h, A = y === "error" ? F : h ? F ?? `${l ?? "This field"} is required` : void 0, N = E ? A : C, [U, b] = k(null), g = () => $(!0), G = u === "multiple" && typeof s == "number" && o.length >= s, z = !(u === "single" && o.length > 0) && !G, J = z && !!N, K = (e) => {
    if (!c) return;
    if (typeof p != "number" && typeof s != "number") {
      c(e);
      return;
    }
    const n = [], r = typeof s == "number" ? Math.max(0, s - o.length) : 1 / 0;
    for (let i = 0; i < e.length; i++) {
      const j = e[i];
      if (!(typeof p == "number" && j.size > p)) {
        if (n.length >= r) break;
        n.push(j);
      }
    }
    if (n.length === 0) return;
    const M = new DataTransfer();
    n.forEach((i) => M.items.add(i)), c(M.files);
  };
  return /* @__PURE__ */ L("div", { className: Q("fds-file-upload", H), ...O, children: [
    l && /* @__PURE__ */ t(
      V,
      {
        label: l,
        necessityIndicator: T ? "required" : x
      }
    ),
    z && /* @__PURE__ */ t(
      "div",
      {
        onFocus: g,
        onClick: g,
        onDragEnter: g,
        children: /* @__PURE__ */ t(
          X,
          {
            isDisabled: _,
            accept: w,
            multiple: u === "multiple",
            onFilesSelect: K
          }
        )
      }
    ),
    (J || h) && /* @__PURE__ */ t(
      W,
      {
        helpText: N,
        state: E ? "error" : "default"
      }
    ),
    o.length > 0 && /* @__PURE__ */ t("div", { className: "fds-file-upload__list", children: o.map((e, n) => {
      const r = B(e, n);
      return /* @__PURE__ */ t(
        Y,
        {
          fileName: e.name,
          fileSize: ee(e.size),
          fileType: e.fileIcon ?? R(e.name),
          uploadState: e.state,
          progress: e.progress,
          errorText: e.errorText,
          onRemove: () => m == null ? void 0 : m(r),
          onDownload: () => {
            f == null || f(r), D || P(e);
          },
          onPreview: () => {
            a == null || a(r), I || b(e);
          },
          onRetry: () => d == null ? void 0 : d(r)
        },
        r
      );
    }) }),
    !I && /* @__PURE__ */ t(
      Z,
      {
        file: U,
        isOpen: U !== null,
        onClose: () => b(null)
      }
    )
  ] });
}
re.displayName = "FileUpload";
export {
  re as FileUpload
};
