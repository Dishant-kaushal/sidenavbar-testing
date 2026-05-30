import { type ReactNode } from 'react';
import { type ButtonGroupProps } from './ButtonGroup';
export interface SegmentedControlProps extends Omit<ButtonGroupProps, 'children' | 'onChange'> {
    /** Controlled selected value — must match a `value` prop on one of the `ButtonGroupItem` children. */
    value?: string;
    /** Initial selected value when uncontrolled. */
    defaultValue?: string;
    /** Fired whenever the selection changes. */
    onChange?: (value: string) => void;
    children: ReactNode;
}
export declare function SegmentedControl({ value: valueProp, defaultValue, onChange, children, ...groupProps }: SegmentedControlProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SegmentedControl {
    var displayName: string;
}
