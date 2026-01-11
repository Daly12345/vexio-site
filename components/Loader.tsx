"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    // Force scroll to top on page load - non-blocking
    if (typeof window !== "undefined" && window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Return null - no visual loader to avoid blocking FCP
  return null;
}
