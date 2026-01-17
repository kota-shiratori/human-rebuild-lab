"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/coaching", label: "Coaching" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/80">
        <div className="section-wrapper">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Logo size="sm" priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-brand-black font-medium hover:text-brand-blue transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-dark px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
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
                お問い合わせ
              </Link>

              {/* Mobile Menu Button */}
              <MobileMenuButton isOpen={isOpen} onToggle={toggleMenu} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} navItems={navItems} />
    </>
  );
}
