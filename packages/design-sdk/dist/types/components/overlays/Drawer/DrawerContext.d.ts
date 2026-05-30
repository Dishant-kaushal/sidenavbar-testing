import { type MutableRefObject } from 'react';
export interface DrawerContextValue {
    close: () => void;
    closeAll: () => void;
    closeButtonRef: MutableRefObject<HTMLButtonElement | null>;
    stackingLevel: number;
    /** True while the panel is animating out. DrawerHeader keeps the back-arrow
     *  rendered during exit so it doesn't flicker mid-animation when the
     *  StackProvider unregisters this drawer. */
    isExiting: boolean;
}
export declare const DrawerContext: import("react").Context<DrawerContextValue | null>;
export declare function useDrawerContext(): DrawerContextValue;
