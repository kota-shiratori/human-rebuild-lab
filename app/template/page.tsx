import { Metadata } from "next";
import Logo from "@/_components/Logo";
import TemplateForm from "./_components/TemplateForm";

export const metadata: Metadata = {
  title: "無料テンプレート | HUMAN REBUILD LAB",
  description:
    "Notionで使える習慣化ワークシートを無料配布中。朝活チェックリスト、週間トラッカー、目標設計テンプレートで習慣化を仕組み化しましょう。",
};

const FEATURES = [
  {
    icon: "📋",
    title: "朝活5ステップチェックリスト",
    description: "脳科学に基づく習慣化の5ステップを毎朝チェックできるリスト",
  },
  {
    icon: "📊",
    title: "週間ハビットトラッカー",
    description: "できた日にマルをつけるだけ。連続記録がモチベーションに",
  },
  {
    icon: "🌙",
    title: "今夜やる3つのことセクション",
    description: "前日の夜に朝の動線をセットするためのリマインダー",
  },
  {
    icon: "⏰",
    title: "起床時間の段階的シフト表",
    description: "10分ずつ前倒しにする起床時間の記録と振り返り",
  },
];

export default function TemplatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-sm font-medium text-white/80 mb-4">
                Free Download
              </p>
              <h1 className="text-giant mb-6">習慣化テンプレート</h1>
              <p className="text-lg text-white/90 max-w-lg">
                Notionで使える習慣化ワークシートを無料でお配りしています。
                メールアドレスを入力するだけで、すぐにご利用いただけます。
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Logo size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="section-wrapper">
          <h2 className="text-headline text-center text-brand-black mb-4">
            テンプレートの内容
          </h2>
          <p className="text-brand-gray-dark text-center mb-12 max-w-2xl mx-auto">
            記事で紹介した習慣化メソッドを、そのまま実践できるワークシートです
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-brand-black mb-2">{f.title}</h3>
                <p className="text-sm text-brand-gray-dark">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-md mx-auto">
            <h2 className="text-headline text-center text-brand-black mb-4">
              無料でダウンロード
            </h2>
            <p className="text-brand-gray-dark text-center mb-8">
              メールアドレスを入力してください
            </p>
            <TemplateForm />
          </div>
        </div>
      </section>
    </>
  );
}
