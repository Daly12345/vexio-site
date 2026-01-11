"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { PerformanceProvider } from "./PerformanceProvider";

// Dynamic imports with ssr: false for client-only components
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <PerformanceProvider>
      <Loader />
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        {children}
        <BackToTop />
      </SmoothScroll>
    </PerformanceProvider>
  );
}
