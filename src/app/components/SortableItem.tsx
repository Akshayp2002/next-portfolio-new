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
        transform: transform && !isDragging ? `translate3d(0px, ${transform.y}px, 0)` : undefined,
        transition: isDragging ? undefined : transition,
        zIndex: isDragging ? 0 : 1,
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className={`relative rounded-4xl bg-white/40 dark:bg-zinc-800/50 border-2 border-dashed border-white/60 dark:border-zinc-700/50 ${className}`}
            >
                <div className="opacity-0 pointer-events-none w-full h-full">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...(!disabled ? attributes : {})}
            {...(!disabled ? listeners : {})}
            className={`
                ${!disabled ? "touch-none cursor-grab active:cursor-grabbing" : ""} 
                relative outline-none rounded-4xl transition-colors
                ${className}
            `}
        >
            <div className={`w-full h-full rounded-4xl pointer-events-auto`}>
                {children}
            </div>
        </div>
    );
}