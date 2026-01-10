"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force scroll to top on page load
    window.scrollTo(0, 0);

    // Minimal loader - 200ms to avoid CLS
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-200"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Vexio
      </h1>
    </div>
  );
}
