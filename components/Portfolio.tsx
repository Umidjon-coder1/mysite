import { projects, site } from "@/lib/site";
import { Arrow, ArrowUpRight } from "./Arrow";
import Mockup from "./Mockup";

export default function Portfolio() {
  return (
    <section className="section pf" id="portfolio">
      <div className="wrap">
        <div className="pf__head">
          <div>
            <p className="eyebrow reveal">Ishlarim</p>
            <h2 className="h-sec reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
              Tanlangan loyihalar.
            </h2>
          </div>
          <p
            className="pf__count mono reveal"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            [ {projects.length} / 50+ ko&apos;rsatilgan ]
          </p>
        </div>

        <div className="cases">
          {projects.map((p, i) => (
            <article className="case reveal" key={p.title}>
              <div className="case__vis">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} — saytni ochish`}
                >
                  <Mockup p={p} />
                </a>
              </div>

              <div className="case__body">
                <p className="case__top mono">
                  <span className="case__idx">[{String(i + 1).padStart(2, "0")}]</span>
                  <span className="case__type">{p.type}</span>
                </p>

                <h3 className="case__h">{p.title}</h3>
                <p className="case__p">{p.desc}</p>

                <p className="case__dom mono">
                  {p.live ? (
                    <>
                      <i className="dot" aria-hidden="true" />
                      {p.domain}
                    </>
                  ) : p.file ? (
                    <>arxiv · {p.domain}</>
                  ) : (
                    <>tez orada onlayn</>
                  )}
                </p>

                <a
                  className="btn btn--ghost case__cta"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.cta ?? (p.live ? "Saytni ochish" : "Loyiha haqida")}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pf__more reveal">
          <a
            className="btn btn--primary"
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shunday sayt kerakmi? Yozing
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
