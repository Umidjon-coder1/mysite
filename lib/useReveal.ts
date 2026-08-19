"use client";

import { useEffect } from "react";

/**
 * Bitta IntersectionObserver butun sahifadagi `.reveal` elementlarini kuzatadi.
 * Element ko'ringach `.is-in` qo'shiladi va kuzatuvdan chiqariladi.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.progress) el.style.setProperty("--p", el.dataset.progress);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
