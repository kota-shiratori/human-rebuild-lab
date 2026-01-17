import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
  priority?: boolean;
};

const sizeMap = {
  sm: { width: 50, height: 60 },
  md: { width: 80, height: 96 },
  lg: { width: 120, height: 144 },
  xl: { width: 180, height: 216 },
  "2xl": { width: 260, height: 312 },
  hero: { width: 500, height: 600 },
};

export default function Logo({
  className = "",
  size = "md",
  priority = false,
}: LogoProps) {
  const { width, height } = sizeMap[size];

  return (
    <div className={`inline-flex ${className}`}>
      <Image
        src="/images/logo.jpg"
        alt="HUMAN REBUILD LAB"
        width={width}
        height={height}
        priority={priority}
        className="w-auto h-auto max-w-none"
      />
    </div>
  );
}
