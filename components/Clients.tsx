import { clients } from "@/lib/site";

/** Uzilishsiz aylanish uchun ro'yxat shuncha marta takrorlanadi. */
const COPIES = 4;

function Row({ items, dir }: { items: typeof clients; dir: "l" | "r" }) {
  const track = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div className="mq__vp">
      <div className={`mq__track mq__track--${dir}`}>
        {track.map((c, i) => (
          <span className="mq__i" key={`${c.n}-${i}`} aria-hidden={i >= items.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mq__logo" src={c.logo} alt={c.n} loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2);

  return (
    <section className="mq" aria-label="Mijozlar">
      <div className="wrap mq__head">
        <p className="eyebrow" style={{ marginBottom: 0 }}>
          Mijozlar
        </p>
        <p className="mq__lab">
          Saytini men qurgan brendlar — ko&apos;chmas mulk, travel, tibbiyot, ta&apos;lim va IT.
        </p>
      </div>

      <Row items={clients.slice(0, half)} dir="l" />
      <Row items={clients.slice(half)} dir="r" />
    </section>
  );
}
