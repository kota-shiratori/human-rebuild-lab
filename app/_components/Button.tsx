import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  size?: "default" | "lg";
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  size = "default",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 text-center active:scale-[0.98]";

  const sizeStyles = {
    default: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none",
    secondary:
      "border-2 border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white",
    white:
      "bg-white text-brand-blue hover:bg-brand-blue-light hover:shadow-lg",
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}
