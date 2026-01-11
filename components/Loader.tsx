"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    // Force scroll to top on page load - non-blocking
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  // No visual loader - let content render immediately for better FCP/LCP
  return null;
}
