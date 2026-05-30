import type { ComparisonMode } from './datePickerUtils';
import './ComparisonPanel.css';
export interface ComparisonPanelProps {
    isEnabled: boolean;
    onToggle: (enabled: boolean) => void;
    mode: ComparisonMode;
    onModeChange: (mode: ComparisonMode) => void;
}
export declare function ComparisonPanel({ isEnabled, onToggle, mode, onModeChange, }: ComparisonPanelProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ComparisonPanel {
    var displayName: string;
}
