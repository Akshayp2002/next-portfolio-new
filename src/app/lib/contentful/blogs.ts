import { createClient } from "contentful";

export type BlogTag = {
  name?: string;
  color?: string;
};

export type BlogPost = {
  id: string;
  createdAt?: string;
  posterUrl?: string;
  headding?: string;
  quickLook?: string;
  description?: string;
  tags: BlogTag[];
  link?: string;
};

type BlogResult = {
  total: number;
  items: BlogPost[];
};

function normalizeAssetUrl(url?: string) {
  if (!url) return undefined;
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

export async function getBlogsFromContentful(page: number, limit: number): Promise<BlogResult> {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
  const contentType = process.env.CONTENTFUL_BLOG_CONTENT_TYPE || "blog";

  if (!spaceId || !accessToken) {
    return { total: 0, items: [] };
  }

  const skip = (page - 1) * limit;
  const client = createClient({
    space: spaceId,
    accessToken,
    environment,
  });

  let response: any;
  try {
    response = await client.getEntries({
      content_type: contentType,
      order: ["-sys.createdAt"],
      limit,
      skip,
      include: 2,
    });
  } catch {
    return { total: 0, items: [] };
  }

  const items = (response.items || []).map((item: any) => {
    const poster = item.fields?.poster;
    const posterUrl = normalizeAssetUrl(poster?.fields?.file?.url);

    return {
      id: item.sys?.id || `${item.sys?.createdAt || "entry"}`,
      createdAt: item.sys?.createdAt,
      posterUrl,
      headding: item.fields?.headding,
      quickLook: item.fields?.quickLook,
      description:
        item.fields?.description ||
        item.fields?.decription ||
        item.fields?.discription ||
        undefined,
      tags: item.fields?.tags || [],
      link: typeof item.fields?.link === "string" ? item.fields.link : undefined,
    } satisfies BlogPost;
  });

  return {
    total: response.total || 0,
    items,
  };
}
