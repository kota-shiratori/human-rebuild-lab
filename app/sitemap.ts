import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/_libs/microcms";

const BASE_URL = "https://human-rebuild-lab.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/blog`,
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${BASE_URL}/coaching`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/about`,
      priority: 0.5,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/contact`,
      priority: 0.5,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/privacy`,
      priority: 0.5,
      changeFrequency: "monthly",
    },
  ];

  // 動的ブログ記事
  const blogResponse = await getBlogPosts({ limit: 100 });
  const blogPages: MetadataRoute.Sitemap = blogResponse.contents.map(
    (post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    })
  );

  return [...staticPages, ...blogPages];
}
