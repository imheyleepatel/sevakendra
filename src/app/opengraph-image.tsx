import { ImageResponse } from "next/og";

export const alt = "Seva Kendra — insurance and financial protection in Canada, India, and the USA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#07154F",
          color: "#FCFBF8",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            width: 88,
            height: 6,
            background: "#D8A63A",
            marginBottom: 36,
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: 1 }}>
          Seva Kendra
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#D8A63A",
          }}
        >
          Global Financial Solution
        </div>
        <div
          style={{
            marginTop: 36,
            maxWidth: 820,
            fontSize: 30,
            lineHeight: 1.4,
            color: "rgba(252,251,248,0.86)",
          }}
        >
          Life, health, overseas, and general insurance guidance for families
          in Canada, India, and the USA.
        </div>
      </div>
    ),
    { ...size },
  );
}
