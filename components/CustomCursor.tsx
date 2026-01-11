"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [shouldRender, setShouldRender] = useState(false);

  // Check if we should render the cursor
  useEffect(() => {
    // Skip on mobile, touch devices, or low performance mode
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLowPerformance = document.documentElement.dataset.performance === "low";

    setShouldRender(!isMobile && !prefersReducedMotion && !isLowPerformance);
  }, []);

  // Early return - skip all the expensive hooks
  if (!shouldRender) return null;

  return <CursorInner />;
}

// Inner component only renders on desktop with good performance
function CursorInner() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Throttled cursor movement for better performance
    let ticking = false;
    const moveCursor = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
          if (!isVisible) setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseEnter, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });
    document.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Simplified cursor - single element for better performance */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, willChange: "transform" }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div
            className={`w-6 h-6 rounded-full border-2 transition-colors duration-150 ${
              isHovering ? "border-cyan-400 bg-cyan-400/20" : "border-cyan-400/50"
            }`}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </>
  );
}
