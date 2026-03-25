import React, { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function ContactTile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div 
            className="group block w-full h-full rounded-4xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/5 dark:ring-2 dark:ring-gray-700 p-6 sm:p-8 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
            {/* Header */}
            <div className="relative z-50">
                <h2 className="text-[25px] font-semibold tracking-[-0.02em] text-[#1e1e1e] dark:text-white leading-tight">
                    Let's Connect
                </h2>
                <p className="mt-1.5 max-w-[280px] text-[15px] leading-relaxed text-[#8a8a8a] dark:text-zinc-400">
                    Reach out for collaborations.
                </p>
            </div>

            {/* Expanding Contact Button (Bottom Left) exactly matching GitHub tile */}
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute bottom-0 left-0 m-4 z-50 group/btn border-none outline-none bg-transparent p-0 cursor-pointer"
            >
                <div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-start items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:w-[130px]">
                    {/* Icon part (always w-10 centered) */}
                    <div className="min-w-[40px] h-full flex justify-center items-center">
                        <svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256">
                            <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
                                <path id="Path_10" data-name="Path 10" d="M14.581,7.05,7.05,14.581"
                                    transform="translate(-7.05 -7.012)" fill="none" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5"></path>
                                <path id="Path_11" data-name="Path 11" d="M10,7l5.287.037.038,5.287"
                                    transform="translate(-7.756 -7)" fill="none" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5"></path>
                            </g>
                            <path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none"></path>
                        </svg>
                    </div>
                    {/* Text part (appears on hover) */}
                    <span className="text-muted text-[13px] whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 delay-75 pr-4">
                        Contact Me
                    </span>
                </div>
            </button>

            {/* Visual (Bigger 3D Envelope + Cards) Shifted to the right */}
            <div className="absolute inset-0 top-[110px] pointer-events-none flex items-end justify-end pr-[2%] sm:pr-[8%]">

                {/* Main Envelope Wrapper, gentle lift on hover only */}
                <div className="relative bottom-4 w-[320px] h-[190px] origin-bottom sm:scale-100 scale-90 flex justify-center flex-col items-center">
                    
                    {/* ENVELOPE BACK INTERIOR */}
                    <div className="absolute bottom-0 w-[320px] h-[170px] bg-gradient-to-b from-[#e1e1e1] to-[#ebebeb] dark:from-zinc-900 dark:to-zinc-950 rounded-b-[24px] shadow-[inset_0_15px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-black/[0.04] to-transparent dark:from-black/40"></div>
                    </div>

                    {/* MAIL CARDS */}
                    
                    {/* Purple / Blue Card (Back) */}
                    <div className="absolute left-[20px] bottom-[80px] z-10 h-[115px] w-[160px] -rotate-[6deg] rounded-[16px] bg-gradient-to-br from-[#6f5ef5] to-[#5a48ea] px-4 py-3 text-white shadow-[0_5px_15px_rgba(111,94,245,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[15px] group-hover:-translate-x-3 group-hover:-rotate-[10deg]">
                        <div className="flex items-center justify-between text-[11px] text-white/80 font-medium tracking-wide">
                            <span>Inbox</span>
                            <span>✦</span>
                        </div>
                        <div className="absolute bottom-3 left-4">
                            <div className="text-[12px] text-white/70 mb-0.5">Contact</div>
                            <div className="text-[20px] font-semibold leading-none tracking-tight">Let’s talk</div>
                        </div>
                    </div>

                    {/* Orange Card (Middle / Front-ish) */}
                    <div className="absolute left-[80px] bottom-[100px] z-20 h-[125px] w-[180px] rotate-[2deg] rounded-[16px] bg-gradient-to-br from-[#ff6e40] to-[#f45520] px-4 py-3 text-white shadow-[0_10px_20px_rgba(255,110,64,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[25px] group-hover:-translate-x-1 group-hover:rotate-[4deg]">
                        <div className="flex items-center justify-between text-[11px] text-white/80 font-medium tracking-wide border-b border-white/10 pb-1 mb-2">
                            <span>Email</span>
                            <span className="font-bold tracking-tighter">Inbox</span>
                        </div>
                        <div className="absolute bottom-3 left-4">
                            <div className="text-[12px] text-white/80 mb-0.5 font-medium">devakshay.app</div>
                            <div className="text-[26px] font-semibold leading-none tracking-tight">hello@</div>
                        </div>
                    </div>

                    {/* White Card (Front / Right) */}
                    <div className="absolute right-[25px] bottom-[75px] z-30 h-[115px] w-[160px] rotate-[10deg] rounded-[16px] bg-white dark:bg-[#fcfcfc] px-4 py-3 text-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.18)] border border-black/5 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[15px] group-hover:translate-x-3 group-hover:rotate-[15deg]">
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 font-medium tracking-wide">
                            <span>Say Hi</span>
                            <div className="flex -space-x-1">
                                <span className="h-3 w-3 rounded-full bg-zinc-800/80 z-10"></span>
                                <span className="h-3 w-3 rounded-full bg-zinc-400/80 mixed-blend-multiply"></span>
                            </div>
                        </div>
                        <div className="absolute bottom-3 left-4">
                            <div className="text-[12px] text-zinc-500 mb-0.5">Reply ~24h</div>
                            <div className="text-[20px] font-semibold leading-none text-zinc-800 tracking-tight">Contact</div>
                        </div>
                    </div>

                    {/* ENVELOPE FRONT FLAPS (Z-40) */}
                    <div className="absolute bottom-0 w-[320px] h-[170px] z-40 pointer-events-none drop-shadow-[0_-8px_20px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_-8px_15px_rgba(0,0,0,0.4)]">
                        <div className="relative w-full h-[170px] rounded-b-[24px] overflow-hidden shadow-[0_15px_25px_-5px_rgba(0,0,0,0.12),0_8px_10px_-6px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.4),0_8px_10px_-6px_rgba(0,0,0,0.2)]">
                            
                            {/* Left pointed flap */}
                            <div 
                                className="absolute left-[-110px] top-[-30px] w-[240px] h-[240px] rotate-45 rounded-[36px] bg-gradient-to-br from-[#fdfdfd] to-[#f4f4f4] dark:from-zinc-800 dark:to-zinc-900 shadow-[5px_-5px_15px_rgba(0,0,0,0.05)] border-t border-r border-black/5 dark:border-white/5" 
                            ></div>
                            
                            {/* Right pointed flap */}
                            <div 
                                className="absolute right-[-110px] top-[-30px] w-[240px] h-[240px] -rotate-45 rounded-[36px] bg-gradient-to-bl from-[#f2f2f2] to-[#e8e8e8] dark:from-zinc-800 dark:to-zinc-900 shadow-[-5px_-5px_15px_rgba(0,0,0,0.05)] border-t border-l border-black/5 dark:border-white/5" 
                            ></div>
                            
                            {/* Bottom angled flap overlapping left & right flaps */}
                            <div 
                                className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rotate-45 rounded-[46px] bg-gradient-to-t from-white to-[#fbfbfb] dark:from-zinc-900 dark:to-zinc-800 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_20px_rgba(0,0,0,0.3)] border-t border-l border-black/[0.03] dark:border-white/5" 
                            ></div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Portal to the Contact Modal */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}
