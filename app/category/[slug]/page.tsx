import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getCategories } from "@/_libs/microcms";
import BlogCard from "@/_components/BlogCard";
import Pagination from "@/_components/Pagination";
import CtaBanner from "@/_components/CtaBanner";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return { title: "カテゴリが見つかりません" };
  }

  return {
    title: `${category.name}の記事一覧`,
    description: `${category.name}に関する記事一覧。習慣化のヒントを見つけましょう。`,
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const search = await searchParams;
  const currentPage = Number(search.page) || 1;
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  const [{ contents: posts, totalCount }, categories] = await Promise.all([
    getBlogPosts({ limit: POSTS_PER_PAGE, offset, category: slug }),
    getCategories(),
  ]);

  const currentCategory = categories.find((c) => c.slug === slug);
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  if (!currentCategory) {
    return (
      <section className="py-24">
        <div className="section-wrapper text-center">
          <h1 className="text-2xl font-bold text-brand-black">
            カテゴリが見つかりません
          </h1>
          <Link href="/blog" className="mt-4 text-brand-blue hover:underline">
            ブログ一覧に戻る
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <p className="text-white/80 text-sm font-medium mb-2">Category</p>
          <h1 className="text-giant text-white">{currentCategory.name}</h1>
          <p className="mt-4 text-lg text-white/90">
            {currentCategory.name}に関する記事一覧
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100">
        <div className="section-wrapper py-6">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-brand-gray text-brand-black hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
            >
              すべて
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.slug === slug
                    ? "bg-brand-blue text-white"
                    : "bg-brand-gray text-brand-black hover:bg-brand-blue-light hover:text-brand-blue"
                }`}
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
                  basePath={`/category/${slug}`}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-brand-gray-dark">
                このカテゴリにはまだ記事がありません。
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-block text-brand-blue hover:underline"
              >
                すべての記事を見る
              </Link>
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
