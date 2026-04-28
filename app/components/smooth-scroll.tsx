"use client";

import { useEffect } from "react";

const DURATION = 900;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function SmoothScroll() {
  useEffect(() => {
    let raf = 0;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = (e.target as Element | null)?.closest('a[href^="#"]') as
        | HTMLAnchorElement
        | null;
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();

      const startY = window.scrollY;
      const rect = (el as HTMLElement).getBoundingClientRect();
      const targetY = rect.top + window.scrollY;
      const distance = targetY - startY;

      if (Math.abs(distance) < 1) {
        history.replaceState(null, "", href);
        return;
      }

      const start = performance.now();
      cancelAnimationFrame(raf);

      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        const y = startY + distance * easeOutCubic(t);
        window.scrollTo({ top: y, left: 0 });
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          history.replaceState(null, "", href);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
