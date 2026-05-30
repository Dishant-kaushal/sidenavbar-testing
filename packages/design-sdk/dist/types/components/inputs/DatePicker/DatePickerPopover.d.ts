import type { HTMLAttributes } from 'react';
import { type ComparisonMode } from './datePickerUtils';
import { type DatePresetOption } from './DatePresetSidebar';
import type { CalendarDay, CalendarView, CalendarMonthYear } from './CalendarBase';
import './DatePickerPopover.css';
export interface DatePickerPopoverProps extends HTMLAttributes<HTMLDivElement> {
    showPresets?: boolean;
    presets?: DatePresetOption[];
    selectedPreset?: string;
    onPresetSelect?: (value: string) => void;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    onStartDateChange?: (value: string) => void;
    onStartTimeChange?: (value: string) => void;
    onEndDateChange?: (value: string) => void;
    onEndTimeChange?: (value: string) => void;
    calendarLabel?: string;
    onPrevMonth?: () => void;
    onNextMonth?: () => void;
    onCalendarLabelClick?: () => void;
    /** Current calendar view */
    view?: CalendarView;
    days?: CalendarDay[][];
    onDayClick?: (day: CalendarDay) => void;
    /** Called when the pointer enters a day cell */
    onDayHover?: (day: CalendarDay) => void;
    /** Called when the pointer leaves the day grid */
    onDayHoverEnd?: () => void;
    /** Month/year items for month/year picker views */
    items?: CalendarMonthYear[][];
    /** Called when a month/year item is clicked */
    onItemClick?: (item: CalendarMonthYear) => void;
    /** Disable the Apply button */
    isApplyDisabled?: boolean;
    onCancel?: () => void;
    onApply?: () => void;
    /** Mount the comparison panel inside the preset sidebar footer. Requires `showPresets` to take visible effect. */
    showComparison?: boolean;
    /** Whether the comparison toggle is on. */
    comparisonEnabled?: boolean;
    /** Toggle handler. */
    onComparisonToggle?: (enabled: boolean) => void;
    /** Current comparison mode. */
    comparisonMode?: ComparisonMode;
    /** Comparison mode-change handler. */
    onComparisonModeChange?: (mode: ComparisonMode) => void;
    /** Comparison start-date input text (only used when comparison is on). */
    comparisonStartDate?: string;
    /** Comparison end-date input text. */
    comparisonEndDate?: string;
    onComparisonStartDateChange?: (value: string) => void;
    onComparisonEndDateChange?: (value: string) => void;
    /** When true, each popover input shows the required asterisk and auto-flags an error on blur-empty. */
    isRequired?: boolean;
}
export declare function DatePickerPopover({ showPresets, presets, selectedPreset, onPresetSelect, startDate, startTime, endDate, endTime, onStartDateChange, onStartTimeChange, onEndDateChange, onEndTimeChange, calendarLabel, onPrevMonth, onNextMonth, onCalendarLabelClick, view, days, onDayClick, onDayHover, onDayHoverEnd, items, onItemClick, isApplyDisabled, onCancel, onApply, showComparison, comparisonEnabled, onComparisonToggle, comparisonMode, onComparisonModeChange, comparisonStartDate, comparisonEndDate, onComparisonStartDateChange, onComparisonEndDateChange, isRequired, className, ...props }: DatePickerPopoverProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DatePickerPopover {
    var displayName: string;
}
