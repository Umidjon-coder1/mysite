"use client";

import { useState } from "react";
import { reasons } from "@/lib/site";

export default function WhyWebsite() {
  const [active, setActive] = useState(0);

  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="why__head">
          <div>
            <p className="eyebrow reveal">Nima uchun sayt</p>
            <h2 className="h-sec reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
              Instagram sotadi. <em>Sayt ishontiradi.</em>
            </h2>
          </div>
          <p className="lede reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            Bloger emas, biznesga o&apos;z maydoni kerak — algoritmga bog&apos;liq bo&apos;lmagan,
            har kuni ishlaydigan va o&apos;lchanadigan maydon. Panelni oching.
          </p>
        </div>

        <div className="acc reveal" role="tablist" aria-label="Nima uchun sayt kerak">
          {reasons.map((r, i) => {
            const on = i === active;
            return (
              <button
                key={r.i}
                type="button"
                role="tab"
                aria-selected={on}
                className={`acc__p${on ? " is-on" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="acc__rail" aria-hidden="true" />

                <span className="acc__mini">
                  <span className="acc__n mono">{r.i}</span>
                  <span className="acc__t">{r.h}</span>
                </span>

                <span className="acc__full">
                  <span className="acc__n mono">{r.i}</span>
                  <span className="acc__h">{r.h}</span>
                  <span className="acc__long">{r.long}</span>
                  <span className="acc__metric">
                    <b className="num">{r.metric}</b>
                    <i>{r.metricLabel}</i>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
