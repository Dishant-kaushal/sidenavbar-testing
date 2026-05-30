import type { HTMLAttributes, ReactNode } from 'react';
import type { DatePresetOption } from './DatePresetSidebar';
import type { ComparisonDateRange, ComparisonMode } from './datePickerUtils';
import './DatePicker.css';
export type { ComparisonDateRange, ComparisonMode };
export type DatePickerMode = 'single' | 'range';
export interface DateRange {
    start: Date;
    end: Date;
}
export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    mode?: DatePickerMode;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    value?: Date | null;
    onChange?: (value: Date | null) => void;
    rangeValue?: DateRange | null;
    onRangeChange?: (value: DateRange | null) => void;
    showPresets?: boolean;
    showPresetChip?: boolean;
    presets?: DatePresetOption[];
    selectedPreset?: string;
    onPresetSelect?: (value: string) => void;
    label?: string;
    placeholder?: string;
    helpText?: string;
    errorText?: string;
    validationState?: 'none' | 'error';
    /** When true, the field auto-flags an error if the user closes the picker without choosing a value. */
    isRequired?: boolean;
    isDisabled?: boolean;
    showPeriodicity?: boolean;
    periodicitySlot?: ReactNode;
    /** Mount the comparison-mode panel inside the popover. Range mode only. */
    showComparison?: boolean;
    /** Controlled comparison range value. */
    comparisonRangeValue?: ComparisonDateRange | null;
    /** Fires on Apply when comparison mode is enabled (null when off or incomplete). */
    onComparisonRangeChange?: (value: ComparisonDateRange | null) => void;
}
export declare function DatePicker({ mode, isOpen: controlledOpen, onOpenChange, value, onChange, rangeValue, onRangeChange, showPresets, showPresetChip, presets, selectedPreset: controlledPreset, onPresetSelect: controlledPresetSelect, label, placeholder, helpText, errorText, validationState, isRequired, isDisabled, showPeriodicity, periodicitySlot, showComparison, comparisonRangeValue, onComparisonRangeChange, className, ...props }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DatePicker {
    var displayName: string;
}
