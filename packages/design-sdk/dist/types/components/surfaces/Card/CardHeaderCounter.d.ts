import type { ReactNode } from 'react';
import type { BadgeColor } from '../../data-display/Badge/Badge';
export interface CardHeaderCounterProps {
    color?: BadgeColor;
    children: ReactNode;
}
export declare function CardHeaderCounter({ color, children }: CardHeaderCounterProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardHeaderCounter {
    var displayName: string;
}
