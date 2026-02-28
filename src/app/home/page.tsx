// app/home/page.tsx
import BentoTile from "@/components/BentoTile";
import IntroTile from "@/components/tiles/home/IntroTile";
import GitHubTile from "@/components/tiles/home/GitHubTile";
import TechStackTile from "@/components/tiles/home/TechStackTile";
import ThemeToggleTile from "../components/tiles/home/ThemeToggleTile";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen py-5 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense max-w-300 w-full">
                {/* Row 1 */}
                <BentoTile className="md:col-span-2 lg:col-span-2 h-75">
                    <IntroTile />
                </BentoTile>
                <BentoTile className="col-span-1 h-75">
                    <div className="bg-[#e8f5e9] w-full h-full flex items-center justify-center text-gray-500 italic dark:bg-[#0d1117]">Kozhikode Map View</div>
                </BentoTile>
                <BentoTile className="col-span-1 lg:row-span-2 h-155">
                    <TechStackTile />
                </BentoTile>
                {/* Row 2 */}
                <BentoTile className="col-span-1 h-75">
                    <ThemeToggleTile />
                </BentoTile>
                <BentoTile className="col-span-1 h-75">
                    <div className="w-full h-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center dark:bg-[#0d1117]">
                        <div className="">
                            <Image src="/tech/instagram.svg" alt="Instagram Logo" width={80} height={80} className="w-full h-full object-cover rounded-2xl" />
                        </div>
                    </div>
                </BentoTile>
                <BentoTile className="md:col-span-2 h-75">
                    <div className="bg-[#fff9c4] w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Blog Journey Content</div>
                </BentoTile>
                <BentoTile className="col-span-1 lg:row-span-2 h-155">
                    <div className="bg-[#e0f7fa] w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Project Portrait</div>
                </BentoTile>
                <BentoTile className="col-span-1 h-75">
                    <GitHubTile />
                </BentoTile>
                <BentoTile className="md:col-span-2 h-75">
                    <div className="bg-[#f3e5f5] w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Business App Preview</div>
                </BentoTile>
                <BentoTile className="md:col-span-2 h-75">
                    <div className="bg-white w-full h-full p-8 italic text-gray-600 dark:bg-[#0d1117]">Contact Footer Content</div>
                </BentoTile>
            </div>
        </main>
    );
}
