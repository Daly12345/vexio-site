"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Diseño UI/UX", level: 90 },
  { name: "E-commerce", level: 85 },
  { name: "SEO", level: 88 },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rapidez",
    description: "Entregamos en tiempo récord sin sacrificar calidad",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Confianza",
    description: "Transparencia total en precios y procesos",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Pasión",
    description: "Amamos lo que hacemos y se nota en cada proyecto",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte",
    description: "Siempre disponibles para ayudarte",
  },
];

function SkillBar({ skill, index, isMobile }: { skill: (typeof skills)[0]; index: number; isMobile: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        {isMobile ? (
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            style={{ width: `${skill.level}%` }}
          />
        ) : (
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          />
        )}
      </div>
    </div>
  );
}

export default function About() {
  const counterRef = useRef(null);
  const counterInView = useInView(counterRef, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="nosotros" className="relative py-24 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
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
              <p className="text-gray-400 mb-8 leading-relaxed">
                Desde landing pages simples hasta tiendas en línea completas,
                utilizamos las últimas tecnologías para asegurar que tu sitio sea
                rápido, seguro y optimizado para convertir visitantes en clientes.
              </p>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Nuestras Especialidades</h3>
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} isMobile={isMobile} />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Values & Stats */}
          <div className="space-y-8">
            {/* Values grid */}
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={isMobile ? undefined : { scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={isMobile
                      ? { duration: 0.3, delay: index * 0.05 }
                      : { type: "spring", stiffness: 400, damping: 17, delay: index * 0.1 }
                    }
                    className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-6 hover:border-cyan-500/50 transition-colors duration-300 cursor-pointer"
                  >
                    {/* Glow effect on hover - solo desktop */}
                    {!isMobile && (
                      <>
                        <div className="absolute inset-0 rounded-2xl bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300" />
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                      </>
                    )}

                    <div className="relative">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
                        {value.icon}
                      </div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">{value.title}</h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Big stat card */}
            <ScrollReveal direction="right" delay={0.3}>
              <div
                ref={counterRef}
                className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 text-center overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse" />

                <div className="relative">
                  <motion.div
                    className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={counterInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    100%
                  </motion.div>
                  <p className="text-xl text-white font-medium mb-2">Compromiso con tu éxito</p>
                  <p className="text-gray-400">
                    No descansamos hasta que tu proyecto esté exactamente como lo imaginaste
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5213222440437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hablemos
                </a>
                <a
                  href="#proceso"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10"
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
