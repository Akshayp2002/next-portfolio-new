"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BlogGrid from "@/components/blog/BlogGrid";
import { BlogPost } from "@/lib/contentful/blogs";

import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";

type Props = {
  initialItems?: BlogPost[];
  total?: number;
  itemsPerPage: number;
};

type BlogsApiResponse = {
  items: BlogPost[];
  total: number;
};

export default function BlogInfiniteList({ initialItems = [], total: initialTotal = 0, itemsPerPage }: Props) {
  const [items, setItems] = useState<BlogPost[]>(initialItems);
  const [total, setTotal] = useState(initialTotal);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(initialItems.length === 0);
  const [hasError, setHasError] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasMore = useMemo(() => items.length < total, [items.length, total]);

  const fetchBlogs = useCallback(async (pageNum: number) => {
    try {
      const response = await fetch(`/api/blogs?page=${pageNum}&limit=${itemsPerPage}`, {
        cache: "no-store",
      });
      const payload = (await response.json()) as BlogsApiResponse;
      
      if (pageNum === 1) {
        setItems(payload.items);
        setTotal(payload.total);
      } else {
        setItems((previous) => {
          const existingIds = new Set(previous.map((item) => item.id));
          const newItems = payload.items.filter((item) => !existingIds.has(item.id));
          return [...previous, ...newItems];
        });
      }
      setPage(pageNum);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
      setIsInitialLoading(false);
    }
  }, [itemsPerPage]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setHasError(false);
    await fetchBlogs(page + 1);
  }, [hasMore, isLoading, page, fetchBlogs]);

  useEffect(() => {
    if (initialItems.length === 0) {
      setIsInitialLoading(true);
      void fetchBlogs(1);
    }
  }, [initialItems.length, fetchBlogs]);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore || isInitialLoading) return;

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
  }, [hasMore, loadMore, isInitialLoading]);

  return (
    <>
      {isInitialLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {[...Array(itemsPerPage)].map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <BlogGrid items={items} />
      )}

      {isLoading && !isInitialLoading ? (
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

      {!hasMore && items.length > 0 && !isInitialLoading ? (
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          You reached the end.
        </div>
      ) : null}

      <div ref={sentinelRef} className="h-8 w-full" />
    </>
  );
}
