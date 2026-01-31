import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  content: [
    { href: "/blog", label: "Blog" },
    // { href: "/category/habit", label: "習慣化" },
    // { href: "/category/workout", label: "筋トレ" },
    // { href: "/category/learning", label: "学習" },
    // { href: "/category/time-management", label: "時間管理" },
    // { href: "/category/meditation", label: "瞑想" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/coaching", label: "Coaching" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="section-wrapper py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <Logo size="md" />
            <p className="mt-6 text-brand-gray-dark leading-relaxed max-w-sm">
              忙しい会社員のための習慣化メディア。筋トレ・学習・時間管理・瞑想を通じて、あなたの人生を再構築します。
            </p>
            <div className="flex gap-5 mt-8">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-brand-gray-dark hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-brand-gray-dark hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://stand.fm/channels/693e13a88ddb67b396715eb7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-brand-gray-dark hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Podcast"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <path d="M23.788 8.68908C16.0715 8.80759 9.72449 14.9966 9.43479 22.7131C9.18459 29.363 13.4247 35.0779 19.3503 37.0794C19.482 37.119 19.6137 37.0136 19.5874 36.8688C19.5084 36.3289 19.4162 35.7758 19.3372 35.2227C19.3108 35.0647 19.2055 34.9199 19.0607 34.854C14.4782 32.892 11.2783 28.2963 11.3968 22.9764C11.5417 16.3529 16.8748 10.9276 23.4983 10.6643C30.6749 10.3878 36.6005 16.1422 36.6005 23.253C36.6005 28.4544 33.4402 32.9183 28.9367 34.854C28.7787 34.9199 28.6733 35.0516 28.6602 35.2227C28.5812 35.789 28.5022 36.342 28.41 36.8688C28.3836 37.0004 28.5153 37.119 28.647 37.0794C34.4146 35.1306 38.5757 29.679 38.5757 23.2661C38.5757 15.1546 31.9259 8.57056 23.788 8.68908Z" />
                  <path d="M24.0513 13.5349C18.6919 13.5086 14.2806 17.8935 14.2675 23.2529C14.2543 26.6503 15.9925 29.6395 18.6261 31.3908C18.7446 31.4698 18.9158 31.3777 18.9026 31.2328C18.85 30.5217 18.8105 29.8502 18.7973 29.2313C18.7973 29.0996 18.7446 28.9811 18.6393 28.8889C17.0854 27.4009 16.1373 25.2808 16.2427 22.9501C16.4139 18.9602 19.64 15.7208 23.63 15.5365C28.0808 15.3258 31.7547 18.8811 31.7547 23.2925C31.7547 25.5047 30.8329 27.4931 29.3449 28.9021C29.2527 28.9942 29.2001 29.1127 29.1869 29.2444C29.1737 29.8633 29.1342 30.5349 29.0816 31.246C29.0684 31.3908 29.2396 31.483 29.3581 31.404C31.9917 29.6658 33.7167 26.6766 33.7167 23.2925C33.7299 17.9199 29.3976 13.5612 24.0513 13.5349Z" />
                  <path d="M23.9987 25.5179C25.8968 25.5179 27.4355 23.9792 27.4355 22.081 27.4355 20.1829 25.8968 18.6442 23.9987 18.6442 22.1006 18.6442 20.5618 20.1829 20.5618 22.081 20.5618 23.9792 22.1006 25.5179 23.9987 25.5179zM27.4355 28.4938C26.6981 26.9663 25.1443 26.7425 23.9987 26.7425 22.8531 26.7425 21.2992 26.9663 20.5618 28.4938 19.8112 30.0477 21.1939 38.6464 21.6943 39.476 22.0893 40.1344 22.8136 40.6875 23.9987 40.6875 25.1838 40.6875 25.9081 40.1476 26.3031 39.476 26.8035 38.6464 28.1861 30.0477 27.4355 28.4938z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Content Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-bold text-brand-black mb-5">コンテンツ</h3>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-dark hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-brand-black mb-5">サイト情報</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-dark hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-brand-gray-dark">
            &copy; {new Date().getFullYear()} HUMAN REBUILD LAB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
