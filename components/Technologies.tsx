"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "WordPress", color: "#21759B" },
  { name: "Shopify", color: "#7AB55C" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Vercel", color: "#ffffff" },
  { name: "GitHub", color: "#ffffff" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Google", color: "#4285F4" },
];

// Mobile version - zero animations
function MobileTechnologies() {
  return (
    <section className="py-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
            Tecnologías que dominamos
          </p>
          <h2 className="text-xl font-bold text-white">
            Herramientas de <span className="text-cyan-400">clase mundial</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {technologies.slice(0, 8).map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-3 bg-gray-900 border border-gray-800 rounded-lg"
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: tech.color, opacity: 0.8 }}
              />
              <p className="mt-1 text-[9px] text-gray-400 text-center truncate w-full">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          Y muchas más tecnologías según tu proyecto
        </p>
      </div>
    </section>
  );
}

// Desktop version with animations
function DesktopTechnologies() {
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
            Tecnologías que dominamos
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Herramientas de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              clase mundial
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 tech-gradient-left z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 tech-gradient-right z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{ x: [0, -50 * technologies.length] }}
              transition={{ x: { duration: 25, repeat: Infinity, ease: "linear" } }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="relative flex flex-col items-center justify-center w-24 h-24 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl transition-all duration-300 group-hover:border-cyan-500/50">
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <p className="mt-2 text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Y muchas más tecnologías según las necesidades de tu proyecto
        </motion.p>
      </div>
    </section>
  );
}

export default function Technologies() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return isMobile ? <MobileTechnologies /> : <DesktopTechnologies />;
}
