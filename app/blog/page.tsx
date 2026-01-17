import { Metadata } from "next";
import BlogCard from "@/_components/BlogCard";
import Pagination from "@/_components/Pagination";
import CtaBanner from "@/_components/CtaBanner";
import { getBlogPosts, getCategories } from "@/_libs/microcms";
import Link from "next/link";
import Button from "@/_components/Button";

// ISR: 1時間ごとに再検証
export const revalidate = 3600;

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
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-wrapper relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">記事一覧</span>
            </div>
            <h1 className="text-giant text-white mb-4">BLOG</h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              習慣化・筋トレ・学習・時間管理・瞑想に関する記事を配信しています。
              <br className="hidden md:block" />
              忙しい会社員のための実践的なアドバイス。
            </p>
            <div className="mt-8">
              <Button variant="white" href="/contact">
                お問い合わせはこちら
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - スティッキーフィルター */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="section-wrapper py-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-brand-gray-dark shrink-0 hidden sm:block">
              カテゴリー:
            </span>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full text-sm font-bold bg-brand-blue text-white shadow-md shadow-brand-blue/20 shrink-0"
              >
                すべて
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-brand-gray text-brand-black hover:bg-brand-blue hover:text-white transition-all duration-300 shrink-0"
                >
                  {category.name}
                </Link>
              ))}
            </div>
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
