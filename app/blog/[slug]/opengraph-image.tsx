import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/_libs/microcms";

export const runtime = "edge";
export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  const title = post?.title ?? "HUMAN REBUILD LAB";
  const category = post?.category?.name ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0066CC 0%, #004A99 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 60,
          fontFamily: "sans-serif",
        }}
      >
        {/* Category badge */}
        {category && (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
              fontSize: 24,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 999,
              marginBottom: 24,
            }}
          >
            {category}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: title.length > 30 ? 48 : 56,
            fontWeight: 700,
            lineHeight: 1.3,
            maxWidth: "90%",
            marginBottom: 40,
          }}
        >
          {title}
        </div>

        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "white",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0066CC",
              fontWeight: 900,
              fontSize: 24,
            }}
          >
            H
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            HUMAN REBUILD LAB
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
