"use client";

import { useState, useEffect } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Diseño UI/UX", level: 90 },
  { name: "E-commerce", level: 85 },
  { name: "SEO", level: 88 },
];

const values = [
  { icon: "⚡", title: "Rapidez", description: "Entregamos en tiempo récord sin sacrificar calidad" },
  { icon: "🛡️", title: "Confianza", description: "Transparencia total en precios y procesos" },
  { icon: "❤️", title: "Pasión", description: "Amamos lo que hacemos y se nota en cada proyecto" },
  { icon: "🎯", title: "Soporte", description: "Siempre disponibles para ayudarte" },
];

// MOBILE VERSION - 100% STATIC HTML, ZERO JAVASCRIPT ANIMATIONS
function MobileAbout() {
  return (
    <section id="nosotros" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <span className="inline-block text-sm text-cyan-400 font-medium bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Creamos experiencias <span className="text-cyan-400">digitales únicas</span>
          </h2>
          <p className="text-gray-400">
            Somos un equipo apasionado por el desarrollo web y el diseño digital.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 mb-8">
          <h3 className="text-base font-semibold text-white mb-4">Nuestras Especialidades</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-white text-sm">{skill.name}</span>
                  <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: 'linear-gradient(to right, #06b6d4, #3b82f6)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {values.map((value) => (
            <div key={value.title} className="bg-gray-900 rounded-xl border border-gray-800 p-4">
              <div className="text-2xl mb-2">{value.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
              <p className="text-gray-400 text-xs">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl border border-cyan-500/30 p-6 text-center mb-8">
          <div className="text-5xl font-bold text-cyan-400 mb-2">100%</div>
          <p className="text-white font-medium mb-1">Compromiso con tu éxito</p>
          <p className="text-gray-400 text-sm">
            No descansamos hasta que tu proyecto esté exactamente como lo imaginaste
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/5213222440437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-4 rounded-xl font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hablemos
          </a>
          <a
            href="#proceso"
            className="flex items-center justify-center gap-2 border border-gray-700 text-white px-6 py-4 rounded-xl font-semibold"
          >
            Ver proceso
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Desktop version - loaded dynamically only on desktop
function DesktopAbout() {
  // Lazy import Framer Motion only when needed
  const { motion, useInView } = require("framer-motion");
  const { useRef } = require("react");
  const ScrollReveal = require("./animations/ScrollReveal").default;

  function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref} className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-cyan-400">{skill.level}%</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  }

  return (
    <section id="nosotros" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-cyan-400 font-medium">Sobre Nosotros</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Creamos experiencias{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  digitales únicas
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Somos un equipo apasionado por el desarrollo web y el diseño digital.
                Nos especializamos en crear sitios web que no solo se ven increíbles,
                sino que también generan resultados reales para tu negocio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Nuestras Especialidades</h3>
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-6 hover:border-cyan-500/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 text-2xl">
                      {value.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  100%
                </div>
                <p className="text-xl text-white font-medium mb-2">Compromiso con tu éxito</p>
                <p className="text-gray-400">
                  No descansamos hasta que tu proyecto esté exactamente como lo imaginaste
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5213222440437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hablemos
                </a>
                <a
                  href="#proceso"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-700 text-white px-6 py-4 rounded-xl font-semibold"
                >
                  Ver proceso
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 1024);
  }, []);

  // Always render MobileAbout on first render (SSR) and until we know if it's desktop
  if (!mounted || isMobile) {
    return <MobileAbout />;
  }

  return <DesktopAbout />;
}
