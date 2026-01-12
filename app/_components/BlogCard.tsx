import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/_types/blog";

type BlogCardProps = {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
};

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (variant === "featured") {
    return (
      <article className="group relative overflow-hidden rounded-3xl bg-white shadow-sm card-hover">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-4 py-1.5 text-xs font-bold bg-brand-blue rounded-full mb-4 uppercase tracking-wide">
                {post.category.name}
              </span>
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3">
                {post.title}
              </h3>
              <time className="text-sm text-white/70">{formattedDate}</time>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-5 items-start">
        <Link
          href={`/blog/${post.slug}`}
          className="shrink-0 w-24 h-24 relative overflow-hidden rounded-xl"
        >
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="96px"
          />
        </Link>
        <div className="flex-1 min-w-0 py-1">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="font-bold text-brand-black leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors duration-300">
              {post.title}
            </h3>
          </Link>
          <time className="text-xs text-brand-gray-dark mt-2 block">
            {formattedDate}
          </time>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm card-hover border border-gray-100/80">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-bold bg-brand-blue-light text-brand-blue rounded-full uppercase tracking-wide">
              {post.category.name}
            </span>
            <time className="text-xs text-brand-gray-dark">{formattedDate}</time>
          </div>
          <h3 className="font-bold text-lg text-brand-black leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors duration-300 mb-3">
            {post.title}
          </h3>
          <p className="text-sm text-brand-gray-dark line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
