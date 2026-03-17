import BlogInfiniteList from "@/components/blog/BlogInfiniteList";
import { getBlogsFromContentful } from "@/lib/contentful/blogs";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const itemsPerPage = 6;

  const { items, total } = await getBlogsFromContentful(1, itemsPerPage);

  return (
    <main className="min-h-screen py-5 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        <BlogInfiniteList initialItems={items} total={total} itemsPerPage={itemsPerPage} />
      </div>
    </main>
  );
}
