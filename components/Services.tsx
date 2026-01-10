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
      title: "Paginas Web",
      description:
        "Sitios web profesionales, modernos y responsivos adaptados a cualquier dispositivo. Desde landing pages hasta sitios corporativos completos.",
      features: [
        "Diseno responsivo",
        "Optimizacion de velocidad",
        "SSL incluido",
        "Hosting y dominio",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "E-commerce",
      description:
        "Tiendas en linea completas con pasarelas de pago integradas. Vende tus productos 24/7 con un sistema profesional y seguro.",
      features: [
        "Catalogo de productos",
        "Pasarela de pagos",
        "Sistema de inventario",
        "Dashboard de ventas",
      ],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "SEO y Posicionamiento",
      description:
        "Optimizacion para motores de busqueda que aumenta tu visibilidad en Google y atrae mas clientes potenciales a tu negocio.",
      features: [
        "Analisis de keywords",
        "Optimizacion on-page",
        "Google My Business",
        "Reportes mensuales",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mantenimiento Web",
      description:
        "Mantenimiento continuo de tu sitio web. Actualizaciones, respaldos, seguridad y soporte tecnico para que tu web siempre funcione.",
      features: [
        "Actualizaciones regulares",
        "Respaldos automaticos",
        "Monitoreo de seguridad",
        "Soporte prioritario",
      ],
      gradient: "from-pink-500 to-cyan-500",
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
              Soluciones digitales{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                completas
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Todo lo que necesitas para impulsar tu presencia en linea y hacer crecer tu negocio
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
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

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
              href="#contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold overflow-hidden btn-shine"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Solicita una cotizacion
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
