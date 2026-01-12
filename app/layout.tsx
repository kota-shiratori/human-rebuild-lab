import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
