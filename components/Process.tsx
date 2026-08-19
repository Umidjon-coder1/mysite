import { process } from "@/lib/site";

export default function Process() {
  return (
    <section className="section proc" id="process">
      <div className="wrap">
        <div className="proc__head">
          <p className="eyebrow reveal">Jarayon</p>
          <h2 className="h-sec reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
            Brifingdan ishga tushirishgacha — <em>sakkiz bosqich.</em>
          </h2>
          <p
            className="lede reveal"
            style={{ "--d": "120ms", marginTop: "22px" } as React.CSSProperties}
          >
            Har bosqichda nima bo&apos;layotganini ko&apos;rasiz. Sizdan faqat brifing va tasdiq
            talab qilinadi — qolganini men olib boraman.
          </p>
        </div>

        <ol className="proc__grid">
          {process.map((s, i) => (
            <li
              key={s.n}
              className="step reveal"
              data-progress={((i + 1) / process.length).toFixed(3)}
              style={{ "--d": `${(i % 4) * 80}ms` } as React.CSSProperties}
            >
              <span className="step__n">[{s.n}]</span>
              <span className="step__bar" aria-hidden="true" />
              <h3 className="step__h">{s.h}</h3>
              <p className="step__p">{s.p}</p>
              <span className="step__t">{s.t}</span>
            </li>
          ))}
        </ol>

        <p className="proc__note reveal mono">
          <span>
            O&apos;rtacha muddat: <b>7–10 kun</b>
          </span>
          <span>
            Aloqa: <b>har kuni</b>, Telegram orqali
          </span>
          <span>
            Yakunda: <b>sayt + CRM + dars</b>
          </span>
        </p>
      </div>
    </section>
  );
}
