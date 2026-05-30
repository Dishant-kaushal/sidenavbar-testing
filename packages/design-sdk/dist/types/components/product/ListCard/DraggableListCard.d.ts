import type { DragEventHandler } from 'react';
import type { ListCardProps } from './ListCard';
import './DraggableListCard.css';
export interface DraggableListCardProps extends Omit<ListCardProps, 'id'> {
    id: string;
    isDraggable?: boolean;
    isDragging?: boolean;
    isDragOver?: boolean;
    onDragStart?: DragEventHandler<HTMLDivElement>;
    onDragOver?: DragEventHandler<HTMLDivElement>;
    onDragLeave?: DragEventHandler<HTMLDivElement>;
    onDrop?: DragEventHandler<HTMLDivElement>;
    onDragEnd?: DragEventHandler<HTMLDivElement>;
}
export declare function DraggableListCard({ id, isDraggable, isDragging, isDragOver, isDisabled, onDragStart, onDragOver, onDragLeave, onDrop, onDragEnd, ...listCardProps }: DraggableListCardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DraggableListCard {
    var displayName: string;
}
