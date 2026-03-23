import Image from "next/image";
// components/tiles/home/IntroTile.tsx
export default function IntroTile() {
    return (
        <div className="flex flex-col justify-center h-full px-10 lg:px-16 bg-white dark:bg-[#0d1117] rounded-4xl dark:ring-2 dark:ring-gray-700">
            <div className="flex items-center gap-6 mb-2">
                {/* Placeholder for 3D Avatar Image */}
                <div className="relative w-24 h-24">
                    <Image src="/head-hand.png" alt="Akshay's Avatar" width={100} height={100} className="rounded-full" />
                </div>
                {/* <div className="bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm tracking-tight">
                    Good Afternoon!
                </div> */}
            </div>

            <h1 className="text-md font-bold text-gray-800 leading-tight">
                I'm{" "}
                <span className="relative inline-block whitespace-nowrap z-10">
                    <span className="relative z-20">Akshay</span>
                    <img src="/line-1.svg" alt="underline" className="absolute left-0 w-full top-[-16%] -z-10 pointer-events-none" />
                </span>
                , a Software developer from Kerala...
            </h1>
            <p className="mt-1 text-gray-500 text-base leading-relaxed max-w-[500px]">
                Building clean, efficient web solutions with PHP, Laravel & Tailwind CSS. I love solving problems through code and creating tools that matter.
            </p>
        </div>
    );
}