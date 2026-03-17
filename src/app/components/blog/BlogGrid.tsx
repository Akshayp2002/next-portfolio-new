"use client";

import BlogCard from "@/components/blog/BlogCard";
import { BlogPost } from "@/lib/contentful/blogs";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function BlogGrid({ items }: { items: BlogPost[] }) {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedBlog]);

  if (items.length === 0) {
    return (
      <div className="rounded-3xl bg-gray-100/70 dark:bg-gray-800/70 p-8 text-center text-sm text-gray-500 dark:text-gray-400">
        No blog posts found. Check your Contentful env values and content type.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {items.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onOpenDetails={setSelectedBlog} />
        ))}
      </div>

      {isMounted && selectedBlog
        ? createPortal(
            <div
              className="fixed inset-0 z-[1100] bg-black/50 backdrop-blur-sm p-4 flex items-center justify-center modal-backdrop-enter"
              onClick={() => setSelectedBlog(null)}
            >
              <div
                className="w-full max-w-4xl max-h-[88vh] overflow-y-auto hide-scrollbar rounded-4xl bg-white dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 modal-content-enter"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-t-4xl">
                  {selectedBlog.posterUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={selectedBlog.posterUrl}
                      alt={selectedBlog.headding || "Blog cover"}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setSelectedBlog(null)}
                    className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/60 text-white text-lg leading-none"
                    aria-label="Close blog details"
                  >
                    x
                  </button>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedBlog.headding || "Untitled"}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(selectedBlog.createdAt)}
                  </p>

                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">My Notes</h4>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 leading-6 whitespace-pre-wrap">
                      {selectedBlog.description?.trim() || selectedBlog.quickLook?.trim() || "No detailed description available."}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedBlog.tags.map((tag, index) => (
                      <span
                        key={`${tag.name || "tag"}-${index}`}
                        style={{ backgroundColor: tag.color || "#4B5563" }}
                        className="text-white text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        #{tag.name || "tag"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
