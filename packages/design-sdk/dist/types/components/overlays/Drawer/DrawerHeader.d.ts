import { type HTMLAttributes, type ReactNode } from 'react';
import './DrawerHeader.css';
export interface DrawerHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Heading text — BodyLargeSemibold via utility class. */
    title?: string;
    /** Secondary text under the title — BodySmallRegular. */
    subtitle?: string;
    /** Leading slot before the content. Two sizing variants are supported:
     *  - **Icon** (default): 20×28 cell, icon (typically 20×20) centred.
     *  - **Avatar**: when the child's `displayName === 'Avatar'`, the slot
     *    automatically becomes a 32×32 cell that the Avatar fills. Use any
     *    Avatar size — the cell is fixed at 32 px to match Figma.
     *  Both variants top-align to the title row's upper line. */
    leading?: ReactNode;
    /** Slot next to the title — typically a `<Badge>` (counter pattern). */
    titleSuffix?: ReactNode;
    /** Slot before the close button — typically a `<Badge>` or `<LinkButton>`. */
    trailing?: ReactNode;
    /** Render the bottom divider. @default true */
    showDivider?: boolean;
    /** Render a custom block BELOW the standard `[leading | title/subtitle |
     *  trailing]` row (NOT a replacement). Mirrors Blade's two-row composition
     *  — when both `title` and `children` are passed, the title row stays at
     *  the top and `children` appear underneath, full-width. Pass ONLY
     *  `children` (no title/subtitle/leading/titleSuffix/trailing) to collapse
     *  the standard row into just `[back?] [your block] [close]`. */
    children?: ReactNode;
}
export declare function DrawerHeader({ title, subtitle, leading, titleSuffix, trailing, showDivider, className, children, ...props }: DrawerHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DrawerHeader {
    var displayName: string;
}
