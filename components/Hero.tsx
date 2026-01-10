"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import MagneticButton from "./MagneticButton";

// Mobile Hero - ZERO animations, pure static HTML
function MobileHero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm text-cyan-400 font-medium">Disponibles para nuevos proyectos</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white block mb-1">Creamos sitios</span>
            <span className="text-white block mb-1">web que</span>
            <span className="text-cyan-400">impresionan</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Diseño profesional, desarrollo rápido y resultados que convierten visitantes en clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="https://wa.me/5213222440437"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-4 rounded-full text-lg font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Cotiza tu proyecto
            </a>
            <a
              href="#precios"
              className="flex items-center justify-center gap-2 border border-gray-700 text-white px-6 py-4 rounded-full text-lg font-semibold"
            >
              Ver precios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-cyan-400">100+</span>
              <span className="text-sm text-gray-500">Proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-cyan-400">3-5</span>
              <span className="text-sm text-gray-500">Días entrega</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-cyan-400">24/7</span>
              <span className="text-sm text-gray-500">Soporte</span>
            </div>
          </div>

          {/* Simple phone mockup */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-900 rounded-3xl p-2 border border-gray-800 w-48">
              <div className="bg-gray-950 rounded-2xl p-3 aspect-[9/16]">
                <div className="w-12 h-1.5 bg-cyan-500 rounded mb-3" />
                <div className="space-y-2 mb-3">
                  <div className="w-full h-1.5 bg-white/60 rounded" />
                  <div className="w-3/4 h-1.5 bg-gray-700 rounded" />
                </div>
                <div className="w-full aspect-video bg-cyan-500/10 rounded-lg border border-cyan-500/20 mb-3" />
                <div className="w-16 h-4 bg-cyan-500 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Desktop Hero with all animations
function DesktopHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

  useEffect(() => {
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
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  } as const;

  const orbitingIcons = [
    { icon: "⚡", delay: 0, duration: 20, radius: 180, color: "from-yellow-400 to-orange-500" },
    { icon: "🎨", delay: 2, duration: 25, radius: 220, color: "from-pink-400 to-purple-500" },
    { icon: "🚀", delay: 4, duration: 22, radius: 200, color: "from-cyan-400 to-blue-500" },
    { icon: "💎", delay: 6, duration: 28, radius: 240, color: "from-blue-400 to-indigo-500" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(6, 182, 212, 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(59, 130, 246, 0.15), transparent),
              radial-gradient(ellipse 50% 30% at 50% 80%, rgba(139, 92, 246, 0.1), transparent)
            `,
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-center lg:text-left space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-5 py-2.5 backdrop-blur-sm" whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}>
                <motion.div className="w-2 h-2 bg-green-400 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-sm text-cyan-400 font-medium">Disponibles para nuevos proyectos</span>
              </motion.div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              <span className="text-white block mb-2">Creamos sitios</span>
              <span className="text-white block mb-2">web que</span>
              <motion.span className="relative inline-block">
                <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-300%" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  impresionan
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Diseño profesional, desarrollo rápido y resultados que convierten visitantes en clientes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton strength={0.4} radius={120}>
                <motion.a href="https://wa.me/5213222440437" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden inline-flex" whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }} whileTap={{ scale: 0.95 }}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Cotiza tu proyecto
                  </span>
                </motion.a>
              </MagneticButton>
              <MagneticButton strength={0.4} radius={120}>
                <motion.a href="#precios" className="group relative border-2 border-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden backdrop-blur-sm inline-flex" whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }} whileTap={{ scale: 0.95 }}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Ver precios
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.a>
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              {[{ number: "100+", label: "Proyectos" }, { number: "3-5", label: "Días entrega" }, { number: "24/7", label: "Soporte" }].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-cyan-400">{stat.number}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative hidden lg:block" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {orbitingIcons.map((item, i) => (
                <motion.div key={i} className="absolute" animate={{ rotate: 360 }} transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: item.delay }} style={{ width: item.radius * 2, height: item.radius * 2 }}>
                  <motion.div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-xl shadow-lg`} animate={{ rotate: -360 }} transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: item.delay }}>
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div className="relative z-10" style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}>
              <div className="relative mx-auto w-[500px]">
                <div className="relative bg-gray-900 rounded-t-xl p-2 shadow-2xl border border-gray-700">
                  <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-400">tuempresa.com</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-b-lg overflow-hidden aspect-[16/10] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-20 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded" />
                      <div className="flex gap-2">{[...Array(4)].map((_, i) => <div key={i} className="w-12 h-2 bg-gray-700 rounded" />)}</div>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="flex-1 space-y-3">
                        <div className="w-3/4 h-4 bg-white/90 rounded" />
                        <div className="w-1/2 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
                        <div className="w-2/3 h-2 bg-gray-600 rounded mt-4" />
                        <div className="w-24 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-4 rounded-b-xl mx-8" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-500/20 blur-2xl rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
