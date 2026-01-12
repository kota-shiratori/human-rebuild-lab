import Image from "next/image";
import Link from "next/link";
import Logo from "@/_components/Logo";
import Button from "@/_components/Button";
import BlogCard from "@/_components/BlogCard";
import CtaBanner from "@/_components/CtaBanner";
import { getBlogPosts } from "@/_libs/microcms";

export default async function Home() {
  const { contents: latestPosts } = await getBlogPosts({ limit: 6 });

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="flex items-center bg-white relative overflow-hidden">
        <div className="section-wrapper w-full pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 lg:pr-8">
              <p className="text-sm md:text-base font-medium text-brand-gray-dark tracking-wide mb-6">
                psychology to change yourself !!
              </p>
              
              <h1 className="text-hero text-brand-black leading-tight">
                「脳を入れ替えられる場所」
                <br />
                それが
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-blue my-4 tracking-tight">
                HUMAN REBUILD LAB
              </p>
              <p className="text-hero text-brand-black mb-10">
                が魅せる未来
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/coaching">
                  Join the club
                </Button>
                <Button variant="secondary" href="/blog">
                  See what&apos;s in store
                </Button>
              </div>
            </div>

            {/* Right: Logo - BIG IMPACT */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:-mr-12">
              <div className="w-[280px] h-[336px] md:w-[400px] md:h-[480px] lg:w-[500px] lg:h-[600px] xl:w-[580px] xl:h-[696px] relative">
                <Image
                  src="/images/logo.jpg"
                  alt="HUMAN REBUILD LAB"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLUE SECTION: STORIES ARE POWERFUL ===== */}
      <section className="bg-brand-blue py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-5">
              <div className="image-wrapper aspect-[3/4]">
                <Image
                  src="/images/hero-reading.svg"
                  alt="Person reading a book"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:col-span-7 text-white">
              <h2 className="text-display leading-[0.85] mb-8">
                STORIES
                <br />
                ARE
                <br />
                POWERFUL
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
                The Media Club is where creativity meets storytelling through
                photography, film, podcasts, and digital design.
              </p>
            </div>
          </div>
        </div>

        {/* Corner Logo */}
        <div className="hidden md:block absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-90">
          <Logo size="md" />
        </div>
      </section>

      {/* ===== WHITE SECTION: TELL STORIES THAT MATTER ===== */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text (reversed order for alternating layout) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p className="text-sm md:text-base font-medium text-brand-gray-dark tracking-wide mb-6">
                Change minds, change lives
              </p>
              <h2 className="text-giant text-brand-black mb-10 leading-[0.9]">
                TELL STORIES
                <br />
                THAT MATTER
              </h2>
              <Button variant="primary" href="/blog">
                Learn more
              </Button>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="image-wrapper aspect-[4/5]">
                <Image
                  src="/images/hero-books.svg"
                  alt="Person holding books"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST POSTS SECTION ===== */}
      <section className="bg-brand-gray py-24 md:py-32">
        <div className="section-wrapper">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-semibold text-brand-blue tracking-wide uppercase mb-3">
                Latest Articles
              </p>
              <h2 className="text-headline text-brand-black">
                最新記事
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-4 transition-all duration-300 group"
            >
              すべての記事を見る
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-white py-24 md:py-32">
        <div className="section-wrapper-narrow">
          <CtaBanner variant="both" />
        </div>
      </section>

      {/* ===== LAB CREW SIGNUP SECTION ===== */}
      <section className="bg-brand-blue py-24 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="gradient-blur bg-brand-blue-dark bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30" />
        
        <div className="section-wrapper relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left: Info */}
            <div className="text-white">
              <div className="mb-10">
                <Logo size="lg" />
              </div>
              
              <h2 className="text-display leading-[0.85] mb-8">
                LAB CREW
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 max-w-md">
                Fill out the form and we&apos;ll reach out to confirm your slot.
              </p>
              
              <p className="text-lg text-white/70 mb-8">
                Only 50 slots are available.
              </p>
              
              <p className="text-2xl font-bold">
                See you soon!
              </p>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-black mb-3"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="山田 太郎"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-black mb-3"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-brand-black mb-4">
                    What are you most interested in?
                  </p>
                  <div className="space-y-4">
                    {["Workshops", "Club projects", "Guest speaker sessions"].map(
                      (option) => (
                        <label
                          key={option}
                          className="flex items-center gap-4 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            name="interests"
                            value={option.toLowerCase().replace(" ", "-")}
                          />
                          <span className="text-brand-black group-hover:text-brand-blue transition-colors">
                            {option}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="accessibility"
                    className="block text-sm font-semibold text-brand-black mb-3"
                  >
                    Any accessibility needs?
                  </label>
                  <textarea
                    id="accessibility"
                    name="accessibility"
                    rows={3}
                    placeholder="ご要望があればご記入ください"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full text-lg">
                  Join the club
                </Button>

                <p className="text-xs text-center text-brand-gray-dark leading-relaxed">
                  ご入力いただいた情報は厳重に管理いたします。
                  <br />
                  パスワードは絶対に入力しないでください。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
