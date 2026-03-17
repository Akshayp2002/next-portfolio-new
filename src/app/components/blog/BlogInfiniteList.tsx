"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BlogGrid from "@/components/blog/BlogGrid";
import { BlogPost } from "@/lib/contentful/blogs";

type Props = {
  initialItems: BlogPost[];
  total: number;
  itemsPerPage: number;
};

type BlogsApiResponse = {
  items: BlogPost[];
  total: number;
};

export default function BlogInfiniteList({ initialItems, total, itemsPerPage }: Props) {
  const [items, setItems] = useState<BlogPost[]>(initialItems);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasMore = useMemo(() => items.length < total, [items.length, total]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setHasError(false);

    const nextPage = page + 1;
    try {
      const response = await fetch(`/api/blogs?page=${nextPage}&limit=${itemsPerPage}`, {
        cache: "no-store",
      });
      const payload = (await response.json()) as BlogsApiResponse;

      setItems((previous) => {
        const existingIds = new Set(previous.map((item) => item.id));
        const newItems = payload.items.filter((item) => !existingIds.has(item.id));
        return [...previous, ...newItems];
      });
      setPage(nextPage);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, isLoading, itemsPerPage, page]);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          void loadMore();
        }
      },
      {
        rootMargin: "180px 0px",
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      <BlogGrid items={items} />

      {isLoading ? (
        <div className="mt-8 flex items-center justify-center">
          <div className="rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
            Loading more posts...
          </div>
        </div>
      ) : null}

      {hasError ? (
        <div className="mt-6 text-center text-sm text-red-500">
          Could not load more posts. Scroll again to retry.
        </div>
      ) : null}

      {!hasMore && items.length > 0 ? (
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          You reached the end.
        </div>
      ) : null}

      <div ref={sentinelRef} className="h-8 w-full" />
    </>
  );
}
