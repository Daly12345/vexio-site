"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect, createContext, useContext } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

// Context to pass mobile state to children
const MobileContext = createContext(true);

// Mobile version - completely static
function MobileStaggerContainer({ children, className = "" }: StaggerContainerProps) {
  return (
    <MobileContext.Provider value={true}>
      <div className={className}>{children}</div>
    </MobileContext.Provider>
  );
}

// Desktop version with animations
function DesktopStaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <MobileContext.Provider value={false}>
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </MobileContext.Provider>
  );
}

export default function StaggerContainer(props: StaggerContainerProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return isMobile ? <MobileStaggerContainer {...props} /> : <DesktopStaggerContainer {...props} />;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const isMobile = useContext(MobileContext);

  // On mobile, just render a plain div
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
