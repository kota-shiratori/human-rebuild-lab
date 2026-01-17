import Link from "next/link";
import { getCategories } from "@/_libs/microcms";

// カテゴリーアイコンのマッピング
const categoryIcons: Record<string, React.ReactNode> = {
  habit: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  workout: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  learning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  "time-management": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  meditation: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

// デフォルトアイコン
const defaultIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

// カテゴリーの背景色
const categoryColors: Record<string, { bg: string; hover: string; text: string }> = {
  habit: { bg: "bg-emerald-50", hover: "hover:bg-emerald-100", text: "text-emerald-600" },
  workout: { bg: "bg-orange-50", hover: "hover:bg-orange-100", text: "text-orange-600" },
  learning: { bg: "bg-blue-50", hover: "hover:bg-blue-100", text: "text-blue-600" },
  "time-management": { bg: "bg-purple-50", hover: "hover:bg-purple-100", text: "text-purple-600" },
  meditation: { bg: "bg-pink-50", hover: "hover:bg-pink-100", text: "text-pink-600" },
};

const defaultColor = { bg: "bg-gray-50", hover: "hover:bg-gray-100", text: "text-gray-600" };

export default async function CategoryNav() {
  const categories = await getCategories();

  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-2">
            Categories
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black">
            カテゴリーから探す
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => {
            const colors = categoryColors[category.slug] || defaultColor;
            const icon = categoryIcons[category.slug] || defaultIcon;

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl ${colors.bg} ${colors.hover} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <span className={`${colors.text} transition-transform duration-300 group-hover:scale-110`}>
                  {icon}
                </span>
                <span className="font-bold text-brand-black text-center">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all duration-300"
          >
            すべての記事を見る
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
