import { type HTMLAttributes, type ReactNode } from 'react';
import './Chart.css';
/**
 * A horizontal reference line drawn across the plot area at a fixed Y value.
 * Maps directly to Highcharts `yAxis.plotLines`. Commonly used for threshold
 * annotations (Warning / Critical limits in IOLens widgets).
 */
export interface ChartPlotLine {
    /** Y-axis value where the line is drawn */
    value: number;
    /** Line colour — any valid CSS colour or hex string */
    color?: string;
    /** Line thickness in pixels @default 2 */
    width?: number;
    /** Stroke pattern @default 'Dash' */
    dashStyle?: 'Solid' | 'Dash' | 'Dot' | 'DashDot' | 'LongDash' | 'ShortDash';
    /** Optional label text rendered beside the line */
    label?: string;
    /** Label horizontal alignment @default 'right' */
    labelAlign?: 'left' | 'center' | 'right';
    /** Stacking z-index so lines appear above series @default 5 */
    zIndex?: number;
}
/**
 * A shaded band spanning a Y value range across the plot area.
 * Maps to Highcharts `yAxis.plotBands`. More visually prominent than a
 * plotLine — use bands for threshold zones (e.g. warning 80–90, critical 90+)
 * and lines for single threshold markers.
 */
export interface ChartPlotBand {
    /** Lower Y-axis bound of the band */
    from: number;
    /** Upper Y-axis bound of the band. Use `Infinity` for open-ended top bands. */
    to: number;
    /** Fill colour — use a semi-transparent value e.g. `'rgba(249,115,22,0.15)'` */
    color?: string;
    /** Optional label text rendered inside the band */
    label?: string;
    /** Label horizontal alignment @default 'right' */
    labelAlign?: 'left' | 'center' | 'right';
    /** Stacking z-index @default 0 (behind series by default for bands) */
    zIndex?: number;
}
/**
 * Shape of the context object passed to `onPointClick` on axis charts.
 * Used by consumers to implement time drill-down: click a point → consumer
 * inspects `category` / `pointIndex` and re-feeds the chart with data for
 * the next hierarchy level (e.g. Daily → Hourly for that day).
 */
export interface ChartPointClickContext {
    /** The category label of the clicked point (e.g. "Mar 12", "12:00"). */
    category: string;
    /** Name of the series the point belongs to. */
    seriesName: string;
    /** Numeric value of the clicked point, or null if the point has no value. */
    value: number | null;
    /** Zero-based index of the point inside its series's `data` array. */
    pointIndex: number;
    /** Zero-based index of the series among the chart's series list. */
    seriesIndex: number;
}
export interface ChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Chart title. Pass a string to render the default Faclon-styled title
     * (HeadingSmallSemibold in `--text-gray-primary`). Pass a ReactNode to slot
     * a custom node — typically a `DropdownMenu` trigger for a chart-type
     * selector. The title style is intentionally standardised across every
     * chart in the SDK; there is no size or className override.
     */
    title?: ReactNode;
    /**
     * Click handler for the title. Setting this is the *only* signal needed
     * for the title to become a switchable dropdown — passing `onTitleClick`
     * automatically renders the title as a button with the chevron icon, hover
     * background, and focus ring. Omit to render a plain non-interactive title.
     * Only applies when `title` is a string.
     */
    onTitleClick?: () => void;
    /** Breadcrumb element — typically a `<Breadcrumb>...</Breadcrumb>` */
    breadcrumb?: ReactNode;
    /**
     * Long-form description of the chart, intended for an Info-icon hover
     * tooltip's body text. The Chart wrapper does NOT render this anywhere
     * automatically — it's a metadata prop your custom `actions` slot can read
     * and pass into a `<Tooltip bodyText={description}>` around the Info button
     * (typically paired with `heading={title}` for the tooltip heading).
     */
    description?: ReactNode;
    /**
     * Duration / time-range label rendered below the header row, inside the
     * same header container. Pass a string (e.g. `"Duration: This Year"`) or
     * any ReactNode. A leading clock icon is rendered automatically. Omit to
     * hide the row.
     */
    duration?: ReactNode;
    /**
     * Action buttons rendered on the right of the header.
     * Pass `<IconButton>` elements (info / settings / more etc.).
     *
     * If set, this is a full override — the per-icon convenience props
     * (`showInfo`/`onInfoClick`/...) are silently ignored. Omit to fall back
     * to the built-in `<ChartActions>` group driven by those props.
     */
    actions?: ReactNode;
    /** Click handler for the built-in Info icon (renders by default when set). */
    onInfoClick?: () => void;
    /** Click handler for the built-in Settings (gear) icon (renders by default when set). */
    onSettingsClick?: () => void;
    /** Click handler for the built-in More icon (renders by default when set). */
    onMoreClick?: () => void;
    /** Force-show or force-hide the built-in Info icon. Overrides the handler-based default. */
    showInfo?: boolean;
    /** Force-show or force-hide the built-in Settings icon. Overrides the handler-based default. */
    showSettings?: boolean;
    /** Force-show or force-hide the built-in More icon. Overrides the handler-based default. */
    showMore?: boolean;
    /**
     * Filter / toolbar row rendered between the header and the canvas.
     * Typically a `<DatePicker mode="range" />`. Omit to hide the row.
     */
    filters?: ReactNode;
    /**
     * Chart canvas content — the actual chart instance
     * (e.g. `<HighchartsReact .../>`). This is the slot every chart type
     * shares against the same base.
     */
    children?: ReactNode;
}
export declare const Chart: import("react").ForwardRefExoticComponent<ChartProps & import("react").RefAttributes<HTMLDivElement>>;
