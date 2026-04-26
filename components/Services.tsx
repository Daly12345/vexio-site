"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import TiltCard from "./TiltCard";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Página Web Profesional",
      description:
        "Sitio rápido, responsive y optimizado para SEO local. Listo en 48 horas, con galería, servicios y precios estructurados para tu negocio.",
      features: [
        "Diseño responsive",
        "Optimización de velocidad",
        "SSL incluido",
        "Entrega en 48 horas",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Google My Business",
      description:
        "Configuramos y optimizamos tu ficha en Google para que aparezcas cuando tus clientes buscan en la zona. Fotos, descripción, horarios y categorías afinadas.",
      features: [
        "Ficha optimizada",
        "Fotos profesionales",
        "Categorías y horarios",
        "Más visibilidad local",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Conexión a WhatsApp",
      description:
        "Botón flotante de WhatsApp en cada página, vinculado directo a tu chat. Tus clientes te escriben en un click, sin formularios ni fricción.",
      features: [
        "Botón flotante en todo el sitio",
        "Mensaje pre-llenado",
        "Cero fricción para el cliente",
        "Conversiones inmediatas",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12l-2 0m4-7l-1.4-1.4M5 19l-1.4 1.4M19 12l2 0m-4-7l1.4-1.4M19 19l1.4 1.4M12 5l0-2m0 16l0 2M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Hosting y Soporte",
      description:
        "Hosting + dominio incluidos el primer año, sin cargos extra. Más 2 semanas de soporte después de la entrega para cualquier ajuste o cambio.",
      features: [
        "Hosting + dominio 1 año",
        "Soporte 2 semanas",
        "Cambios incluidos",
        "Sin mensualidades",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm text-cyan-400 font-medium">Nuestros Servicios</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Todo lo que tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                negocio necesita
              </span>{" "}
              online
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sitio + Google My Business + WhatsApp en un solo paquete. $3,000 MXN, una sola vez.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <TiltCard tiltAmount={8} scale={1.02} className="h-full">
                <div
                  className="group relative glass-card p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 h-full"
                >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated border gradient */}
                <motion.div
                  className={`absolute -inset-[1px] bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} bg-opacity-20 rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    style={{ backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                  >
                    <div className="text-cyan-400">{service.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.svg
                          className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ scale: 1.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </motion.svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="https://wa.me/5213222440437?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold overflow-hidden btn-shine"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Cotizar por WhatsApp
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
