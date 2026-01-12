import Button from "./Button";
import Logo from "./Logo";

type CtaBannerProps = {
  variant?: "template" | "coaching" | "both";
  className?: string;
};

export default function CtaBanner({
  variant = "both",
  className = "",
}: CtaBannerProps) {
  if (variant === "template") {
    return (
      <div
        className={`bg-brand-blue rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden ${className}`}
      >
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3">
              無料ダウンロード
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
              習慣化テンプレート
            </h3>
            <p className="text-white/80 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Notionで使える習慣トラッカー、週次振り返りシート、目標設定フレームワークをまとめた無料テンプレート
            </p>
            <Button variant="white" href="/contact">
              無料でもらう
            </Button>
          </div>
          <div className="shrink-0 hidden md:block">
            <Logo size="lg" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "coaching") {
    return (
      <div
        className={`bg-white border-2 border-brand-blue rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden ${className}`}
      >
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue-light rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">
              4週間プログラム
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-5">
              習慣リビルド・コーチング
            </h3>
            <p className="text-brand-gray-dark mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              マンツーマンで習慣化をサポート。筋トレ・学習・時間管理・瞑想を組み合わせた、あなただけの習慣プランを一緒に作りましょう。
            </p>
            <Button variant="primary" href="/coaching">
              詳しく見る
            </Button>
          </div>
          <div className="shrink-0 hidden md:block">
            <Logo size="lg" />
          </div>
        </div>
      </div>
    );
  }

  // Both variant
  return (
    <div className={`space-y-8 ${className}`}>
      <CtaBanner variant="template" />
      <CtaBanner variant="coaching" />
    </div>
  );
}
