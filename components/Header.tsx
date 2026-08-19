"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Arrow } from "./Arrow";

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`hdr${stuck ? " is-stuck" : ""}`}>
        <div className="wrap hdr__in">
          <a href="#top" className="brand" aria-label={site.name}>
            UMIDJON<span>.</span>
          </a>

          <nav className="nav" aria-label="Asosiy navigatsiya">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hdr__right">
            <span className="status">
              <i className="dot" aria-hidden="true" />
              Loyihaga ochiq
            </span>
            <a
              className="btn btn--primary"
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Loyiha boshlash
              <Arrow />
            </a>
            <button
              className={`burger${open ? " is-open" : ""}`}
              aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <i /> <i /> <i />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav className="drawer__nav" aria-label="Mobil navigatsiya">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <i>{n.idx}</i>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="drawer__foot">
          <span className="status" style={{ display: "inline-flex", alignSelf: "flex-start" }}>
            <i className="dot" aria-hidden="true" />
            Loyihaga ochiq
          </span>
          <a
            className="btn btn--primary"
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            Telegram orqali yozish
            <Arrow />
          </a>
          <a className="btn btn--ghost" href={site.phoneHref} tabIndex={open ? 0 : -1}>
            {site.phone}
          </a>
        </div>
      </div>
    </>
  );
}
