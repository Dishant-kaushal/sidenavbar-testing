import type { CalendarView, CalendarDay, CalendarMonthYear } from './CalendarBase';
import type { DatePickerMode, DateRange } from './DatePicker';
import { type ComparisonMode, type ComparisonDateRange } from './datePickerUtils';
export interface UseDatePickerStateParams {
    mode: DatePickerMode;
    controlledOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    value?: Date | null;
    onChange?: (value: Date | null) => void;
    rangeValue?: DateRange | null;
    onRangeChange?: (value: DateRange | null) => void;
    controlledPreset?: string;
    controlledPresetSelect?: (value: string) => void;
    isDisabled?: boolean;
    /** Enables comparison-mode panel (range mode only). */
    showComparison?: boolean;
    /** Controlled external comparison range. */
    comparisonRangeValue?: ComparisonDateRange | null;
    /** Fires on Apply when comparison-mode is on (and emits null when off / incomplete). */
    onComparisonRangeChange?: (value: ComparisonDateRange | null) => void;
}
export declare function useDatePickerState({ mode, controlledOpen, onOpenChange, value, onChange, rangeValue, onRangeChange, controlledPreset, controlledPresetSelect, isDisabled, showComparison, comparisonRangeValue, onComparisonRangeChange, }: UseDatePickerStateParams): {
    open: boolean;
    setOpen: (v: boolean) => void;
    presetOpen: boolean;
    setPresetOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    preset: string;
    view: CalendarView;
    containerRef: import("react").RefObject<HTMLDivElement>;
    closedByKeyboard: import("react").MutableRefObject<boolean>;
    days: CalendarDay[][];
    monthItems: CalendarMonthYear[][];
    yearItems: CalendarMonthYear[][];
    headerLabel: string;
    draftSingle: Date | null;
    singleInputText: string;
    startRawText: string;
    endRawText: string;
    startTimeRaw: string;
    endTimeRaw: string;
    resolvedRange: DateRange | null;
    comparisonEnabled: boolean;
    comparisonMode: ComparisonMode;
    draftComparisonStart: Date | null;
    draftComparisonEnd: Date | null;
    comparisonStartRawText: string;
    comparisonEndRawText: string;
    isApplyDisabled: boolean;
    closeAndRevert: () => void;
    handlePrev: () => void;
    handleNext: () => void;
    handleHeaderClick: () => void;
    handleItemClick: (item: CalendarMonthYear) => void;
    handleDayClick: (day: CalendarDay) => void;
    handleDayHover: (day: CalendarDay) => void;
    handleDayHoverEnd: () => void;
    handlePresetSelect: (presetValue: string) => void;
    handleApply: () => void;
    handleCancel: () => void;
    handleSingleInputChange: (text: string) => void;
    handleStartDateChange: (text: string) => void;
    handleEndDateChange: (text: string) => void;
    handleStartTimeChange: (text: string) => void;
    handleEndTimeChange: (text: string) => void;
    handleComparisonToggle: (enabled: boolean) => void;
    handleComparisonModeChange: (next: ComparisonMode) => void;
    handleComparisonStartDateChange: (text: string) => void;
    handleComparisonEndDateChange: (text: string) => void;
};
