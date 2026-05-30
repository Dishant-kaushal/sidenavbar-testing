export interface ButtonGroupSelectionContextValue {
    selectedValue: string | undefined;
    onItemSelect: (value: string) => void;
}
export declare const ButtonGroupSelectionContext: import("react").Context<ButtonGroupSelectionContextValue | null>;
export declare function useButtonGroupSelectionContext(): ButtonGroupSelectionContextValue | null;
