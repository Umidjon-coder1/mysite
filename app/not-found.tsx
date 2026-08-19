import Link from "next/link";

export const metadata = { title: "Sahifa topilmadi" };

export default function NotFound() {
  return (
    <main
      className="wrap"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <p className="eyebrow" style={{ marginBottom: 0 }}>
        Xatolik 404
      </p>
      <h1 style={{ fontSize: "clamp(36px, 8vw, 76px)" }}>
        Bu sahifa <span style={{ color: "var(--ink-4)" }}>mavjud emas.</span>
      </h1>
      <p className="lede">Manzil o&apos;zgargan yoki sahifa o&apos;chirilgan bo&apos;lishi mumkin.</p>
      <div>
        <Link className="btn btn--primary" href="/">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </main>
  );
}
