import { site } from "@/lib/site";
import { Arrow } from "./Arrow";

const links = [
  { dt: "Telegram", dd: site.telegramHandle, href: site.telegram, ext: true },
  { dt: "Telefon", dd: site.phone, href: site.phoneHref, ext: false },
  { dt: "Email", dd: site.email, href: `mailto:${site.email}`, ext: false },
  { dt: "Instagram", dd: site.instagramHandle, href: site.instagram, ext: true },
];

export default function Contact() {
  return (
    <section className="section ct" id="contact">
      <div className="orb orb--c" aria-hidden="true" />

      <div className="wrap ct__in">
        <p className="eyebrow reveal" style={{ marginInline: "auto" }}>
          Aloqa
        </p>

        <h2 className="reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
          Sotuvchi sayt kerakmi? <u>Gaplashamiz.</u>
        </h2>

        <p className="ct__p reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
          Telegramga yozing — 15 daqiqalik suhbatda vazifangizni eshitaman, formatni tanlaymiz
          va aniq muddat bilan narxni aytaman. Bepul, majburiyatsiz.
        </p>

        <p className="ct__cmd reveal mono" style={{ "--d": "180ms" } as React.CSSProperties}>
          <i>$</i> loyiha_boshlash <b>--nomi</b> &quot;sizning_biznes&quot; <b>--muddat</b> 7d
          <i className="term__caret" aria-hidden="true" />
        </p>

        <div className="ct__btns reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
          <a
            className="btn btn--primary"
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram orqali yozish
            <Arrow />
          </a>
          <a className="btn btn--ghost" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>

        <div className="ct__links">
          {links.map((l, i) => (
            <a
              key={l.dt}
              className="ct__l reveal"
              href={l.href}
              target={l.ext ? "_blank" : undefined}
              rel={l.ext ? "noopener noreferrer" : undefined}
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="ct__l-k">{l.dt}</span>
              <span className="ct__l-v">{l.dd}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
