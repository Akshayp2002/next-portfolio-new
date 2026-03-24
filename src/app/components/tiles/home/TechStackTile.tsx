import Image from "next/image";
import Link from "next/link";

const GEAR1_ICONS = [
    { name: "Laravel", src: "/tech/laravel.svg" },
    { name: "PHP", src: "/tech/php.svg" },
    { name: "MySQL", src: "/tech/mysql.svg" },
    { name: "Redis", src: "/tech/redis.svg" },
    { name: "AWS", src: "/tech/aws.svg" },
    { name: "Linux", src: "/tech/linux.svg" },
    { name: "Docker", src: "/tech/docker.svg" },
    { name: "Postman", src: "/tech/postman.svg" },
    { name: "Ubuntu", src: "/tech/ubuntu.svg" },
];

const GEAR2_ICONS = [
    { name: "Next.js", src: "/tech/nextjs2.svg" },
    { name: "TypeScript", src: "/tech/typescript.svg" },
    { name: "JavaScript", src: "/tech/js.svg" },
    { name: "Tailwind", src: "/tech/tailwindcss.svg" },
    { name: "Livewire", src: "/tech/Livewire.svg" },
    { name: "Splade", src: "/tech/splade.svg" },
    { name: "GitHub", src: "/tech/github.svg" },
    { name: "Figma", src: "/tech/figma.svg" },
    { name: "VS Code", src: "/tech/vscode.svg" },
];

export default function TechStackTile() {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-4xl bg-[#fdfdfd] dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center pointer-events-none">
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes gear-tick {
                    0%, 10% { transform: rotate(0deg); }
                    11.11%, 21.11% { transform: rotate(40deg); }
                    22.22%, 32.22% { transform: rotate(80deg); }
                    33.33%, 43.33% { transform: rotate(120deg); }
                    44.44%, 54.44% { transform: rotate(160deg); }
                    55.55%, 65.55% { transform: rotate(200deg); }
                    66.66%, 76.66% { transform: rotate(240deg); }
                    77.77%, 87.77% { transform: rotate(280deg); }
                    88.88%, 98.88% { transform: rotate(320deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes gear-tick-reverse {
                    0%, 10% { transform: rotate(0deg); }
                    11.11%, 21.11% { transform: rotate(-40deg); }
                    22.22%, 32.22% { transform: rotate(-80deg); }
                    33.33%, 43.33% { transform: rotate(-120deg); }
                    44.44%, 54.44% { transform: rotate(-160deg); }
                    55.55%, 65.55% { transform: rotate(-200deg); }
                    66.66%, 76.66% { transform: rotate(-240deg); }
                    77.77%, 87.77% { transform: rotate(-280deg); }
                    88.88%, 98.88% { transform: rotate(-320deg); }
                    100% { transform: rotate(-360deg); }
                }
            `}} />

            {/* Top Right Gear Wheel - Centered perfectly on the right edge, slightly down */}
            <div className="absolute top-[25%] right-0 translate-x-[50%] -translate-y-[50%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]">
                {/* The ticking ring */}
                <div className="relative w-full h-full" style={{ animation: "gear-tick 17s cubic-bezier(0.34, 1.56, 0.64, 1) infinite" }}>
                    {GEAR1_ICONS.map((item, i) => {
                        const angle = (360 / GEAR1_ICONS.length) * i;
                        return (
                            <div
                                key={item.name}
                                className="absolute top-1/2 left-1/2 -ml-[35px] -mt-[35px] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
                                style={{ transform: `rotate(${angle}deg) translateY(-160px)` }}
                            >
                                {/* Counter-tick wrapper to carefully undo the parent's dynamic rotation completely */}
                                <div className="w-full h-full" style={{ animation: "gear-tick-reverse 17s cubic-bezier(0.34, 1.56, 0.64, 1) infinite" }}>
                                    {/* Static correction wrapper to exactly undo the static initial starting angle */}
                                    <div 
                                      className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-[#111821] shadow-[0_10px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.4)] border border-black/5 dark:border-white/5 rounded-[20px] pointer-events-auto transition-transform duration-300 hover:scale-110"
                                      style={{ transform: `rotate(-${angle}deg)` }}
                                      title={item.name}
                                    >
                                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                            <Image src={item.src} alt={item.name} fill className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Left Gear Wheel - Centered perfectly on the left edge, slightly up */}
            <div className="absolute bottom-[25%] left-0 -translate-x-[50%] translate-y-[50%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]">
                <div className="relative w-full h-full" style={{ animation: "gear-tick-reverse 17s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s infinite backwards" }}>
                    {GEAR2_ICONS.map((item, i) => {
                        const angleOffset = (360 / GEAR2_ICONS.length) / 2;
                        const angle = (360 / GEAR2_ICONS.length) * i + angleOffset;
                        return (
                            <div
                                key={item.name}
                                className="absolute top-1/2 left-1/2 -ml-[35px] -mt-[35px] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
                                style={{ transform: `rotate(${angle}deg) translateY(-160px)` }}
                            >
                                {/* Counter-tick forward direction wrapper perfectly battling parent's reverse tick */}
                                <div className="w-full h-full" style={{ animation: "gear-tick 17s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s infinite backwards" }}>
                                    {/* Static correction wrapper exactly zeroing out initial angle */}
                                    <div 
                                      className="w-full h-full flex items-center justify-center bg-white dark:bg-[#111821] shadow-[0_10px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.4)] border border-black/5 dark:border-white/5 rounded-[20px] pointer-events-auto transition-transform duration-300 hover:scale-110"
                                      style={{ transform: `rotate(-${angle}deg)` }}
                                      title={item.name}
                                    >
                                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                            <Image src={item.src} alt={item.name} fill className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Redirect Button */}
            <Link
                href="/tools"
                aria-label="Go to tools page"
                className="absolute bottom-0 left-0 m-4 z-50 pointer-events-auto block outline-none group/btn"
                onPointerDown={(event) => event.stopPropagation()}
                onMouseDown={(event) => event.stopPropagation()}
                onTouchStart={(event) => event.stopPropagation()}
            >
                <div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-start items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:w-[125px] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                    <div className="min-w-[40px] h-full flex justify-center items-center">
                        <svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256">
                            <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
                                <path
                                    id="Path_10"
                                    data-name="Path 10"
                                    d="M14.581,7.05,7.05,14.581"
                                    transform="translate(-7.05 -7.012)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <path
                                    id="Path_11"
                                    data-name="Path 11"
                                    d="M10,7l5.287.037.038,5.287"
                                    transform="translate(-7.756 -7)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </g>
                            <path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none" />
                        </svg>
                    </div>
                    <span className="font-semibold text-[13px] whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 delay-75 pr-4">
                        My Tools
                    </span>
                </div>
            </Link>
        </div>
    );
}