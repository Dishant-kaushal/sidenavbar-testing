import type { HTMLAttributes, ReactNode } from 'react';
import './Card.css';
export type CardElevation = 'None' | 'LowRaised' | 'MidRaised' | 'HighRaised';
export type CardSize = 'large' | 'medium';
export type CardPadding = 'spacing.0' | 'spacing.3' | 'spacing.4' | 'spacing.5' | 'spacing.7';
export type CardValidationState = 'none' | 'error' | 'success';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Elevation shadow level */
    elevation?: CardElevation;
    /** Whether the card shows hover shadow effect */
    isHoverable?: boolean;
    /** Whether the card scales up (1.05×) on hover */
    isHoverScaled?: boolean;
    /** Whether the card is in selected state (blue border) */
    isSelected?: boolean;
    /** Validation state — 'error' shows a red border, 'success' shows a green border. Default: 'none' */
    validationState?: CardValidationState;
    /** Controls header title text size — 'large' (BodyLarge) or 'medium' (BodyMedium) */
    size?: CardSize;
    /** Padding on all sides. Use 'spacing.0' for full-bleed media layouts. Default: 'spacing.7' */
    padding?: CardPadding;
    /** Card content — pass CardHeader, CardBody, CardFooter as children */
    children?: ReactNode;
    /** Accessible name for the card region. Sets `aria-label`. */
    accessibilityLabel?: string;
    /** href — when set, the card renders as an `<a>` (linkable card). */
    href?: string;
    /** target — paired with `href`. */
    target?: string;
    /** rel — paired with `href`. */
    rel?: string;
    /** Renders the card as a `<label>` — use with Radio/Checkbox card patterns. */
    as?: 'label';
}
export declare function Card({ elevation, isHoverable, isHoverScaled, isSelected, validationState, size, padding, children, className, accessibilityLabel, href, target, rel, as, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Card {
    var displayName: string;
}
