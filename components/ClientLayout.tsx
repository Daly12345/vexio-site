"use client";

import dynamic from "next/dynamic";
import { ReactNode, useEffect } from "react";

// Dynamic imports with ssr: false for client-only components
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

interface ClientLayoutProps {
  children: ReactNode;
}

// Detect if device has low performance capabilities
function detectLowPerformance(): boolean {
  if (typeof window === "undefined") return false;

  // Check for reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  // Check hardware concurrency (CPU cores) - i5 2400 has 4 cores
  const cores = navigator.hardwareConcurrency || 4;
  if (cores <= 4) {
    return true;
  }

  // Check device memory if available (in GB)
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  if (memory && memory <= 4) {
    return true;
  }

  return false;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    // Auto-detect low performance and set data attribute
    if (detectLowPerformance()) {
      document.documentElement.dataset.performance = "low";
    }

    // Also check if user has localStorage preference
    const savedPerformance = localStorage.getItem("performance-mode");
    if (savedPerformance === "low") {
      document.documentElement.dataset.performance = "low";
    }
  }, []);

  return (
    <>
      <Loader />
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        {children}
        <BackToTop />
      </SmoothScroll>
    </>
  );
}
