import { ReactNode } from "react";

interface BentoTileProps {
    children: ReactNode;
    className?: string; // Standard Col/Row spans are passed here
    innerClassName?: string; // Classes for the inner rounded shell
}

export default function BentoTile({ children, className = "", innerClassName = "" }: BentoTileProps) {
    return (
        <div className={`p-2 w-full ${className}`}>
            {/* The inner card handles the design shell */}
            <div className={`w-full h-full bg-white dark:bg-[#0d1117] rounded-4xl ring-2 ring-transparent dark:ring-gray-700 overflow-hidden relative transition-shadow duration-400 ${innerClassName}`}>
                {children}
            </div>
        </div>
    );
}