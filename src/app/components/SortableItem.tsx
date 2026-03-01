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
        // Use Translate for smoother grid movement without affecting scaling
        transform: CSS.Translate.toString(transform),
        transition,
        // Ensure the active item stays on top during movement
        zIndex: isDragging ? 50 : 0,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`touch-none relative outline-none ${className}`}
        >
            {/* We wrap children in a div and apply opacity here.
               When isDragging is false, opacity is strictly 1 (100% color).
            */}
            <div
                className="w-full h-full transition-opacity duration-200"
                style={{ opacity: isDragging ? 0.4 : 1 }}
            >
                {children}
            </div>
        </div>
    );
}