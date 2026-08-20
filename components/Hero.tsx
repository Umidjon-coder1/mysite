"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./Arrow";

const WORDS = ["sotuvchi sayt", "lending", "internet-do'kon", "redizayn"];

function useTyped() {
  const [text, setText] = useState(WORDS[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let word = 0;
    let char = WORDS[0].length;
    let erasing = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      // Tab fonda bo'lsa — qayta render qilmaymiz
      if (document.hidden) {
        timer = setTimeout(tick, 1000);
        return;
      }
      const target = WORDS[word];
      char += erasing ? -1 : 1;
      setText(target.slice(0, char));

      let delay = erasing ? 45 : 75;
      if (!erasing && char === target.length) {
        erasing = true;
        delay = 2200;
      } else if (erasing && char === 0) {
        erasing = false;
        word = (word + 1) % WORDS.length;
        delay = 320;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

export default function Hero() {
  const typed = useTyped();
  const [shotOk, setShotOk] = useState(true);

  return (
    <section className="hero" id="top">
      <div className="gridlines" aria-hidden="true" />
      <div className="orb orb--a" aria-hidden="true" />
      <div className="orb orb--b" aria-hidden="true" />

      <div className="wrap hero__in">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="term reveal">
              <b>umidjon@studio</b>:~$ {typed}
              <i className="term__caret" aria-hidden="true" />
            </p>

            <h1 className="reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
              Biznesingiz uchun <span className="accent">sotuvchi sayt</span>{" "}
              <span className="muted">yarataman. 🚀</span>
            </h1>

            <p className="hero__sub reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
              Chiroyli emas — <b>ishlaydigan</b> sayt. Tahlil, sotuvchi matn va premium dizayn
              bir tizimda: tashrifchi arizaga aylanadi, siz esa sotasiz.
            </p>

            <div className="hero__cta reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
              <a
                className="btn btn--primary"
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Loyihani muhokama qilish
                <Arrow />
              </a>
              <a className="btn btn--ghost" href="#portfolio">
                Ishlarimni ko&apos;rish
              </a>
            </div>

            <p className="hero__meta reveal" style={{ "--d": "320ms" } as React.CSSProperties}>
              <b>50+</b> saytlar <i>·</i> <b>3+</b> yil tajriba <i>·</i> <b>90%</b> natija{" "}
              <i>·</i> {site.location}
            </p>
          </div>

          <div className="hero__vis reveal" style={{ "--d": "380ms" } as React.CSSProperties}>
            <figure className="shot">
              <span className="shot__tag mono" aria-hidden="true">
                // UMIDJON MAJIDOV
              </span>

              <div className={`shot__img${shotOk ? "" : " is-empty"}`}>
                <span className="shot__mono" aria-hidden="true">
                  UM
                </span>
                {shotOk && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/img/umidjon.jpg"
                    alt="Umidjon Majidov — web designer va developer, ish stolida"
                    width={960}
                    height={1280}
                    fetchPriority="high"
                    onError={() => setShotOk(false)}
                  />
                )}
              </div>

              <figcaption className="shot__cap">
                <span className="shot__name">Umidjon Majidov</span>
                <span className="shot__role">Web designer &amp; developer · Toshkent</span>
              </figcaption>
            </figure>

            <aside className="glass" aria-label="Qisqacha ko'rsatkichlar">
              <p className="glass__st">
                <i className="dot" aria-hidden="true" />
                Buyurtma qabul qilinmoqda
              </p>
              <dl className="glass__rows">
                <div>
                  <dt>Tajriba</dt>
                  <dd className="num">3+ yil</dd>
                </div>
                <div>
                  <dt>Loyiha</dt>
                  <dd className="num">50+</dd>
                </div>
                <div>
                  <dt>Muddat</dt>
                  <dd className="num">7–10 kun</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
