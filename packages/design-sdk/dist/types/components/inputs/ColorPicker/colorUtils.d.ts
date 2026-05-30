export declare function hsbToRgb(h: number, s: number, b: number): [number, number, number];
export declare function rgbToHsb(r: number, g: number, b: number): [number, number, number];
export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function hexToRgb(hex: string): [number, number, number] | null;
/**
 * Normalize a free-form color string into a 6-char lowercase hex (no `#`).
 * Accepts:
 *  - Named colors: `red`, `white`, `black`, `blue`, `cyan`, `pink`, `green`,
 *    `yellow`, `orange`, `purple`, `magenta` / `fuchsia`, `gray` / `grey`,
 *    `brown`.
 *  - Single hex digit `f` / `0` / `a` etc. → repeats 6× (so `f` becomes
 *    `ffffff` = white, `0` becomes `000000` = black).
 *  - 3-char CSS shorthand `fff` / `f00` → expanded to 6 chars.
 *  - 6-char hex passthrough.
 *  All with optional leading `#` and surrounding whitespace; case-insensitive.
 *  Returns `null` for anything else.
 */
export declare function normalizeColorInput(raw: string): string | null;
