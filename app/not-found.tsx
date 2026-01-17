import Link from "next/link";
import Button from "@/_components/Button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-wrapper text-center">
        <div className="max-w-md mx-auto">
          <p className="text-8xl font-black text-brand-blue mb-6">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
            ページが見つかりません
          </h1>
          <p className="text-brand-gray-dark mb-8">
            お探しのページは存在しないか、移動した可能性があります。
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
