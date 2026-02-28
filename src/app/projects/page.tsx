import BentoTile from "@/components/BentoTile";
import ProjectTile from "@/components/tiles/projects/projectTile";
import { projectsData } from "@/components/tiles/projects/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-5 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense max-w-[1200px] w-full">
                {projectsData.map((project, index) => (
                    <BentoTile key={index} className="h-full md:h-75">
                        <ProjectTile project={project} />
                    </BentoTile>
                ))}
            </div>
        </div>
    );
}
