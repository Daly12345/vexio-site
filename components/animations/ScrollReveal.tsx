"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Móvil: animaciones más rápidas y suaves
  const mobileDuration = duration * 0.5;
  const mobileDistance = distance * 0.4;
  const mobileDelay = delay * 0.5;

  const actualDistance = isMobile ? mobileDistance : distance;

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: actualDistance, x: 0 };
      case "down":
        return { y: -actualDistance, x: 0 };
      case "left":
        return { x: actualDistance, y: 0 };
      case "right":
        return { x: -actualDistance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
      transition={{
        duration: isMobile ? mobileDuration : duration,
        delay: isMobile ? mobileDelay : delay,
        ease: isMobile ? "easeOut" : [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
