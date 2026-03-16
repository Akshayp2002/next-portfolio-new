import Image from "next/image";
import Link from "next/link";

export default function BusinessPreviewTile() {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] bg-[#f4dc93] dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700">
            <div className="absolute -top-20 -right-16 w-[48%] aspect-square bg-white/45 rounded-full dark:bg-[#0d1117]" />
            <div className="absolute -bottom-24 left-[10%] w-[38%] h-[72%] bg-[#efbdd1] rounded-[50%] dark:bg-[#0d1117]" />

            <div className="absolute top-[18%] left-[17%] w-[68%] aspect-[16/9] -rotate-[31deg] rounded-[2.3rem] bg-[#f8f8f8] shadow-[0_22px_42px_rgba(15,23,42,0.18)] overflow-hidden">
                <Image
                    src="/projects/hinez.webp"
                    alt="Business app preview"
                    fill
                    className="object-contain"
                    quality={100}
                    unoptimized
                />
            </div>

            <Link
                href="/projects"
                aria-label="Go to projects page"
                className="absolute bottom-0 left-0 m-4 z-30"
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