import type { MouseEventHandler, ReactNode } from 'react';
import './CardFooterTrailing.css';
export interface CardFooterAction {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    isLoading?: boolean;
    /** Sets the button's `type` attribute — useful for form submission. */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible label for the button (overrides visible text for screen readers). */
    accessibilityLabel?: string;
    /** Icon rendered in the button. Position controlled by `iconPosition`. */
    icon?: ReactNode;
    /** Whether the icon appears before or after the label. Default: 'left'. */
    iconPosition?: 'left' | 'right';
}
export interface CardFooterTrailingProps {
    actions?: {
        primary?: CardFooterAction;
        secondary?: CardFooterAction;
    };
}
export declare function CardFooterTrailing({ actions }: CardFooterTrailingProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace CardFooterTrailing {
    var displayName: string;
}
