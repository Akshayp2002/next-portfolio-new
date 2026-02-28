// app/home/page.tsx
import BentoTile from "@/components/BentoTile";
import IntroTile from "@/components/tiles/home/IntroTile";
import GitHubTile from "@/components/tiles/home/GitHubTile";
import TechStackTile from "@/components/tiles/home/TechStackTile";
import ThemeToggleTile from "../components/tiles/home/ThemeToggleTile";

export default function Home() {
    return (
        <main className="min-h-screen py-5 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense max-w-[1200px] w-full">
                {/* Row 1 */}
                <BentoTile className="md:col-span-2 lg:col-span-2 h-[400px] lg:h-[300px]">
                    <IntroTile />
                </BentoTile>
                <BentoTile className="col-span-1 h-[400px] lg:h-[300px]">
                    <div className="bg-[#e8f5e9] w-full h-full flex items-center justify-center text-gray-500 italic dark:bg-[#0d1117]">Kozhikode Map View</div>
                </BentoTile>
                <BentoTile className="col-span-1 lg:row-span-2 h-[400px] lg:h-[600px]">
                    <TechStackTile />
                </BentoTile>
                {/* Row 2 */}
                <BentoTile className="col-span-1 h-[400px] lg:h-[300px]">
                    <ThemeToggleTile />
                </BentoTile>
                <BentoTile className="col-span-1 h-[400px] lg:h-[300px]">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center dark:bg-[#0d1117]">
                        <div className="w-20 h-20 bg-white rounded-2xl dark:bg-[#0d1117]">IG</div>
                    </div>
                </BentoTile>
                <BentoTile className="md:col-span-2 h-[400px] lg:h-[300px]">
                    <div className="bg-[#fff9c4] w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Blog Journey Content</div>
                </BentoTile>
                <BentoTile className="col-span-1 lg:row-span-2 h-[400px] lg:h-[600px]">
                    <div className="bg-[#e0f7fa] w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Project Portrait</div>
                </BentoTile>
                <BentoTile className="col-span-1 h-[400px] lg:h-[300px]">
                    <GitHubTile />
                </BentoTile>
                <BentoTile className="md:col-span-2 h-[400px] lg:h-[300px]">
                    <div className="bg-[#f3e5f5] w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Business App Preview</div>
                </BentoTile>
                <BentoTile className="md:col-span-2 h-[400px] lg:h-[300px]">
                    <div className="bg-white w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Contact Footer Content</div>
                </BentoTile>
            </div>
        </main>
    );
}
