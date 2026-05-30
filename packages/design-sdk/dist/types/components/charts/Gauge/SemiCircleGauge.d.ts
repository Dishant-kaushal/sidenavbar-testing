import type { ApexOptions } from 'apexcharts';
import type { ChartProps } from '../Chart/Chart';
import './SemiCircleGauge.css';
export interface SemiCircleGaugeProps extends Omit<ChartProps, 'children' | 'breadcrumb'> {
    /** Percentage value (0–100). */
    value: number;
    /** Label shown below the value in the center. */
    label?: string;
    /** Value rendered at the left (start) end of the arc. @default 0 */
    min?: number;
    /** Value rendered at the right (end) end of the arc. @default 100 */
    max?: number;
    /** Show the min/max range labels at the arc endpoints. @default true */
    showRange?: boolean;
    /** ApexCharts options escape hatch — merged last. */
    apexOptions?: ApexOptions;
    /** Fires when the underlying ApexCharts instance mounts. Use for `exportChart`. */
    onChartReady?: (instance: unknown) => void;
}
export declare const SemiCircleGauge: import("react").ForwardRefExoticComponent<SemiCircleGaugeProps & import("react").RefAttributes<HTMLDivElement>>;
