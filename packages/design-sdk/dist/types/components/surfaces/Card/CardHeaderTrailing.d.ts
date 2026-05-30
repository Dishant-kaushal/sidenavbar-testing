import type { ReactNode } from 'react';
import './CardHeaderTrailing.css';
export interface CardHeaderTrailingProps {
    /** Visual element — pass CardHeaderBadge, CardHeaderLink, CardHeaderIconButton, etc. */
    visual?: ReactNode;
}
export declare function CardHeaderTrailing({ visual }: CardHeaderTrailingProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace CardHeaderTrailing {
    var displayName: string;
}
