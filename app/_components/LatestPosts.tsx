import { getBlogPosts } from "@/_libs/microcms";
import BlogCard from "./BlogCard";

export default async function LatestPosts() {
  const { contents: latestPosts } = await getBlogPosts({ limit: 6 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {latestPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
