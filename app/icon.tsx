import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Blue accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            borderRadius: "8px 8px 0 0",
            background: "linear-gradient(90deg, #3b82f6, #6366f1)",
          }}
        />
        {/* N letter */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 900,
            color: "white",
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          N
        </div>
        {/* Blue dot accent */}
        <div
          style={{
            position: "absolute",
            bottom: 5,
            right: 6,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#60a5fa",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
