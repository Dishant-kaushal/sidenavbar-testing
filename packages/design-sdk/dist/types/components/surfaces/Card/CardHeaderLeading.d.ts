import type { ReactNode } from 'react';
import './CardHeaderLeading.css';
export interface CardHeaderLeadingProps {
    /** Primary title text */
    title: string;
    /** Secondary subtitle text */
    subtitle?: string;
    /** Icon slot — pass CardHeaderIcon */
    prefix?: ReactNode;
    /** Element after the title — pass CardHeaderCounter, CardHeaderBadge, CardHeaderText, or CardHeaderLink */
    suffix?: ReactNode;
}
export declare function CardHeaderLeading({ title, subtitle, prefix, suffix }: CardHeaderLeadingProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardHeaderLeading {
    var displayName: string;
}
