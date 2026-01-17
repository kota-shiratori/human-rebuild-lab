import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import FloatingCta from "@/_components/FloatingCta";

// メインのボディフォント - 読みやすさ重視
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

// 見出し用フォント - 力強さと個性
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

// コード用フォント
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HUMAN REBUILD LAB | 習慣化で人生を再構築",
    template: "%s | HUMAN REBUILD LAB",
  },
  description:
    "忙しい会社員のための習慣化メディア。筋トレ・学習・時間管理・瞑想を通じて、あなたの脳と人生を再構築します。",
  keywords: ["習慣化", "筋トレ", "学習", "時間管理", "瞑想", "生産性", "会社員"],
  authors: [{ name: "HUMAN REBUILD LAB" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "HUMAN REBUILD LAB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${zenKakuGothicNew.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <FloatingCta />
        <Footer />
      </body>
    </html>
  );
}
