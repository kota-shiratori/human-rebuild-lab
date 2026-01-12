import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogSlugs,
} from "@/_libs/microcms";
import BlogCard from "@/_components/BlogCard";
import CtaBanner from "@/_components/CtaBanner";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "記事が見つかりません" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.thumbnail.url],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

// 目次を生成する関数（HTML形式に対応）
function generateTableOfContents(content: string) {
  // MicroCMSのリッチエディタから出力されるHTML形式の<h2>を解析
  const headingRegex = /<h2[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const id = match[1];
    const text = match[2];
    headings.push({ id, text });
  }

  return headings;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post, 3);
  const toc = generateTableOfContents(post.content);
  // MicroCMSのリッチエディタはHTMLを返すのでそのまま使用
  const htmlContent = post.content;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-brand-gray-dark mb-6">
              <Link href="/" className="hover:text-brand-blue">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-brand-blue">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/category/${post.category.slug}`}
                className="hover:text-brand-blue"
              >
                {post.category.name}
              </Link>
            </nav>

            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <Link
                href={`/category/${post.category.slug}`}
                className="px-3 py-1 text-sm font-semibold bg-brand-blue text-white rounded-full"
              >
                {post.category.name}
              </Link>
              <time className="text-sm text-brand-gray-dark">
                {formattedDate}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-brand-gray-dark mb-8">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tag/${tag.slug}`}
                    className="px-3 py-1 text-sm bg-brand-gray text-brand-gray-dark rounded-full hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Thumbnail */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={post.thumbnail.url}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
              {/* Main Content */}
              <article>
                {/* Table of Contents (Mobile) */}
                {toc.length > 0 && (
                  <div className="lg:hidden bg-brand-gray rounded-xl p-6 mb-8">
                    <h2 className="font-bold text-brand-black mb-4">目次</h2>
                    <nav>
                      <ul className="space-y-2">
                        {toc.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="text-brand-gray-dark hover:text-brand-blue transition-colors"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}

                {/* Article Content */}
                <div
                  className="prose prose-lg prose-brand max-w-none"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {/* Article CTA */}
                <div className="mt-12 pt-12 border-t border-gray-200">
                  <CtaBanner variant="template" />
                </div>
              </article>

              {/* Sidebar (Desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  {/* Table of Contents */}
                  {toc.length > 0 && (
                    <div className="bg-brand-gray rounded-xl p-6 mb-8">
                      <h2 className="font-bold text-brand-black mb-4">目次</h2>
                      <nav>
                        <ul className="space-y-2">
                          {toc.map((item) => (
                            <li key={item.id}>
                              <a
                                href={`#${item.id}`}
                                className="text-sm text-brand-gray-dark hover:text-brand-blue transition-colors"
                              >
                                {item.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  )}

                  {/* Coaching CTA */}
                  <div className="bg-brand-blue rounded-xl p-6 text-white">
                    <p className="text-sm font-medium text-white/80 mb-2">
                      4週間プログラム
                    </p>
                    <h3 className="font-bold mb-3">習慣リビルド・コーチング</h3>
                    <p className="text-sm text-white/90 mb-4">
                      マンツーマンで習慣化をサポートします。
                    </p>
                    <Link
                      href="/coaching"
                      className="block text-center bg-white text-brand-blue font-semibold rounded-full py-2 hover:bg-brand-blue-light transition-colors"
                    >
                      詳しく見る
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-gray py-16 md:py-24">
          <div className="section-wrapper">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">
              関連記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper max-w-3xl">
          <CtaBanner variant="coaching" />
        </div>
      </section>
    </>
  );
}
