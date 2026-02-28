import BentoTile from "@/components/BentoTile";
import AboutTools from "@/components/tiles/tools/aboutTile";
import TechTiles from "@/components/tiles/tools/techTiles";
import { toolsData } from "@/components/tiles/tools/tools";

export default function ToolsPage() {
    return (
        <main className="min-h-screen py-5 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense max-w-[1200px] w-full">
                {/* Row 1 */}
                <BentoTile className="lg:col-span-2">
                    <AboutTools />
                </BentoTile>

                {/* Dynamic Tech Tiles Loop */}
                {toolsData.map((tool, index) => (
                    <BentoTile
                        key={index}
                        className="col-span-1"
                    >
                        <TechTiles
                            name={tool.name}
                            description={tool.description}
                            link={tool.link}
                            image={tool.image}
                        />
                    </BentoTile>
                ))}
            </div>
        </main>
    );
}
