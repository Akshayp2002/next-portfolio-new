import Image from "next/image";
import Link from "next/link";

const ICON_CARDS = [
    { name: "Affine", src: "/tech/affine.svg", card: "w-24 h-24", icon: "w-15 h-15", pos: "top-[-2%] left-[46%]", rot: "-rotate-[13deg]", z: "z-30" },
    { name: "Splade", src: "/tech/splade.svg", card: "w-22 h-22", icon: "w-13 h-13", pos: "top-[6%] right-[-11%]", rot: "rotate-[24deg]", z: "z-20" },
    { name: "GitHub", src: "/tech/github.svg", card: "w-24 h-24", icon: "w-15 h-15", pos: "top-[20%] left-[24%]", rot: "-rotate-[16deg]", z: "z-30" },
    { name: "JavaScript", src: "/tech/js.svg", card: "w-24 h-24", icon: "w-15 h-15", pos: "top-[35%] right-[9%]", rot: "rotate-[20deg]", z: "z-20" },
    { name: "PHP", src: "/tech/php.svg", card: "w-26 h-22", icon: "w-17 h-10", pos: "top-[37%] left-[5%]", rot: "rotate-[10deg]", z: "z-20" },
    { name: "Tailwind", src: "/tech/tailwindcss.svg", card: "w-22 h-22", icon: "w-13 h-13", pos: "top-[52%] left-[39%]", rot: "rotate-[8deg]", z: "z-30" },
    { name: "Redis", src: "/tech/redis.svg", card: "w-22 h-22", icon: "w-13 h-13", pos: "top-[54%] right-[-12%]", rot: "rotate-[18deg]", z: "z-10" },
    { name: "Laravel", src: "/tech/laravel.svg", card: "w-24 h-24", icon: "w-15 h-15", pos: "top-[68%] left-[12%]", rot: "-rotate-[18deg]", z: "z-30" },
    { name: "Postman", src: "/tech/postman.svg", card: "w-22 h-22", icon: "w-13 h-13", pos: "top-[67%] right-[7%]", rot: "rotate-[10deg]", z: "z-20" },
    { name: "Ollama", src: "/tech/ollama.svg", card: "w-22 h-22", icon: "w-13 h-13", pos: "top-[82%] right-[28%]", rot: "-rotate-[9deg]", z: "z-20" },
];

export default function TechStackTile() {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-4xl bg-white dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700">
            <div
                className="absolute inset-0 bg-white bg-repeat opacity-80 dark:bg-[#0d1117] dark:bg-none dark:opacity-100"
                style={{ backgroundImage: "url('/Topographic.svg')", backgroundSize: "260px 260px" }}
            />

            {ICON_CARDS.map((item) => (
                <div
                    key={item.name}
                    className={`absolute ${item.pos} ${item.card} ${item.rot} ${item.z} rounded-[1.8rem] bg-white shadow-[0_10px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/5 flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]`}
                >
                    <div className={`relative ${item.icon} h-auto aspect-square`}>
                        <Image src={item.src} alt={item.name} fill className="object-contain" />
                    </div>
                </div>
            ))}

            <Link
                href="/tools"
                aria-label="Go to tools page"
                className="absolute bottom-0 left-0 m-4 z-40"
                onPointerDown={(event) => event.stopPropagation()}
                onMouseDown={(event) => event.stopPropagation()}
                onTouchStart={(event) => event.stopPropagation()}
            >
                <div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-center items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition duration-300 ease-in-out shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
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
            </Link>
        </div>
    );
}