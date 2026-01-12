type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  color?: "dark" | "light";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  color = "dark",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const textColor = color === "dark" ? "text-brand-black" : "text-white";
  const eyebrowColor = color === "dark" ? "text-brand-blue" : "text-white/80";
  const descColor = color === "dark" ? "text-brand-gray-dark" : "text-white/90";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`text-sm font-medium ${eyebrowColor} mb-2`}>{eyebrow}</p>
      )}
      <h2 className={`text-giant ${textColor}`}>{title}</h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${descColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
