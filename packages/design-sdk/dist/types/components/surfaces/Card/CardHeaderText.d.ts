import type { HTMLAttributes, ReactNode } from 'react';
export interface CardHeaderTextProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
}
export declare function CardHeaderText({ children, ...props }: CardHeaderTextProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardHeaderText {
    var displayName: string;
}
