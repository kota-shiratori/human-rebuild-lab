import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/_components/Logo";
import Button from "@/_components/Button";
import CtaBanner from "@/_components/CtaBanner";

export const metadata: Metadata = {
  title: "習慣リビルド・コーチング",
  description:
    "4週間のマンツーマンコーチングで、あなたの習慣を根本から再構築します。筋トレ・学習・時間管理・瞑想を組み合わせた、あなただけのプログラム。",
};

const features = [
  {
    week: "Week 1",
    title: "現状分析 & ゴール設定",
    description:
      "あなたの現在の習慣を徹底的に分析し、理想の1日・1週間をデザインします。",
  },
  {
    week: "Week 2",
    title: "習慣のトリガー設計",
    description:
      "科学的根拠に基づいた習慣化のテクニックを使い、続けられる仕組みを構築します。",
  },
  {
    week: "Week 3",
    title: "実践 & フィードバック",
    description:
      "毎日のチェックインで進捗を確認し、つまずきポイントを一緒に解決します。",
  },
  {
    week: "Week 4",
    title: "定着 & 自走化",
    description:
      "習慣を長期的に維持するためのマインドセットと、セルフコーチング術を習得します。",
  },
];

const testimonials = [
  {
    name: "田中さん（32歳・IT企業）",
    text: "朝5時起きと週3回の筋トレが習慣になりました。体重も5kg減り、仕事のパフォーマンスも上がっています。",
  },
  {
    name: "佐藤さん（28歳・コンサル）",
    text: "毎日30分の読書習慣がついて、月に4冊は読めるようになりました。知識が増えて自信がつきました。",
  },
  {
    name: "鈴木さん（35歳・メーカー）",
    text: "瞑想を始めてからイライラが減り、家族との関係も良くなりました。人生が変わった実感があります。",
  },
];

const pricing = {
  price: "¥98,000",
  features: [
    "4週間のマンツーマンコーチング",
    "週1回のオンラインセッション（60分）",
    "毎日のチェックイン（LINE/Slack）",
    "習慣化テンプレート（Notion）",
    "オリジナルワークブック",
    "終了後1ヶ月のフォローアップ",
  ],
};

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-sm font-medium text-white/80 mb-4">
                4週間プログラム
              </p>
              <h1 className="text-giant mb-6">
                習慣
                <br />
                リビルド
                <br />
                コーチング
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg mb-8">
                マンツーマンで習慣化をサポート。筋トレ・学習・時間管理・瞑想を組み合わせた、あなただけの習慣プランを一緒に作りましょう。
              </p>
              <Button variant="white" href="#apply">
                無料相談を予約する
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
              <Logo size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-brand-blue mb-4">
              こんな悩みありませんか？
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-8">
              「続かない」「忙しくて時間がない」
              <br />
              「何から始めればいいかわからない」
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                "早起きしたいけど、いつも二度寝してしまう",
                "ジムに入会したけど、月に1回しか行けていない",
                "本を買っても、積読が増えるばかり",
              ].map((problem, index) => (
                <div
                  key={index}
                  className="p-6 bg-brand-gray rounded-xl"
                >
                  <p className="text-brand-black">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-blue mb-4">
              4週間で人生を変える
            </p>
            <h2 className="text-giant text-brand-black">PROGRAM</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <p className="text-sm font-bold text-brand-blue mb-2">
                  {feature.week}
                </p>
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-gray-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-blue mb-4">
              受講者の声
            </p>
            <h2 className="text-giant text-brand-black">VOICES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-brand-gray p-8 rounded-2xl"
              >
                <p className="text-brand-black mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-sm font-semibold text-brand-blue">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-blue py-16 md:py-24" id="apply">
        <div className="section-wrapper">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-brand-blue mb-2">
                  4週間コーチング
                </p>
                <p className="text-5xl md:text-6xl font-black text-brand-black">
                  {pricing.price}
                </p>
                <p className="text-brand-gray-dark mt-2">（税込）</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-brand-blue shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-brand-black">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" href="/contact" className="w-full">
                無料相談を予約する
              </Button>

              <p className="text-center text-sm text-brand-gray-dark mt-4">
                まずは30分の無料相談であなたの目標をお聞かせください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black text-center mb-12">
              よくある質問
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "どんな人が対象ですか？",
                  a: "習慣化に悩む会社員の方を対象としています。特に、筋トレ・学習・時間管理・瞑想のいずれかを習慣にしたい方に最適です。",
                },
                {
                  q: "オンラインで完結しますか？",
                  a: "はい、すべてオンラインで行います。Zoomでのセッションと、LINE/Slackでの毎日のチェックインで進めます。",
                },
                {
                  q: "途中でキャンセルできますか？",
                  a: "初回セッション後7日以内であれば、全額返金いたします。それ以降のキャンセルは受け付けておりません。",
                },
                {
                  q: "1日どのくらい時間が必要ですか？",
                  a: "習慣化したい内容によりますが、最初は1日15分から始めることをおすすめしています。",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6"
                >
                  <h3 className="text-lg font-semibold text-brand-black mb-2">
                    Q. {faq.q}
                  </h3>
                  <p className="text-brand-gray-dark">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="section-wrapper max-w-3xl">
          <CtaBanner variant="template" />
        </div>
      </section>
    </>
  );
}
