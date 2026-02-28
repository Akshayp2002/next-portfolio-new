// components/BentoTile.tsx
import { ReactNode } from "react";

interface BentoTileProps {
    children: ReactNode;
    className?: string; // Standard Col/Row spans are passed here
}

export default function BentoTile({ children, className = "" }: BentoTileProps) {
    return (
        <div className={`p-3 w-full ${className}`}>
            {/* The inner card handles the design shell */}
            <div className="w-full h-full bg-white rounded-[2.5rem] lg:rounded-[3rem] border border-gray-100 dark:border-none shadow-sm overflow-hidden relative">
                {children}
            </div>
        </div>
    );
}