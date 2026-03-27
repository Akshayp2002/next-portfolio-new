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
                <h2 className="text-[25px] font-semibold font-decorative tracking-[-0.02em] text-[#1e1e1e] dark:text-white leading-tight">
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
                    <span className="text-muted text-[13px] whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 delay-75 pr-4 font-decorative">
                        Contact Me
                    </span>
                </div>
            </button>

            {/* Visual (Bigger 3D Envelope + Cards) Shifted to the right */}
            <div className="absolute inset-0 top-[110px] pointer-events-none flex items-end justify-end pr-[2%] sm:pr-[8%]">

                {/* Main Envelope Wrapper, gentle lift on hover only */}
                <div className="relative bottom-4 w-[320px] h-[190px] origin-bottom sm:scale-100 scale-90 flex justify-center flex-col items-center">
                    
                    {/* ENVELOPE BACK INTERIOR */}
                    <div className="absolute bottom-0 w-[320px] h-[180px] bg-[#f0f0f0] dark:bg-[#0d0d0d] rounded-b-[24px] shadow-[inset_0_15px_30px_rgba(0,0,0,0.02)] overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-[80%] bg-gradient-to-b from-black/[0.05] to-transparent dark:from-black/70"></div>
                        
                        {/* THE BACK FLAP TRIANGLE (Behiend cards) - Taller and more visible */}
                        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#fdfdfd] dark:bg-[#1a1a1a] rotate-45 rounded-[14px] border border-black/5 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.06)]"></div>
                    </div>

                    {/* MAIL CARDS */}
                    
                    {/* Purple Card (Back) */}
                    <div className="absolute left-[35px] bottom-[70px] z-10 h-[130px] w-[170px] -rotate-[8deg] rounded-[18px] bg-[#6358ff] px-4 py-3.5 text-white shadow-[0_8px_20px_rgba(99,88,255,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[15px] group-hover:-translate-x-3 group-hover:-rotate-[10deg]">
                        <div className="flex items-center justify-between text-[11px] text-white/90 font-medium tracking-tight">
                            <span>Inbox</span>
                            <span className="text-[12px] opacity-80">✦</span>
                        </div>
                        <div className="absolute bottom-3 left-4">
                            <div className="text-[18px] font-semibold leading-none tracking-tight">New Message</div>
                        </div>
                    </div>

                    {/* Orange Card (Middle) */}
                    <div className="absolute left-[80px] bottom-[95px] z-20 h-[140px] w-[185px] rotate-[4deg] rounded-[18px] bg-[#ff6c3e] px-4 py-3.5 text-white shadow-[0_12px_25px_rgba(255,108,62,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[25px] group-hover:-translate-x-1 group-hover:rotate-[6deg]">
                        <div className="flex items-center justify-between text-[11px] text-white/90 font-medium tracking-tight">
                            <span>Reach Out</span>
                            <span className="text-[14px] opacity-80 italic">✦</span>
                        </div>
                        <div className="absolute bottom-3 left-4">
                            <div className="text-[20px] font-semibold leading-none tracking-tight">Collaboration</div>
                        </div>
                    </div>

                    {/* White Card (Front) */}
                    <div className="absolute right-[25px] bottom-[65px] z-30 h-[132px] w-[170px] rotate-[10deg] rounded-[18px] bg-white dark:bg-[#fcfcfc] px-4 py-3.5 text-zinc-800 shadow-[0_12px_25px_rgba(0,0,0,0.08)] border border-black/5 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[15px] group-hover:translate-x-3 group-hover:rotate-[12deg]">
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 font-medium tracking-tight">
                            <span>Say Hi!</span>
                            <div className="flex -space-x-1.5 opacity-60">
                                <span className="h-3.5 w-3.5 rounded-full bg-zinc-800/90 z-10"></span>
                                <span className="h-3.5 w-3.5 rounded-full bg-zinc-400/80"></span>
                            </div>
                        </div>
                        <div className="absolute bottom-3 left-4">
                            <div className="text-[20px] font-bold leading-none text-zinc-800 tracking-tight">Hi! ✦</div>
                        </div>
                    </div>

                    {/* ENVELOPE FRONT FLAPS (Z-40) */}
                    <div className="absolute bottom-0 w-[320px] h-[180px] z-40 pointer-events-none">
                        <div className="relative w-full h-[180px] rounded-b-[24px] shadow-xl overflow-hidden">
                            
                            {/* Left pointed flap */}
                            <div 
                                className="absolute left-[-160px] top-[5px] w-[240px] h-[280px] rotate-45 rounded-[36px] bg-[#f9f9f9] dark:bg-[#1e1e1e] shadow-[0_0_15px_rgba(0,0,0,0.05)] border-t border-r border-black/5 dark:border-white/5" 
                            ></div>
                            
                            {/* Right pointed flap */}
                            <div 
                                className="absolute right-[-160px] top-[5px] w-[240px] h-[280px] -rotate-45 rounded-[36px] bg-[#fdfdfd] dark:bg-[#222222] shadow-[0_0_15px_rgba(0,0,0,0.05)] border-t border-l border-black/5 dark:border-white/5" 
                            ></div>
                            
                            {/* Bottom angled flap overlapping left & right flaps */}
                            <div 
                                className="absolute bottom-[-277px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rotate-45 rounded-[17px] bg-white dark:bg-[#252525] border-t border-l border-black/[0.03] dark:border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.1)]" 
                            ></div>

                        </div>
                    </div>

                    {/* SIDE SHADOWS (No bottom shadow) */}
                    {/* Left Shadow */}
                    <div className="absolute -left-14 -bottom-6 w-[120px] h-[160px] bg-black/[0.05] dark:bg-black/40 blur-[50px] rounded-[50%] z-0 rotate-[10deg]"></div>
                    {/* Right Shadow */}
                    <div className="absolute -right-14 -bottom-6 w-[120px] h-[160px] bg-black/[0.05] dark:bg-black/40 blur-[50px] rounded-[50%] z-0 -rotate-[10deg]"></div>

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
