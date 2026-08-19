import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="band" aria-label="Raqamlarda">
      <div className="wrap">
        <div className="band__grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="band__cell reveal"
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="band__n num">
                {s.value}
                <u>{s.suffix}</u>
              </span>
              <p className="band__t">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
