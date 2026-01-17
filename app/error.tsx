"use client";

import Button from "@/_components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="section-wrapper text-center">
        <div className="max-w-md mx-auto">
          <p className="text-6xl font-black text-brand-blue mb-6">!</p>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
            エラーが発生しました
          </h1>
          <p className="text-brand-gray-dark mb-8">
            {error.message || "予期しないエラーが発生しました。もう一度お試しください。"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()} variant="primary">
              もう一度試す
            </Button>
            <Button href="/" variant="secondary">
              トップに戻る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
