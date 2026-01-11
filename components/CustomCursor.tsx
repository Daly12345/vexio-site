"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { usePerformance } from "./PerformanceProvider";

export default function CustomCursor() {
  const { mode } = usePerformance();
  const [shouldRender, setShouldRender] = useState(false);

  // Check if we should render the cursor
  useEffect(() => {
    // Skip on mobile or touch devices
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;

    // Only render on desktop with high performance mode
    setShouldRender(!isMobile && mode === "high");
  }, [mode]);

  // Early return - skip all the expensive hooks
  if (!shouldRender) return null;

  return <CursorInner />;
}

// Inner component only renders on desktop with good performance
function CursorInner() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

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

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot - follows cursor directly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 0 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>
      </motion.div>

      {/* Ring - follows cursor directly (no delay) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.9 : isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div
            className={`w-8 h-8 rounded-full border-2 transition-colors duration-200 ${
              isHovering ? "border-cyan-400 bg-cyan-400/20" : "border-cyan-400/50"
            }`}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
