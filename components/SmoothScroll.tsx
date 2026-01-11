"use client";

import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<unknown>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if mobile - disable Lenis on mobile to reduce TBT
    const checkMobile = window.innerWidth < 1024 || "ontouchstart" in window;
    setIsMobile(checkMobile);

    if (checkMobile) {
      // On mobile, just handle anchor links with native smooth scroll
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        if (anchor) {
          const href = anchor.getAttribute("href");
          if (href && href !== "#") {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      };
      document.addEventListener("click", handleAnchorClick);
      return () => document.removeEventListener("click", handleAnchorClick);
    }

    // Desktop only: load and initialize Lenis
    let lenis: unknown;
    let rafId: number;

    import("lenis").then((LenisModule) => {
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        (lenis as { raf: (t: number) => void }).raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    // Handle anchor links for desktop
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement && lenis) {
            (lenis as { scrollTo: (el: HTMLElement, opts: object) => void }).scrollTo(
              targetElement as HTMLElement,
              { offset: -80, duration: 1.5 }
            );
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      if (lenis) {
        (lenis as { destroy: () => void }).destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
