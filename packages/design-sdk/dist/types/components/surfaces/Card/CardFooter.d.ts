import type { HTMLAttributes, ReactNode } from 'react';
import './CardFooter.css';
export type CardFooterLayout = 'Desktop' | 'Mobile';
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    /** Show top divider */
    showDivider?: boolean;
    /** Layout — Desktop (inline row) or Mobile (stacked full-width) */
    layout?: CardFooterLayout;
    /** Pass CardFooterLeading and/or CardFooterTrailing as children */
    children?: ReactNode;
}
export declare function CardFooter({ showDivider, layout, children, className, ...rest }: CardFooterProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardFooter {
    var displayName: string;
}
