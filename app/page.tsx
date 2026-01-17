import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/_components/Logo";
import Button from "@/_components/Button";
import CtaBanner from "@/_components/CtaBanner";
import LatestPosts from "@/_components/LatestPosts";
import PostsSkeleton from "@/_components/PostsSkeleton";
import CategoryNav from "@/_components/CategoryNav";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION - ブログメディアらしいデザイン ===== */}
      <section className="relative bg-gradient-to-b from-brand-blue-light via-white to-white overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/3 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-wrapper relative py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content - 日本語メイン */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-blue">
                  習慣化で人生を変える
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black leading-tight mb-6">
                <span className="text-brand-blue">脳</span>を入れ替える
                <br />
                <span className="relative">
                  習慣メディア
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-blue/30" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-gray-dark mb-8 leading-relaxed max-w-lg">
                忙しい会社員のための実践的なアドバイス。
                <br className="hidden md:block" />
                <strong className="text-brand-black">筋トレ・学習・時間管理・瞑想</strong>で、
                あなたの人生を再構築します。
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="primary" href="/blog" size="lg">
                  記事を読む
                </Button>
                <Button variant="secondary" href="/contact">
                  お問い合わせ
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-2xl md:text-3xl font-black text-brand-blue">50+</p>
                  <p className="text-sm text-brand-gray-dark">記事公開中</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-brand-blue">5</p>
                  <p className="text-sm text-brand-gray-dark">カテゴリー</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-brand-blue">100%</p>
                  <p className="text-sm text-brand-gray-dark">実践可能</p>
                </div>
              </div>
            </div>

            {/* Right: Logo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[336px] md:w-[380px] md:h-[456px] lg:w-[450px] lg:h-[540px]">
                {/* Decorative frame */}
                <div className="absolute inset-4 border-2 border-brand-blue/20 rounded-3xl" />
                <Image
                  src="/images/logo.jpg"
                  alt="HUMAN REBUILD LAB"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY NAVIGATION ===== */}
      <Suspense fallback={<div className="h-64 bg-white animate-pulse" />}>
        <CategoryNav />
      </Suspense>

      {/* ===== BLUE SECTION: なぜ習慣化なのか ===== */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark py-24 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-wrapper relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-5">
              <div className="image-wrapper aspect-[3/4] shadow-2xl">
                <Image
                  src="/images/hero-reading.svg"
                  alt="読書する人"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right: Text - 日本語コンテンツ */}
            <div className="lg:col-span-7 text-white">
              <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">
                Why Habits Matter
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
                小さな習慣が
                <br />
                <span className="text-brand-blue-light">人生</span>を変える
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed mb-8">
                毎日の1%の改善が、1年後には37倍の成長につながります。
                私たちは科学的なアプローチで、あなたの習慣化をサポートします。
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl md:text-4xl font-black">1%</p>
                  <p className="text-sm text-white/60">毎日の改善</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">21日</p>
                  <p className="text-sm text-white/60">習慣定着期間</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">37倍</p>
                  <p className="text-sm text-white/60">1年後の成長</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Logo */}
        <div className="hidden md:block absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-90">
          <Logo size="md" />
        </div>
      </section>

      {/* ===== WHITE SECTION: 5つのカテゴリー紹介 ===== */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text (reversed order for alternating layout) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-4">
                Our Contents
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-6 leading-tight">
                5つの柱で
                <br />
                <span className="text-brand-blue">人生を再構築</span>
              </h2>
              <p className="text-lg text-brand-gray-dark leading-relaxed mb-8 max-w-md">
                筋トレ・学習・時間管理・瞑想・習慣化。
                これらを組み合わせることで、持続可能な成長を実現します。
              </p>
              
              {/* Category list */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: "💪", name: "筋トレ", desc: "身体から脳を変える" },
                  { icon: "📚", name: "学習", desc: "効率的なインプット術" },
                  { icon: "⏰", name: "時間管理", desc: "生産性を最大化" },
                  { icon: "🧘", name: "瞑想", desc: "集中力と回復力" },
                  { icon: "🔄", name: "習慣化", desc: "すべての基盤" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-gray transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-bold text-brand-black">{item.name}</span>
                      <span className="text-brand-gray-dark ml-2">- {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="primary" href="/blog">
                記事を読む
              </Button>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="image-wrapper aspect-[4/5] shadow-2xl">
                <Image
                  src="/images/hero-books.svg"
                  alt="本を持つ人"
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

          {/* Posts Grid with Suspense */}
          <Suspense fallback={<PostsSkeleton />}>
            <LatestPosts />
          </Suspense>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-white py-24 md:py-32">
        <div className="section-wrapper-narrow">
          <CtaBanner variant="both" />
        </div>
      </section>

      {/* ===== お問い合わせセクション ===== */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark py-24 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-wrapper relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Info - 日本語コンテンツ */}
            <div className="text-white">
              <div className="mb-8">
                <Logo size="lg" />
              </div>
              
              <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">
                Contact Us
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                まずは
                <br />
                <span className="text-brand-blue-light">無料相談</span>から
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-md">
                習慣化に関するお悩み、コーチングのご相談など、
                お気軽にお問い合わせください。
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  "24時間以内にご返信",
                  "オンラインで完結",
                  "無理な勧誘は一切なし",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-blue-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue-light rounded-full mb-4">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
                  お問い合わせ
                </h3>
                <p className="text-brand-gray-dark leading-relaxed">
                  習慣化に関するご質問、コーチングのご相談など、
                  <br className="hidden md:block" />
                  どんなことでもお気軽にご連絡ください。
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="primary" href="/contact" className="w-full" size="lg">
                  お問い合わせフォームへ
                </Button>
                <Button variant="secondary" href="/coaching" className="w-full">
                  コーチングについて詳しく
                </Button>
              </div>

              <p className="text-xs text-center text-brand-gray-dark mt-8 leading-relaxed">
                ※ 24時間以内にご返信いたします
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
