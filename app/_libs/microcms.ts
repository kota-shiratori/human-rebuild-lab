import "server-only";
import { createClient } from "microcms-js-sdk";
import type { BlogPost, BlogListResponse, Category, Tag } from "@/_types/blog";
import { getAuthorByKey } from "./author-data";
import { env } from "./env";

// microCMSからのレスポンス型（authorsはセレクトフィールドの文字列配列）
type MicroCMSBlogPost = Omit<BlogPost, "author"> & {
  authors?: string[];
};

type MicroCMSBlogListResponse = {
  contents: MicroCMSBlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
};

// microCMSのレスポンスをアプリ内の型に変換
function transformBlogPost(post: MicroCMSBlogPost): BlogPost {
  const authorKey = post.authors?.[0]; // セレクトフィールドの最初の値を取得
  const author = getAuthorByKey(authorKey);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { authors, ...rest } = post;
  return {
    ...rest,
    author,
  };
}

function transformBlogListResponse(response: MicroCMSBlogListResponse): BlogListResponse {
  return {
    ...response,
    contents: response.contents.map(transformBlogPost),
  };
}

// microCMSクライアント
if (!env.isMicroCMSConfigured) {
  throw new Error("microCMS環境変数が設定されていません。MICROCMS_SERVICE_DOMAINとMICROCMS_API_KEYを設定してください。");
}

const client = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});

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

  const response = await client.get<MicroCMSBlogListResponse>({
    endpoint: "blogs",
    queries: {
      limit,
      offset,
      filters: filters.length > 0 ? filters.join("[and]") : undefined,
    },
  });

  return transformBlogListResponse(response);
}

// 記事詳細を取得
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const response = await client.get<MicroCMSBlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  const post = response.contents[0];
  return post ? transformBlogPost(post) : null;
}

// 関連記事を取得
export async function getRelatedPosts(
  currentPost: BlogPost,
  limit: number = 3
): Promise<BlogPost[]> {
  const tagIds = (currentPost.tags ?? []).map((tag) => tag.id);
  const filters: string[] = [`id[not_equals]${currentPost.id}`];
  
  if (tagIds.length > 0) {
    filters.push(
      `(category[equals]${currentPost.category.id}[or]tags[contains]${tagIds.join(",")})`
    );
  } else {
    filters.push(`category[equals]${currentPost.category.id}`);
  }

  const response = await client.get<MicroCMSBlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: filters.join("[and]"),
      limit,
    },
  });

  return response.contents.map(transformBlogPost);
}

// カテゴリ一覧を取得
export async function getCategories(): Promise<Category[]> {
  const response = await client.get<{ contents: Category[] }>({
    endpoint: "categories",
  });

  return response.contents;
}

// タグ一覧を取得
export async function getTags(): Promise<Tag[]> {
  const response = await client.get<{ contents: Tag[] }>({
    endpoint: "tags",
  });

  return response.contents;
}

// 全記事のスラッグを取得（静的生成用）
export async function getAllBlogSlugs(): Promise<string[]> {
  const response = await client.get<MicroCMSBlogListResponse>({
    endpoint: "blogs",
    queries: {
      fields: "slug",
      limit: 100,
    },
  });

  return response.contents.map((post) => post.slug);
}
