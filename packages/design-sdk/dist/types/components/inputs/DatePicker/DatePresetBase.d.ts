import type { ButtonHTMLAttributes } from 'react';
import './DatePresetBase.css';
export interface DatePresetBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Preset label (e.g. "Custom", "Today", "Last 7 Days") */
    label: string;
    /** Whether this preset is currently selected */
    isSelected?: boolean;
}
export declare function DatePresetBase({ label, isSelected, className, ...props }: DatePresetBaseProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DatePresetBase {
    var displayName: string;
}
