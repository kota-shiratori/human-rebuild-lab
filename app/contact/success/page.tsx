import { Metadata } from "next";
import Button from "@/_components/Button";

export const metadata: Metadata = {
  title: "送信完了",
  description: "お問い合わせを受け付けました。",
};

export default function ContactSuccessPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-wrapper text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-brand-blue flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
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
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
            送信が完了しました
          </h1>
          
          <p className="text-brand-gray-dark mb-8">
            お問い合わせいただきありがとうございます。
            <br />
            通常2営業日以内にご返信いたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              トップに戻る
            </Button>
            <Button href="/blog" variant="secondary">
              ブログを見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
