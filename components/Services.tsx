import { services, site } from "@/lib/site";
import { Arrow, ArrowUpRight } from "./Arrow";

export default function Services() {
  return (
    <section className="section svc" id="services">
      <div className="wrap">
        <div className="svc__head">
          <div>
            <p className="eyebrow reveal">Xizmatlar</p>
            <h2 className="h-sec reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
              Veb-ishlab chiqish. <em>Besh formatda.</em>
            </h2>
          </div>
          <p className="lede reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            Bitta yo&apos;nalish, lekin biznesning vazifasiga qarab shakl o&apos;zgaradi. Target va
            zapusklar uchun tez yuklanadigan bir sahifali saytlar va to&apos;lov sahifalari ham
            shu ro&apos;yxatga kiradi.
          </p>
        </div>

        <div className="svc__list">
          {services.map((s, i) => (
            <a
              key={s.name}
              className="svc__row reveal"
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className="svc__i mono">[{String(i + 1).padStart(2, "0")}]</span>
              <h3 className="svc__n">{s.name}</h3>
              <p className="svc__d">{s.desc}</p>
              <span className="svc__go" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>

        <div className="svc__foot reveal">
          <p>
            Qaysi format sizga mosligini bilmaysizmi? Yozing — vazifangizni eshitib,
            o&apos;zim tavsiya beraman.
          </p>
          <a
            className="btn btn--primary"
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buyurtma berish
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
