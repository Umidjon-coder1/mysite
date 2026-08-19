import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Umidjon Majidov — bizneslar uchun sotuvchi saytlar";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090A",
          padding: "72px",
          color: "#F2F4F3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <span style={{ fontWeight: 700, letterSpacing: -1 }}>
            UMIDJON<span style={{ color: "#FFCA7B" }}>.</span>
          </span>
          <span style={{ color: "#6E7673" }}>umidjon@studio:~$</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, display: "flex", flexWrap: "wrap" }}>
            Biznesingiz uchun&nbsp;
            <span style={{ color: "#FFCA7B" }}>sotuvchi sayt</span>
            &nbsp;yarataman.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#A7AEAB" }}>
            50+ sayt · 3+ yil tajriba · Toshkent
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#6E7673" }}>
          <span>Tilda</span>
          <span>·</span>
          <span>Figma</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>CRM</span>
        </div>
      </div>
    ),
    size
  );
}
