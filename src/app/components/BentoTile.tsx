// components/BentoTile.tsx
import { ReactNode } from "react";

interface BentoTileProps {
    children: ReactNode;
    className?: string; // Standard Col/Row spans are passed here
}

export default function BentoTile({ children, className = "" }: BentoTileProps) {
    return (
        <div className={`p-2 w-full ${className}`}>
            {/* The inner card handles the design shell */}
            <div className="w-full h-full bg-white dark:bg-[#0d1117] rounded-4xl ring-2 ring-transparent dark:ring-gray-700 overflow-hidden relative hover:shadow-md transition-shadow duration-400">
                {children}
            </div>
        </div>
    );
}