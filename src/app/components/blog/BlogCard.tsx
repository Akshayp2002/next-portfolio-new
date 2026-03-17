import Link from "next/link";
import { BlogPost } from "@/lib/contentful/blogs";

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

type BlogCardProps = {
  blog: BlogPost;
  onOpenDetails: (blog: BlogPost) => void;
};

export default function BlogCard({ blog, onOpenDetails }: BlogCardProps) {
  const date = formatDate(blog.createdAt);

  return (
    <article
      className="group cursor-pointer bg-white dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 rounded-[30px] overflow-hidden transition-colors duration-300 flex flex-col h-full"
      onClick={() => onOpenDetails(blog)}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex-shrink-0">
        {blog.posterUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={blog.posterUrl}
            alt={blog.headding || "Blog cover"}
          />
        ) : null}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="space-y-2 flex-1">
          <h3 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2">
            {blog.headding || "Untitled"}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
            {blog.quickLook || ""}
          </p>

          <div className="flex flex-wrap gap-1 pt-1">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${tag.name || "tag"}-${index}`}
                style={{ backgroundColor: tag.color || "#4B5563" }}
                className="text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full opacity-90 hover:opacity-100"
              >
                {tag.name || "tag"}
              </span>
            ))}
            {blog.tags.length > 3 ? (
              <span className="text-gray-500 dark:text-gray-400 text-[10px] px-1.5 py-0.5">
                +{blog.tags.length - 3}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-300/40 dark:border-gray-700/40 mt-3 flex-shrink-0">
          <span className="text-[11px] text-gray-500 dark:text-gray-400">{date}</span>
          {blog.link ? (
            <Link
              href={`${blog.link}?ref=devakshay.vercel.app`}
              target="_blank"
              onClick={(event) => event.stopPropagation()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-[#0D1117] dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18.256 18.256" fill="none">
                <g transform="translate(5.363 5.325)">
                  <path d="M14.581,7.05,7.05,14.581" transform="translate(-7.05 -7.012)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M10,7l5.287.037.038,5.287" transform="translate(-7.756 -7)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
