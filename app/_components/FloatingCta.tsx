"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションを過ぎたら表示（300px以上スクロール）
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      {/* Expandable CTA */}
      <Link
        href="/contact"
        className="group flex items-center gap-3 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-full shadow-2xl shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        <span className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-full">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </span>

        {/* Text - expands on hover */}
        <span
          className={`font-bold text-sm pr-5 whitespace-nowrap transition-all duration-300 ${
            isHovered ? "max-w-48 opacity-100" : "max-w-0 opacity-0 pr-0"
          } overflow-hidden`}
        >
          無料でお問い合わせ
        </span>
      </Link>

      {/* Pulse animation ring */}
      <span className="absolute inset-0 -z-10 rounded-full bg-brand-blue/20 animate-ping" />
    </div>
  );
}
