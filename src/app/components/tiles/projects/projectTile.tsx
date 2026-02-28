import Image from "next/image";
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    image: string;
    tech: { name: string; image: string }[];
    [key: string]: any;
}

export default function ProjectTile({ project }: { project: Project }) {
    // Ensure image src is a valid path or fallback
    let imageSrc = project.image;
    if (!imageSrc || typeof imageSrc !== "string" || (!imageSrc.startsWith("/") && !imageSrc.startsWith("http"))) {
        imageSrc = "/tech/placeholder.svg";
    }
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col md:flex-row w-full p-6 md:p-8 gap-8 items-center md:items-start overflow-hidden flex-1">
                {/* 1. Project Preview Image Placeholder */}
                <div className="w-full md:w-1/2 h-48 md:h-full bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center shrink-0">
                    <Image src={imageSrc} alt={project.name} width={400} height={300} className="object-cover rounded-2xl" />
                </div>
                {/* 2. Content Section */}
                <div className="flex flex-col justify-between w-full">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-md md:text-xl font-black text-gray-800 mb-2 tracking-tight">
                            {project.name}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {project.description}
                        </p>
                        {/* Tech Stack Icons */}
                        <div className="flex gap-4 md:mb-8">
                            {Array.isArray(project.tech) && project.tech.map((tech: { name: string; image: string }, i: number) => (
                                <Image
                                    key={i}
                                    src={tech.image || "/tech/placeholder.svg"}
                                    alt={tech.name}
                                    width={23}
                                    height={23}
                                    style={{ height: 'auto' }}
                                    title={tech.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section: Action & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-8 pb-2 bg-white rounded-b-2xl shadow-sm border-t border-gray-100 mt-auto">
                {/* Github & View Buttons */}
                <div className="flex items-center gap-2 h-10">
                    {project.view && typeof project.view === "string" && (
                        <Link href={project.view} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                            <Image src="/arrow.svg" alt="View Project" width={20} height={20} /> {/* View Icon Placeholder */}
                        </Link>
                    )}
                    {project.github && typeof project.github === "string" && (
                        <Link href={project.github} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                            <Image src="/github.svg" alt="GitHub" width={35} height={35} /> {/* View Icon Placeholder */}
                        </Link>
                    )}
                </div>
                {/* Status & Date Badges */}
                <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold border border-orange-100/50 hidden md:inline-block">
                        Personal Project
                    </span>
                    <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold border border-red-100/50 hidden md:inline-block">
                        Closed
                    </span>
                    <span className="text-gray-400 text-xs font-medium ml-2">
                        August - 2024
                    </span>
                </div>
            </div>
        </div>

    );
}