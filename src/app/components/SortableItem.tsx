import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem({
    id,
    className = "",
    children,
    disabled = false,
}: {
    id: string;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });

    const style = {
        transform: transform ? `translate3d(${isDragging ? transform.x : 0}px, ${transform.y}px, 0)` : undefined,
        transition,
        zIndex: isDragging ? 50 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...(!disabled ? attributes : {})}
            {...(!disabled ? listeners : {})}
            className={`
                ${!disabled ? "touch-none cursor-grab active:cursor-grabbing" : ""} 
                relative outline-none rounded-4xl bg-white dark:bg-zinc-900 border border-transparent 
                ${isDragging ? "shadow-2xl z-50 ring-2 ring-blue-500 ring-opacity-50 opacity-90 scale-105" : "hover:border-gray-200 dark:hover:border-zinc-800 transition-colors"} 
                ${className}
            `}
        >
            <div className={`w-full h-full rounded-4xl overflow-hidden pointer-events-auto`}>
                {children}
            </div>
        </div>
    );
}