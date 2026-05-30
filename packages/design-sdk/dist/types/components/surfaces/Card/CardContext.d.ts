interface CardContextValue {
    size: 'large' | 'medium';
}
export declare const CardContext: import("react").Context<CardContextValue>;
export declare const useCardContext: () => CardContextValue;
export {};
