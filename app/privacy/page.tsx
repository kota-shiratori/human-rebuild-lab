import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HUMAN REBUILD LABのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="section-wrapper">
          <h1 className="text-giant text-white">PRIVACY POLICY</h1>
          <p className="mt-4 text-lg text-white/90">プライバシーポリシー</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto prose prose-lg prose-brand">
            <p className="text-brand-gray-dark">
              HUMAN REBUILD LAB（以下、「当サイト」）は、お客様の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            <h2>1. 個人情報の収集</h2>
            <p>
              当サイトでは、お問い合わせやサービスのお申し込みの際に、お名前、メールアドレスなどの個人情報をお伺いすることがあります。
            </p>

            <h2>2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用いたします。</p>
            <ul>
              <li>お問い合わせへの回答</li>
              <li>サービスのご案内</li>
              <li>メールマガジンの配信</li>
              <li>サービスの改善・開発</li>
            </ul>

            <h2>3. 個人情報の第三者提供</h2>
            <p>
              当サイトは、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
            </p>
            <ul>
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>

            <h2>4. Cookieについて</h2>
            <p>
              当サイトでは、ユーザーの利便性向上のためにCookieを使用しています。
              Cookieとは、Webサイトがブラウザを通じてお客様のコンピュータに送信する小さなテキストファイルです。
            </p>
            <p>
              お客様はブラウザの設定によりCookieの受け取りを拒否することができますが、
              その場合は当サイトの一部機能が利用できなくなる可能性があります。
            </p>

            <h2>5. アクセス解析ツール</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>

            <h2>6. プライバシーポリシーの変更</h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
              変更した場合は、当ページにてお知らせいたします。
            </p>

            <h2>7. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、
              <a href="/contact" className="text-brand-blue hover:underline">
                お問い合わせページ
              </a>
              よりご連絡ください。
            </p>

            <p className="text-sm text-brand-gray-dark mt-12">
              制定日：2026年1月1日
              <br />
              最終更新日：2026年1月1日
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
