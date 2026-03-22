import { Metadata } from "next";
import Button from "@/_components/Button";

export const metadata: Metadata = {
  title: "テンプレートをダウンロード | HUMAN REBUILD LAB",
  robots: { index: false },
};

const NOTION_TEMPLATE_URL = "https://congruous-position-f42.notion.site/32a8617bb56b80689221fdfb74ff5e74";

export default function TemplateSuccessPage() {
  return (
    <section className="bg-brand-gray min-h-[70vh] flex items-center py-16 md:py-24">
      <div className="section-wrapper">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-headline text-brand-black mb-4">
            ありがとうございます！
          </h1>
          <p className="text-brand-gray-dark mb-8 leading-relaxed">
            下のボタンからNotionテンプレートを開いて、
            右上の「複製」ボタンであなたのNotionに追加してください。
          </p>

          <a
            href={NOTION_TEMPLATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold py-4 px-8 rounded-full hover:bg-brand-blue-dark transition-colors text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5v-15zM6.5 4a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5h-11zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
            </svg>
            Notionテンプレートを開く
          </a>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-brand-gray-dark mb-4">
              テンプレートを活用して習慣化に取り組みましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="/blog">
                ブログを読む
              </Button>
              <Button variant="primary" href="/coaching">
                コーチングを見る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
