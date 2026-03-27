"use client";

export default function BlogCardSkeleton() {
  return (
    <div className="bg-white dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 rounded-[30px] overflow-hidden flex flex-col h-full animate-pulse">
      {/* Poster Image Skeleton */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-800 flex-shrink-0" />

      <div className="p-4 flex flex-col flex-1">
        <div className="space-y-3 flex-1">
          {/* Title Skeleton */}
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
          
          {/* Quick Look Skeleton */}
          <div className="pt-2 space-y-2">
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-full" />
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
          </div>

          {/* Tags Skeleton */}
          <div className="flex flex-wrap gap-1 pt-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-12" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-16" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-10" />
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-300/40 dark:border-gray-700/40 mt-3 flex-shrink-0">
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-16" />
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
