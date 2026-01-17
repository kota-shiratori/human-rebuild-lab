import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HUMAN REBUILD LAB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0066CC 0%, #004A99 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Main Title */}
        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          HUMAN REBUILD LAB
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 32,
            fontWeight: 500,
          }}
        >
          習慣化で人生を再構築
        </div>

        {/* Decorative element */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
