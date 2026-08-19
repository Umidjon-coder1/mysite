import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft__top">
          <div className="ft__brandcol">
            <a href="#top" className="brand">
              UMIDJON<span>.</span>
            </a>
            <p className="ft__blurb">
              Bizneslar uchun sotuvchi saytlar. Tahlil, matn, dizayn va ishga tushirish —
              bitta qo&apos;lda.
            </p>
          </div>

          <nav className="ft__col" aria-label="Footer navigatsiya">
            <h5>Sahifalar</h5>
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ft__col">
            <h5>Aloqa</h5>
            <a href={site.telegram} target="_blank" rel="noopener noreferrer">
              Telegram — {site.telegramHandle}
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram — {site.instagramHandle}
            </a>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span style={{ color: "var(--ink-4)" }}>{site.location}</span>
          </div>
        </div>

        <div className="ft__bot">
          <span>© 2026 Umidjon Majidov. Barcha huquqlar himoyalangan.</span>
          <span>
            Toshkent · {site.location.split(", ")[1]} ·{" "}
            <a href={site.telegram} target="_blank" rel="noopener noreferrer">
              hamkorlikka ochiq
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
