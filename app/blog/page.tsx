import { Metadata } from "next";
import BlogCard from "@/_components/BlogCard";
import Pagination from "@/_components/Pagination";
import CtaBanner from "@/_components/CtaBanner";
import { getBlogPosts, getCategories } from "@/_libs/microcms";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "習慣化・筋トレ・学習・時間管理・瞑想に関する記事を配信しています。忙しい会社員のための実践的なアドバイス。",
};

const POSTS_PER_PAGE = 9;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  const [{ contents: posts, totalCount }, categories] = await Promise.all([
    getBlogPosts({ limit: POSTS_PER_PAGE, offset }),
    getCategories(),
  ]);

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <h1 className="text-giant text-white">BLOG</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            習慣化・筋トレ・学習・時間管理・瞑想に関する記事を配信しています。
            忙しい会社員のための実践的なアドバイス。
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100">
        <div className="section-wrapper py-6">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-brand-blue text-white"
            >
              すべて
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-brand-gray text-brand-black hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="section-wrapper">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  basePath="/blog"
                />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-brand-gray-dark">
                まだ記事がありません。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="section-wrapper">
          <CtaBanner variant="template" />
        </div>
      </section>
    </>
  );
}
