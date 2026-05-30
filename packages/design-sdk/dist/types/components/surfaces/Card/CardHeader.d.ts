import type { HTMLAttributes, ReactNode } from 'react';
import './CardHeader.css';
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Show bottom divider */
    showDivider?: boolean;
    /** Pass CardHeaderLeading and/or CardHeaderTrailing as children */
    children?: ReactNode;
}
export declare function CardHeader({ showDivider, children, className, ...rest }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardHeader {
    var displayName: string;
}
