import { NextResponse } from "next/server";
import { getBlogsFromContentful } from "@/lib/contentful/blogs";

function parsePositiveInt(value: string | null, fallback: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.floor(parsed);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parsePositiveInt(searchParams.get("page"), 1);
    const limit = parsePositiveInt(searchParams.get("limit"), 6);

    const result = await getBlogsFromContentful(page, limit);
    return NextResponse.json({
      page,
      limit,
      total: result.total,
      items: result.items,
    });
  } catch {
    return NextResponse.json(
      { page: 1, limit: 6, total: 0, items: [] },
      { status: 500 }
    );
  }
}
