"use client";

import { useState, useEffect, useRef } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
    DragOverEvent,
    MeasuringStrategy,
} from "@dnd-kit/core";
import {
    restrictToParentElement,
} from "@dnd-kit/modifiers";
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "@/components/SortableItem";

import IntroTile from "@/components/tiles/home/IntroTile";
import GitHubTile from "@/components/tiles/home/GitHubTile";
import TechStackTile from "@/components/tiles/home/TechStackTile";
import ThemeToggleTile from "@/components/tiles/home/ThemeToggleTile";
import MapTile from "@/components/tiles/home/MapTile";
import SocialTile from "@/components/tiles/home/SocialsTile";
import ProjectDetailsTile from "@/components/tiles/home/ProjectDetailsTile";
import BusinessPreviewTile from "@/components/tiles/home/BusinessPreviewTile";

const TILE_CONFIG: Record<string, { className: string; content: React.ReactNode }> = {
    intro: { className: "md:col-span-2 lg:col-span-2 h-75", content: <IntroTile /> },
    mapView: {
        className: "col-span-1 h-75",
        content: (
            <MapTile/>
        ),
    },
    techStack: { className: "col-span-1 lg:row-span-2 h-155", content: <TechStackTile /> },
    themeToggle: { className: "col-span-1 h-75", content: <ThemeToggleTile /> },
    instagram: {
        className: "col-span-1 h-75",
        content: <SocialTile />,
    },
    blog: {
        className: "md:col-span-2 h-75",
        content: (
            <div className="bg-[#ffeb38] w-full h-full p-8 rounded-4xl text-black">
                Blog Journey Content
            </div>
        ),
    },
    portrait: {
        className: "col-span-1 lg:row-span-2 h-155",
        content: <ProjectDetailsTile />,
    },
    github: { className: "col-span-1 h-75", content: <GitHubTile /> },
    business: {
        className: "md:col-span-2 h-75",
        content: <BusinessPreviewTile />,
    },
    contact: {
        className: "md:col-span-2 h-75",
        content: (
            <div className="bg-white w-full h-full p-8 rounded-4xl border border-gray-100">
                Contact Footer Content
            </div>
        ),
    },
};


export default function HomeInner() {
    const [items, setItems] = useState(() => Object.keys(TILE_CONFIG));
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const lastUpdate = useRef<number>(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateMobileState = () => setIsMobile(mediaQuery.matches);

        updateMobileState();
        mediaQuery.addEventListener("change", updateMobileState);

        return () => mediaQuery.removeEventListener("change", updateMobileState);
    }, []);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id.toString());
    };

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;
        
        const activeIdStr = active.id.toString();
        const overIdStr = over.id.toString();

        if (activeIdStr !== overIdStr) {
            const now = Date.now();
            if (now - lastUpdate.current > 150) {
                setItems((prev) => {
                    const oldIndex = prev.indexOf(activeIdStr);
                    const newIndex = prev.indexOf(overIdStr);
                    return arrayMove(prev, oldIndex, newIndex);
                });
                lastUpdate.current = now;
            }
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveId(null);
    };

    if (!isMounted) return null;

    return (
        <main className="min-h-screen py-5 flex justify-center w-full">
            <div className="max-w-[1200px] w-full px-4 relative">
                <DndContext
                    id="final-stable-bento"
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}
                    measuring={{
                        droppable: {
                            strategy: MeasuringStrategy.Always,
                        },
                    }}
                    modifiers={[restrictToParentElement]}
                >
                    <SortableContext items={items} strategy={rectSortingStrategy}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-min">
                            {items.map((id) => (
                                <SortableItem key={id} id={id} className={TILE_CONFIG[id].className} disabled={isMobile}>
                                    {TILE_CONFIG[id].content}
                                </SortableItem>
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
        </main>
    );
}