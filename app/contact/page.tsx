import { Metadata } from "next";
import Button from "@/_components/Button";
import Logo from "@/_components/Logo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "HUMAN REBUILD LABへのお問い合わせ。コーチングの無料相談、取材依頼、その他のお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-sm font-medium text-white/80 mb-4">Contact</p>
              <h1 className="text-giant mb-6">GET IN TOUCH</h1>
              <p className="text-lg text-white/90 max-w-lg">
                コーチングの無料相談、取材依頼、その他のお問い合わせはこちらからどうぞ。
                通常2営業日以内にご返信いたします。
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Logo size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-black mb-2"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-black mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-brand-black mb-2"
                >
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="coaching">コーチング無料相談</option>
                  <option value="template">テンプレートについて</option>
                  <option value="media">取材・メディア掲載</option>
                  <option value="collaboration">コラボレーション</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-black mb-2"
                >
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="w-5 h-5 mt-0.5 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                />
                <label htmlFor="privacy" className="text-sm text-brand-gray-dark">
                  <a
                    href="/privacy"
                    className="text-brand-blue hover:underline"
                    target="_blank"
                  >
                    プライバシーポリシー
                  </a>
                  に同意します
                </label>
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" className="w-full">
                送信する
              </Button>
            </form>

            {/* Other Contact */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h2 className="text-xl font-bold text-brand-black mb-6 text-center">
                その他のお問い合わせ方法
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-brand-gray rounded-xl text-center">
                  <p className="font-semibold text-brand-black mb-2">Email</p>
                  <a
                    href="mailto:hello@humanrebuildlab.com"
                    className="text-brand-blue hover:underline"
                  >
                    hello@humanrebuildlab.com
                  </a>
                </div>
                <div className="p-6 bg-brand-gray rounded-xl text-center">
                  <p className="font-semibold text-brand-black mb-2">SNS</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-dark"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-dark"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
