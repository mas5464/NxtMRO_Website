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
          borderRadius: 6,
          background: "#1c1a17",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          stroke="#dfa23a"
          strokeWidth="5"
          strokeLinecap="round"
        >
          <path d="M6 27V5" />
          <path d="M26 27V5" />
          <path d="M6 5l20 22" />
          <path d="M6 27 18 13.8" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
