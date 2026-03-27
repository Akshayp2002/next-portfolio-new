"use client";

import React from "react";

const BlogTile = () => {
  return (
    <div className="relative w-full h-full rounded-4xl bg-[#f7f7f7] dark:bg-zinc-900 border border-black/5 dark:border-white/5 dark:ring-2 dark:ring-gray-700 shadow-[0_18px_35px_rgba(0,0,0,0.08),0_3px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.85)] dark:shadow-[0_18px_35px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden group">
      {/* Content */}
      <div className="relative z-20 px-9 pt-8">
        <p className="text-[14px] leading-none text-[#3d3d3d] dark:text-zinc-400 font-normal tracking-[-0.01em]">
          Curated thoughts, experiments & discoveries.
        </p>

        <h2 className="mt-5 text-[32px] leading-none font-normal tracking-[-0.04em] text-black dark:text-white font-decorative ">
          Notes & explorations
        </h2>
      </div>

      {/* Decorative bottom arcs */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-20 pointer-events-none">
        <div className="absolute w-[520px] h-[520px] left-[-20px] bottom-[-355px] border-2 border-[#efefef] dark:border-zinc-800 rounded-full"></div>
        <div className="absolute w-[410px] h-[410px] left-[35px] bottom-[-300px] border-2 border-[#efefef] dark:border-zinc-800 rounded-full"></div>
        <div className="absolute w-[305px] h-[305px] left-[85px] bottom-[-248px] border-2 border-[#efefef] dark:border-zinc-800 rounded-full"></div>
      </div>

      {/* Left mail icon */}
      <div className="absolute z-30 left-[42px] bottom-[72px] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
        <div className="w-[52px] h-[52px] rounded-[16px] bg-white dark:bg-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center rotate-[-18deg]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="rotate-[18deg]">
            <path
              d="M4 7.5C4 6.67157 4.67157 6 5.5 6H18.5C19.3284 6 20 6.67157 20 7.5V16.5C20 17.3284 19.3284 18 18.5 18H5.5C4.67157 18 4 17.3284 4 16.5V7.5Z"
              stroke="currentColor"
              className="text-[#555555] dark:text-zinc-400"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M5 7L11.136 11.602C11.6692 12.0019 12.4028 12.0019 12.936 11.602L19 7"
              stroke="currentColor"
              className="text-[#555555] dark:text-zinc-400"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Center mic icon */}
      <div className="absolute z-30 left-[45%] bottom-[80px] transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2">
        <div className="w-[58px] h-[58px] rounded-full bg-[#c9f1ef] dark:bg-[#1a3a3a] shadow-[0_12px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] dark:shadow-[0_12px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 15.5C10.067 15.5 8.5 13.933 8.5 12V7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5V12C15.5 13.933 13.933 15.5 12 15.5Z"
              stroke="#00a9b4"
              strokeWidth="1.9"
            />
            <path
              d="M6.5 11.5V12C6.5 15.0376 8.96243 17.5 12 17.5C15.0376 17.5 17.5 15.0376 17.5 12V11.5"
              stroke="#00a9b4"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
            <path
              d="M12 17.5V20"
              stroke="#00a9b4"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Top-right globe icon (hidden on mobile) */}
      <div className="absolute z-30 md:right-[104px] right-[47px] top-[92px] transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1">
        <div className="w-[56px] h-[56px] rounded-full bg-white dark:bg-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.2" stroke="#f26a21" strokeWidth="1.9" />
            <path d="M3.8 12H20.2" stroke="#f26a21" strokeWidth="1.9" strokeLinecap="round" />
            <path d="M12 3.8C14.3 6.1 15.6 9.01 15.6 12C15.6 14.99 14.3 17.9 12 20.2" stroke="#f26a21" strokeWidth="1.9" strokeLinecap="round" />
            <path d="M12 3.8C9.7 6.1 8.4 9.01 8.4 12C8.4 14.99 9.7 17.9 12 20.2" stroke="#f26a21" strokeWidth="1.9" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Center-top-right Code Icon */}
      <div className="absolute z-30 right-[30%] top-[51px] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
        <div className="w-[48px] h-[48px] rounded-[14px] bg-white dark:bg-zinc-800 shadow-[0_8px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center rotate-[12deg]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 18L22 12L16 6" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 6L2 12L8 18" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Middle-left Terminal Icon */}
      <div className="absolute z-30 left-[67%] md:left-[25%] md:top-[120px] top-[187px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <div className="w-[46px] h-[46px] rounded-full bg-[#f0fdf4] dark:bg-[#064e3b] shadow-[0_8px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.85)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center rotate-[-10deg]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 17L10 11L4 5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19H20" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom-right calendar icon (hidden on mobile) */}
      <div className="absolute z-20 right-[110px] bottom-[48px] hidden sm:block transition-transform duration-300 group-hover:scale-110">
        <div className="w-[34px] h-[34px] rounded-full bg-white dark:bg-zinc-800 shadow-[0_6px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="14" rx="2.5" stroke="currentColor" className="text-[#666666] dark:text-zinc-400" strokeWidth="1.6" />
            <path d="M8 4V8" stroke="currentColor" className="text-[#666666] dark:text-zinc-400" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M16 4V8" stroke="currentColor" className="text-[#666666] dark:text-zinc-400" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M4 10H20" stroke="currentColor" className="text-[#666666] dark:text-zinc-400" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Expanding Read Blog Button (Bottom Left) matching Contact tile style */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/blog";
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        className="absolute bottom-0 left-0 m-4 z-50 group/btn border-none outline-none bg-transparent p-0 cursor-pointer"
      >
        <div className="bg-white dark:bg-zinc-800 text-black dark:text-white w-10 h-10 rounded-full flex justify-start items-center ring-2 ring-black/5 dark:ring-white/10 hover:ring-4 hover:ring-black/10 dark:hover:ring-white/20 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:w-[130px] shadow-sm">
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
          <span className="text-[13px] font-medium whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 delay-75 pr-4 font-decorative">
            Read Blog
          </span>
        </div>
      </button>
    </div>
  );
};

export default BlogTile;
