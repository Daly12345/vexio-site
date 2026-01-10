"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
    answer:
      "El tiempo de entrega depende del plan que elijas. Una landing page básica puede estar lista en 3-5 días, mientras que un sitio más completo puede tomar de 10 a 25 días. Te daremos un tiempo estimado específico después de conocer los detalles de tu proyecto.",
  },
  {
    question: "¿Qué necesito para empezar mi proyecto?",
    answer:
      "Para comenzar necesitamos: tu logo (si lo tienes), textos o información sobre tu negocio, fotos de tus productos/servicios (o podemos usar imágenes de stock), y tus ideas sobre colores o estilo que te gusten. Si no tienes todo esto, no te preocupes, te ayudamos en el proceso.",
  },
  {
    question: "¿El hosting y dominio están incluidos?",
    answer:
      "Todos nuestros planes incluyen hosting y dominio por 1 año. Después del primer año, la renovación tiene un costo aproximado de $1,500 - $2,000 MXN anuales dependiendo del dominio que elijas.",
  },
  {
    question: "¿Puedo hacer cambios después de que esté lista?",
    answer:
      "Cada plan incluye un número de revisiones durante el desarrollo. Una vez entregado el proyecto, cambios menores tienen costo adicional. También ofrecemos planes de mantenimiento mensual que incluyen actualizaciones y modificaciones.",
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer:
      "Trabajamos con un esquema de 50% de anticipo para iniciar el proyecto y 50% al momento de la entrega. Aceptamos transferencia bancaria, PayPal y pagos en efectivo en ubicaciones acordadas.",
  },
  {
    question: "¿Mi página será responsiva (adaptable a móviles)?",
    answer:
      "Todas nuestras páginas son 100% responsivas. Se verán perfectas en computadoras, tablets y celulares. Esto es fundamental hoy en día ya que más del 60% del tráfico web viene de dispositivos móviles.",
  },
  {
    question: "¿Incluyen SEO en las páginas web?",
    answer:
      "Todos los planes incluyen SEO básico (títulos, descripciones, estructura correcta). Los planes Profesional y superiores incluyen SEO más avanzado con optimización de velocidad, Google My Business y estrategia de palabras clave.",
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer:
      "Antes de desarrollar, te mostramos una propuesta de diseño para tu aprobación. Si no te convence, hacemos los ajustes necesarios. Nuestro objetivo es que quedes 100% satisfecho con el resultado final.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-cyan-400 font-medium">Preguntas Frecuentes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Resolvemos tus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                dudas
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: Simple version without heavy animations */}
        {isMobile ? (
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-900/95 rounded-xl border overflow-hidden ${
                  openIndex === index
                    ? "border-cyan-500/50"
                    : "border-gray-800"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3"
                >
                  <span className="text-base font-medium text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-6 h-6 bg-cyan-500/10 rounded flex items-center justify-center transition-transform duration-150 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Accordion content - transición suave con max-height */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-150 ease-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4">
                    <div className="pt-2 border-t border-gray-800">
                      <p className="text-gray-400 text-sm leading-relaxed pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop: Full animations */
          <StaggerContainer className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div
                  className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                >
                  {/* Glassmorphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="relative w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-gray-800">
                            <p className="text-gray-400 leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">¿Tienes otra pregunta?</p>
            <a
              href="https://wa.me/5213222440437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
