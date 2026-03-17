"use client";
import { useEffect, useState, useRef } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { SortableItem } from "@/components/SortableItem";
import BentoTile from "@/components/BentoTile";
import ProjectTile from "@/components/tiles/projects/projectTile";
import { projectsData } from "@/components/tiles/projects/projects";

export default function ProjectPage() {
    const [items, setItems] = useState(projectsData.map(p => p.name));
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(true);

    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateIsMobile = () => setIsMobile(mediaQuery.matches);

        updateIsMobile();
        mediaQuery.addEventListener("change", updateIsMobile);

        return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }, []);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Drag only starts after moving 8px
            },
        })
    );

    const handleDragStart = (event: import("@dnd-kit/core").DragStartEvent) => {
        setActiveId(event.active.id?.toString());
    };

    const handleDragEnd = (event: import("@dnd-kit/core").DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        // Only reorder the actual state when the drag ends
        if (over?.id && items.includes(over.id.toString()) && active.id !== over.id) {
            const oldIndex = items.indexOf(active.id.toString());
            const newIndex = items.indexOf(over.id.toString());
            setItems(arrayMove(items, oldIndex, newIndex));
        }
    };

    return (
        <div className="min-h-screen py-3 flex justify-center">
            <div className="w-full max-w-300 p-4">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToFirstScrollableAncestor]}
                >
                    <SortableContext items={items} strategy={rectSortingStrategy}>
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 md:grid-cols-2 max-w-300 w-full" // Added gap-4 for safe spacing
                        >
                            {items.map((name) => {
                                const project = projectsData.find(p => p.name === name);
                                if (!project) return null;

                                return (
                                    <SortableItem key={name} id={name} disabled={isMobile}>
                                        <BentoTile className="w-full h-full md:h-75 transition-all duration-200">
                                            <ProjectTile project={project} />
                                        </BentoTile>
                                    </SortableItem>
                                );
                            })}
                        </div>
                    </SortableContext>

                    <DragOverlay>
                        {activeId ? (() => {
                            if (isMobile) return null;
                            const activeProject = projectsData.find(p => p.name === activeId);
                            if (!activeProject) return null;
                            return (
                                <BentoTile className="w-full h-full md:h-75 scale-105  cursor-grabbing">
                                    <ProjectTile project={activeProject} />
                                </BentoTile>
                            );
                        })() : null}
                    </DragOverlay>
                </DndContext>
            </div>
        </div >
    );
}