"use client";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function MobileMenuButton({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={`block h-0.5 bg-brand-black rounded transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[9px]" : ""
          }`}
        />
        <span
          className={`block h-0.5 bg-brand-black rounded transition-all duration-300 ${
            isOpen ? "opacity-0 scale-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 bg-brand-black rounded transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[9px]" : ""
          }`}
        />
      </div>
    </button>
  );
}
