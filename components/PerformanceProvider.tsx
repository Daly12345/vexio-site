"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type PerformanceMode = "high" | "low" | "detecting";

interface PerformanceContextType {
  mode: PerformanceMode;
  fps: number;
  setMode: (mode: PerformanceMode) => void;
}

const PerformanceContext = createContext<PerformanceContextType>({
  mode: "detecting",
  fps: 60,
  setMode: () => {},
});

export function usePerformance() {
  return useContext(PerformanceContext);
}

interface Props {
  children: ReactNode;
}

export function PerformanceProvider({ children }: Props) {
  const [mode, setMode] = useState<PerformanceMode>("detecting");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem("performance-mode") as PerformanceMode | null;
    if (savedMode === "high" || savedMode === "low") {
      setMode(savedMode);
      if (savedMode === "low") {
        document.documentElement.dataset.performance = "low";
      }
      return;
    }

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMode("low");
      document.documentElement.dataset.performance = "low";
      return;
    }

    // Measure actual FPS performance
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;
    const fpsSamples: number[] = [];
    const SAMPLE_DURATION = 2000; // 2 seconds of measurement
    const FPS_THRESHOLD = 45; // If FPS drops below this, switch to low mode
    const startTime = performance.now();

    const measureFPS = (currentTime: number) => {
      frameCount++;
      const elapsed = currentTime - lastTime;

      // Sample FPS every 500ms
      if (elapsed >= 500) {
        const currentFps = Math.round((frameCount / elapsed) * 1000);
        fpsSamples.push(currentFps);
        setFps(currentFps);
        frameCount = 0;
        lastTime = currentTime;
      }

      // After measurement period, determine mode
      if (currentTime - startTime >= SAMPLE_DURATION) {
        const avgFps = fpsSamples.reduce((a, b) => a + b, 0) / fpsSamples.length;
        const minFps = Math.min(...fpsSamples);

        // Use low mode if average FPS is below threshold or if there were significant drops
        if (avgFps < FPS_THRESHOLD || minFps < 30) {
          setMode("low");
          document.documentElement.dataset.performance = "low";
          localStorage.setItem("performance-mode", "low");
        } else {
          setMode("high");
          document.documentElement.dataset.performance = "high";
          localStorage.setItem("performance-mode", "high");
        }
        return;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    // Start measuring after a short delay to let the page load
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(measureFPS);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Update data attribute when mode changes
  useEffect(() => {
    if (mode !== "detecting") {
      document.documentElement.dataset.performance = mode;
    }
  }, [mode]);

  return (
    <PerformanceContext.Provider value={{ mode, fps, setMode }}>
      {children}
    </PerformanceContext.Provider>
  );
}
