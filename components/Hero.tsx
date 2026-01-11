"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import MagneticButton from "./MagneticButton";
import { usePerformance } from "./PerformanceProvider";

export default function Hero() {
  const { mode } = usePerformance();
  const isHighPerformance = mode === "high" || mode === "detecting";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // For 3D tilt effect on mockup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Skip mouse tracking on mobile or low performance mode
    if (isMobile || !isHighPerformance) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile, isHighPerformance]);

  // CLS-optimized variants - only animate opacity, not position
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Orbiting elements data
  const orbitingIcons = [
    { icon: "⚡", delay: 0, duration: 20, radius: 180, color: "from-yellow-400 to-orange-500" },
    { icon: "🎨", delay: 2, duration: 25, radius: 220, color: "from-pink-400 to-purple-500" },
    { icon: "🚀", delay: 4, duration: 22, radius: 200, color: "from-cyan-400 to-blue-500" },
    { icon: "💎", delay: 6, duration: 28, radius: 240, color: "from-blue-400 to-indigo-500" },
  ];

  // Glowing dots positions
  const glowingDots = isHighPerformance ? [
    { left: 5, top: 10 }, { left: 15, top: 80 }, { left: 25, top: 30 },
    { left: 35, top: 60 }, { left: 45, top: 15 }, { left: 55, top: 85 },
    { left: 65, top: 40 }, { left: 75, top: 70 }, { left: 85, top: 25 },
    { left: 95, top: 55 }, { left: 10, top: 45 }, { left: 20, top: 90 },
    { left: 30, top: 20 }, { left: 40, top: 75 }, { left: 50, top: 5 },
    { left: 60, top: 65 }, { left: 70, top: 35 }, { left: 80, top: 95 },
    { left: 90, top: 50 }, { left: 8, top: 72 }, { left: 22, top: 12 },
    { left: 38, top: 88 }, { left: 52, top: 42 }, { left: 68, top: 8 },
    { left: 78, top: 58 }, { left: 88, top: 32 }, { left: 3, top: 38 },
    { left: 47, top: 92 }, { left: 63, top: 18 }, { left: 93, top: 78 },
  ] : [
    { left: 10, top: 15 }, { left: 25, top: 75 }, { left: 40, top: 30 },
    { left: 55, top: 85 }, { left: 70, top: 20 }, { left: 85, top: 60 },
    { left: 15, top: 50 }, { left: 45, top: 10 }, { left: 75, top: 45 },
    { left: 30, top: 90 }, { left: 60, top: 40 }, { left: 90, top: 70 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

      {/* Animated gradient mesh - only animate in high performance mode */}
      <div className="absolute inset-0">
        {isHighPerformance ? (
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 20% 40%, rgba(6, 182, 212, 0.15), transparent),
                radial-gradient(ellipse 60% 40% at 80% 60%, rgba(59, 130, 246, 0.15), transparent),
                radial-gradient(ellipse 50% 30% at 50% 80%, rgba(139, 92, 246, 0.1), transparent)
              `,
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full opacity-70"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 20% 40%, rgba(6, 182, 212, 0.12), transparent),
                radial-gradient(ellipse 60% 40% at 80% 60%, rgba(59, 130, 246, 0.12), transparent),
                radial-gradient(ellipse 50% 30% at 50% 80%, rgba(139, 92, 246, 0.08), transparent)
              `,
            }}
          />
        )}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Floating geometric shapes - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Large rotating rings */}
        {isHighPerformance ? (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
          </>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-cyan-500/10 rounded-full animate-spin-slow" />
        )}

        {/* Floating squares */}
        {isHighPerformance ? (
          <>
            <motion.div
              className="absolute top-20 left-[15%] w-20 h-20 border border-cyan-500/20 rounded-lg"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                y: [-20, 20, -20],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-32 right-[10%] w-16 h-16 border border-purple-500/20 rounded-lg"
              animate={{
                rotate: [0, -90, -180, -270, -360],
                y: [20, -20, 20],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : (
          <>
            <div className="absolute top-20 left-[15%] w-16 h-16 border border-cyan-500/15 rounded-lg rotate-12" />
            <div className="absolute bottom-32 right-[10%] w-12 h-12 border border-purple-500/15 rounded-lg -rotate-12" />
          </>
        )}

        {/* Glowing dots */}
        {glowingDots.map((pos, i) => (
          isHighPerformance ? (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
          ) : (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse-dot"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          )
        ))}
      </div>

      {/* Parallax gradient orbs - Hidden on mobile or low performance */}
      {!isMobile && isHighPerformance && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -2,
              y: mousePosition.y * -2,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
        </>
      )}
      {/* Static orbs for low performance */}
      {!isMobile && !isHighPerformance && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-5 py-2.5 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-cyan-400 font-medium">Disponibles para nuevos proyectos</span>
              </motion.div>
            </motion.div>

            {/* Main headline with animated gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]"
            >
              <span className="text-white block mb-2">Creamos sitios</span>
              <span className="text-white block mb-2">web que</span>
              <motion.span
                className="relative inline-block"
              >
                {isHighPerformance ? (
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-300%"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    impresionan
                  </motion.span>
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    impresionan
                  </span>
                )}
                {/* Underline decoration */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                >
                  <motion.path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Diseño profesional, desarrollo rápido y resultados que convierten visitantes en clientes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton strength={0.4} radius={120}>
                <motion.a
                  href="https://wa.me/5213222440437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden inline-flex"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Cotiza tu proyecto
                  </span>
                </motion.a>
              </MagneticButton>
              <MagneticButton strength={0.4} radius={120}>
                <motion.a
                  href="#precios"
                  className="group relative border-2 border-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden backdrop-blur-sm inline-flex"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(6, 182, 212, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Ver precios
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.a>
              </MagneticButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
            >
              {[
                { number: "100+", label: "Proyectos" },
                { number: "3-5", label: "Días entrega" },
                { number: "24/7", label: "Soporte" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-cyan-400">{stat.number}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Mobile mockup - Simplified version for smaller screens */}
            <motion.div
              className="mt-10 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="relative mx-auto max-w-xs">
                {/* Phone mockup for mobile */}
                <div>
                  <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl border border-gray-700 mx-auto w-[200px]">
                    {/* Phone notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />

                    {/* Phone screen */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-[1.5rem] overflow-hidden aspect-[9/19] p-3 pt-6">
                      {/* Mini nav */}
                      <div className="w-16 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mb-4" />

                      {/* Content lines */}
                      <div className="space-y-2 mb-4">
                        <div className="w-full h-2 bg-white/80 rounded" />
                        <div className="w-3/4 h-2 bg-gray-600 rounded" />
                      </div>

                      {/* Image placeholder */}
                      <div className="w-full aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 mb-4" />

                      {/* More content */}
                      <div className="space-y-2">
                        <div className="w-full h-1.5 bg-gray-700 rounded" />
                        <div className="w-2/3 h-1.5 bg-gray-700 rounded" />
                      </div>

                      {/* CTA button */}
                      <div className="w-20 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 mx-auto" />
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-cyan-500/30 blur-xl rounded-full" />
                </div>

                {/* Floating icons - static on mobile */}
                <div className="absolute -left-4 top-1/4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-sm shadow-lg">
                  ⚡
                </div>
                <div className="absolute -right-4 top-1/3 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-sm shadow-lg">
                  🚀
                </div>
                <div className="absolute -right-2 bottom-1/4 w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-sm shadow-lg">
                  🎨
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Device Mockup (Desktop only) */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Orbiting elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isHighPerformance ? (
                // Full animated orbiting icons
                orbitingIcons.map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: item.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: item.delay,
                    }}
                    style={{
                      width: item.radius * 2,
                      height: item.radius * 2,
                    }}
                  >
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: item.delay,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                // Simplified CSS animation for low performance
                <div
                  className="absolute animate-spin-slow"
                  style={{ width: 360, height: 360 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-lg shadow-lg">
                    ⚡
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-lg shadow-lg">
                    🚀
                  </div>
                </div>
              )}
            </div>

            {/* 3D Laptop mockup */}
            <motion.div
              className="relative z-10"
              style={isHighPerformance ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
              } : {}}
            >
              {/* Laptop frame */}
              <div className="relative mx-auto w-[500px]">
                {/* Screen */}
                <div className="relative bg-gray-900 rounded-t-xl p-2 shadow-2xl border border-gray-700">
                  {/* Browser chrome */}
                  <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-400 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        tuempresa.com
                      </div>
                    </div>
                  </div>

                  {/* Website preview */}
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-b-lg overflow-hidden aspect-[16/10]">
                    {/* Mini website mockup */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Nav */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-20 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded" />
                        <div className="flex gap-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-12 h-2 bg-gray-700 rounded" />
                          ))}
                        </div>
                      </div>

                      {/* Hero content */}
                      <div className="flex-1 flex items-center">
                        <div className="flex-1 space-y-3">
                          <div className="w-3/4 h-4 bg-white/90 rounded" />
                          <div className="w-1/2 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
                          <div className="w-2/3 h-2 bg-gray-600 rounded mt-4" />
                          <div className="w-1/2 h-2 bg-gray-600 rounded" />
                          {isHighPerformance ? (
                            <motion.div
                              className="w-24 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          ) : (
                            <div className="w-24 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
                          )}
                        </div>
                        <div className="w-1/3">
                          {isHighPerformance ? (
                            <motion.div
                              className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30"
                              animate={{
                                boxShadow: [
                                  "0 0 20px rgba(6, 182, 212, 0.2)",
                                  "0 0 40px rgba(6, 182, 212, 0.4)",
                                  "0 0 20px rgba(6, 182, 212, 0.2)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          ) : (
                            <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/20" />
                          )}
                        </div>
                      </div>

                      {/* Cards preview */}
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {[...Array(3)].map((_, i) => (
                          isHighPerformance ? (
                            <motion.div
                              key={i}
                              className="bg-gray-800/50 rounded-lg p-2 border border-gray-700/50"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.5 + i * 0.2 }}
                            >
                              <div className="w-6 h-6 bg-cyan-500/20 rounded mb-2" />
                              <div className="w-full h-1.5 bg-gray-700 rounded mb-1" />
                              <div className="w-2/3 h-1.5 bg-gray-700 rounded" />
                            </motion.div>
                          ) : (
                            <div
                              key={i}
                              className="bg-gray-800/50 rounded-lg p-2 border border-gray-700/50"
                            >
                              <div className="w-6 h-6 bg-cyan-500/20 rounded mb-2" />
                              <div className="w-full h-1.5 bg-gray-700 rounded mb-1" />
                              <div className="w-2/3 h-1.5 bg-gray-700 rounded" />
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div className="relative">
                  <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-4 rounded-b-xl mx-8" />
                  <div className="bg-gradient-to-b from-gray-600 to-gray-700 h-2 rounded-b-lg mx-20" />
                </div>

                {/* Reflection/glow under laptop */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-500/20 blur-2xl rounded-full" />
              </div>
            </motion.div>

            {/* Floating phone mockup */}
            {isHighPerformance ? (
              <motion.div
                className="absolute -right-4 bottom-10 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-[140px] bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-700">
                    {/* Phone notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />

                    {/* Phone screen */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden aspect-[9/19] p-3">
                      <div className="w-12 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mb-3" />
                      <div className="space-y-2 mb-3">
                        <div className="w-full h-2 bg-white/80 rounded" />
                        <div className="w-3/4 h-2 bg-gray-600 rounded" />
                      </div>
                      <div className="w-full aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-3 border border-cyan-500/30" />
                      <div className="space-y-2">
                        <div className="w-full h-1.5 bg-gray-700 rounded" />
                        <div className="w-2/3 h-1.5 bg-gray-700 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Phone glow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-cyan-500/30 blur-xl rounded-full" />
                </motion.div>
              </motion.div>
            ) : (
              <div className="absolute -right-4 bottom-10 z-20">
                <div className="w-[130px] bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-700">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full" />
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden aspect-[9/19] p-3">
                    <div className="w-12 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mb-3" />
                    <div className="space-y-2 mb-3">
                      <div className="w-full h-2 bg-white/80 rounded" />
                      <div className="w-3/4 h-2 bg-gray-600 rounded" />
                    </div>
                    <div className="w-full aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-3 border border-cyan-500/30" />
                    <div className="space-y-2">
                      <div className="w-full h-1.5 bg-gray-700 rounded" />
                      <div className="w-2/3 h-1.5 bg-gray-700 rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-cyan-500/20 blur-lg rounded-full" />
              </div>
            )}

            {/* Floating code snippet */}
            {isHighPerformance ? (
              <motion.div
                className="absolute -left-8 top-20 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-gray-700 font-mono text-xs">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-1">
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">website</span> <span className="text-white">=</span> <span className="text-cyan-400">create</span><span className="text-white">(</span><span className="text-orange-400">&quot;amazing&quot;</span><span className="text-white">);</span></div>
                      <div><span className="text-purple-400">await</span> <span className="text-blue-400">website</span><span className="text-white">.</span><span className="text-cyan-400">deploy</span><span className="text-white">();</span></div>
                      <motion.div
                        className="text-green-400"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✓ Live en 3 días
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="absolute -left-8 top-20 z-20">
                <div className="bg-gray-900/95 rounded-lg p-3 shadow-xl border border-gray-700 font-mono text-xs">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">website</span> <span className="text-white">=</span> <span className="text-cyan-400">create</span><span className="text-white">(</span><span className="text-orange-400">&quot;amazing&quot;</span><span className="text-white">);</span></div>
                    <div><span className="text-purple-400">await</span> <span className="text-blue-400">website</span><span className="text-white">.</span><span className="text-cyan-400">deploy</span><span className="text-white">();</span></div>
                    <div className="text-green-400">✓ Live en 3 días</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {isHighPerformance ? (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-500"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 bg-cyan-400 rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce-slow" />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
