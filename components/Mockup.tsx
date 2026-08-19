import type { Project } from "@/lib/site";

/** Brauzer oynasi ko'rinishidagi ramka — skrinshot katta va o'qilishli qoladi. */
export default function Mockup({ p }: { p: Project }) {
  return (
    <div className="mock">
      <div className="mock__bar">
        <i /> <i /> <i />
        <span className="mock__url mono">{p.domain}</span>
        {p.live && <span className="mock__live mono">live</span>}
        {p.file && <span className="mock__live mono">pdf</span>}
      </div>

      <div
        className="mock__screen"
        style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
      >
        {p.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={p.image} alt={`${p.title} sayti — bosh sahifa`} width={1280} height={800} loading="lazy" />
        ) : (
          <span className="mock__mark" aria-hidden="true">
            {p.mark}
          </span>
        )}
      </div>
    </div>
  );
}
