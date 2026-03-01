import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export function SortableItem({ id, className = "", children }: SortableItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition, // Use dnd-kit's built-in transition for stability
        zIndex: isDragging ? 0 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`touch-none relative outline-none ${className}`}
        >
            <div
                className="w-full h-full transition-opacity duration-200"
                style={{ opacity: isDragging ? 0.3 : 1 }}
            >
                {children}
            </div>
        </div>
    );
}