import { community, skills, timeline } from "@/lib/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about__grid">
          <div className="about__bio">
            <p className="eyebrow reveal">Men haqimda</p>

            <h2 className="h-sec reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
              Sayt yasamayman. <em>Sotuv tizimini quraman.</em>
            </h2>

            <div
              className="lede reveal"
              style={{ "--d": "120ms", marginTop: "26px" } as React.CSSProperties}
            >
              <p>
                Men Umidjon Majidov — <b>sotuvchi saytlar</b> bo&apos;yicha mutaxassisman. Uch yildan
                beri O&apos;zbekistondagi bizneslar uchun sayt qilaman: development kompaniyalar,
                travel agentliklar, tibbiyot markazlari va onlayn ta&apos;lim platformalari.
              </p>
              <p>
                Ish shablondan emas, <b>savoldan</b> boshlanadi: mijozingiz kim, u nimadan
                qo&apos;rqadi, nima uchun raqibingizni tanlaydi. Javoblar topilgach — matn,
                dizayn va verstka o&apos;z-o&apos;zidan joyiga tushadi.
              </p>
              <p>
                Bugun 50+ ishga tushirilgan loyiha, AsosIT&apos;da 20+ landing va Nextmark&apos;da
                jamoa boshqarish tajribasi bor. Bilganimni yashirmayman — 2 shogirdni noldan
                kasbga olib chiqdim.
              </p>
            </div>

            <div className="about__sign reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
              <span className="about__ava">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/umidjon.jpg" alt="Umidjon Majidov" loading="lazy" />
                <b aria-hidden="true">UM</b>
              </span>
              <div>
                <h4>Umidjon Majidov</h4>
                <span>Web designer &amp; developer · Toshkent</span>
              </div>
            </div>

            <dl className="skills">
              {skills.map((s, i) => (
                <div
                  key={s.group}
                  className="skills__row reveal"
                  style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
                >
                  <dt>{s.group}</dt>
                  <dd>
                    {s.items.map((it) => (
                      <span className="chip" key={it}>
                        {it}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <ol className="tl">
              {timeline.map((t, i) => (
                <li
                  key={t.title}
                  className={`tl__item reveal${t.now ? " is-now" : ""}`}
                  style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
                >
                  <span className="tl__yr mono">{t.year}</span>
                  <h3 className="tl__h">{t.title}</h3>
                  <p className="tl__org">{t.org}</p>
                  <p className="tl__p">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="about__com reveal">
          <h4>Jamoatchilik faoliyati</h4>
          <ul>
            {community.map((c) => (
              <li key={c.text}>
                <u>{c.tag}</u>
                {c.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
