import { createClient } from "microcms-js-sdk";
import type { BlogPost, BlogListResponse, Category, Tag } from "@/_types/blog";
import {
  getDummyPosts,
  getDummyPostBySlug,
  getDummyRelatedPosts,
  dummyCategories,
  dummyTags,
} from "./dummy-data";

// microCMSクライアント（環境変数が設定されている場合のみ有効）
const client =
  process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY
    ? createClient({
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
      })
    : null;

// microCMSが設定されているかどうか
const isMicroCMSConfigured = !!client;

// 記事一覧を取得
export async function getBlogPosts(
  options: {
    limit?: number;
    offset?: number;
    category?: string; // カテゴリのslug
    tag?: string; // タグのslug
  } = {}
): Promise<BlogListResponse> {
  const { limit = 10, offset = 0, category, tag } = options;

  if (!isMicroCMSConfigured) {
    // ダミーデータを返す
    return getDummyPosts(options);
  }

  const filters: string[] = [];
  
  // カテゴリslugからIDを取得してフィルタリング
  if (category) {
    const categories = await getCategories();
    const categoryData = categories.find((c) => c.slug === category);
    if (categoryData) {
      filters.push(`category[equals]${categoryData.id}`);
    }
  }
  
  // タグslugからIDを取得してフィルタリング
  if (tag) {
    const tags = await getTags();
    const tagData = tags.find((t) => t.slug === tag);
    if (tagData) {
      filters.push(`tags[contains]${tagData.id}`);
    }
  }

  const response = await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      limit,
      offset,
      filters: filters.length > 0 ? filters.join("[and]") : undefined,
    },
  });

  return response;
}

// 記事詳細を取得
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  if (!isMicroCMSConfigured) {
    const post = getDummyPostBySlug(slug);
    return post ?? null;
  }

  const response = await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  return response.contents[0] ?? null;
}

// 関連記事を取得
export async function getRelatedPosts(
  currentPost: BlogPost,
  limit: number = 3
): Promise<BlogPost[]> {
  if (!isMicroCMSConfigured) {
    return getDummyRelatedPosts(currentPost, limit);
  }

  const tagIds = currentPost.tags?.map((tag) => tag.id) ?? [];
  const filters: string[] = [`id[not_equals]${currentPost.id}`];
  
  if (tagIds.length > 0) {
    filters.push(
      `(category[equals]${currentPost.category.id}[or]tags[contains]${tagIds.join(",")})`
    );
  } else {
    filters.push(`category[equals]${currentPost.category.id}`);
  }

  const response = await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: filters.join("[and]"),
      limit,
    },
  });

  return response.contents;
}

// カテゴリ一覧を取得
export async function getCategories(): Promise<Category[]> {
  if (!isMicroCMSConfigured) {
    return dummyCategories;
  }

  const response = await client.get<{ contents: Category[] }>({
    endpoint: "categories",
  });

  return response.contents;
}

// タグ一覧を取得
export async function getTags(): Promise<Tag[]> {
  if (!isMicroCMSConfigured) {
    return dummyTags;
  }

  const response = await client.get<{ contents: Tag[] }>({
    endpoint: "tags",
  });

  return response.contents;
}

// 全記事のスラッグを取得（静的生成用）
export async function getAllBlogSlugs(): Promise<string[]> {
  if (!isMicroCMSConfigured) {
    const { contents } = getDummyPosts({ limit: 100 });
    return contents.map((post) => post.slug);
  }

  const response = await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      fields: "slug",
      limit: 100,
    },
  });

  return response.contents.map((post) => post.slug);
}
