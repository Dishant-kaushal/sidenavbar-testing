import type { DragEvent } from 'react';
export declare function useDraggableList<T extends {
    id: string;
}>(initialItems: T[]): {
    items: T[];
    setItems: import("react").Dispatch<import("react").SetStateAction<T[]>>;
    getItemProps: (id: string) => {
        isDragging: boolean;
        isDragOver: boolean;
        onDragStart(e: DragEvent<HTMLDivElement>): void;
        onDragOver(e: DragEvent<HTMLDivElement>): void;
        onDragLeave(e: DragEvent<HTMLDivElement>): void;
        onDrop(e: DragEvent<HTMLDivElement>): void;
        onDragEnd(_e: DragEvent<HTMLDivElement>): void;
    };
};
