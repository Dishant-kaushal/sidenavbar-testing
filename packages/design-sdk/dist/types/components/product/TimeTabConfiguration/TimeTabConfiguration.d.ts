import type { GTPGlobalTimepicker, TimeTabUIConfig } from './types';
import './TimeTabConfiguration.css';
export interface TimeTabConfigurationProps {
    value?: Partial<TimeTabUIConfig>;
    onChange: (value: TimeTabUIConfig) => void;
    globalTimepickers?: GTPGlobalTimepicker[];
    /** When 'series', hides the Shift accordion and periodicity options. */
    mode?: string;
    /**
     * Show the "Fixed Type" choice in the Time Type dropdown.
     * Set to `false` for Local-only or Global-only picker configurations where
     * Fixed doesn't apply — if the persisted `value.timeType` is `'fixed'`,
     * it auto-falls back to `'local'`.
     * @default true
     */
    showFixedType?: boolean;
}
export declare function TimeTabConfiguration({ value, onChange, globalTimepickers, mode, showFixedType }: TimeTabConfigurationProps): import("react/jsx-runtime").JSX.Element;
