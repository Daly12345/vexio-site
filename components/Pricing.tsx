"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

export default function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState<number>(2); // Profesional por defecto

  const plans = [
    {
      name: "Micro",
      price: "$3,500",
      priceRange: "$3,500 - $4,500",
      maintenance: "$800 - $1,200/mes",
      popular: false,
      forWho: "Taquerías, fondas, talleres pequeños",
      features: [
        "Landing page (1 página)",
        "Diseño responsivo",
        "Botón de WhatsApp",
        "Google Maps integrado",
        "Galería básica (5 fotos)",
        "Hosting + Dominio 1 año",
        "Entrega: 3-5 días"
      ],
      highlight: false
    },
    {
      name: "Básico",
      price: "$5,500",
      priceRange: "$5,500 - $8,000",
      maintenance: "$1,500/mes",
      popular: false,
      forWho: "Estéticas, veterinarias, tiendas pequeñas",
      features: [
        "3-5 páginas completas",
        "WhatsApp + formulario de contacto",
        "Galería expandida (12 fotos)",
        "SSL incluido",
        "1 revisión incluida",
        "Hosting + Dominio 1 año",
        "Entrega: 5-7 días"
      ],
      highlight: false
    },
    {
      name: "Profesional",
      price: "$9,000",
      priceRange: "$9,000 - $15,000",
      maintenance: "$2,000/mes",
      popular: true,
      forWho: "Restaurantes, consultorios, tours",
      features: [
        "5-7 páginas profesionales",
        "Menú digital o catálogo",
        "SEO básico incluido",
        "Google My Business configurado",
        "Sistema de citas básico",
        "3 correos corporativos",
        "Hosting + Dominio 1 año",
        "Entrega: 10-15 días"
      ],
      highlight: true
    },
    {
      name: "Premium",
      price: "$16,000",
      priceRange: "$16,000 - $25,000",
      maintenance: "$3,000/mes",
      popular: false,
      forWho: "Hoteles, restaurantes premium, clínicas",
      features: [
        "8-12 páginas diseño personalizado",
        "Sistema de reservaciones con calendario",
        "Versión en inglés incluida",
        "Blog profesional",
        "Chat/chatbot básico",
        "SEO avanzado",
        "10 correos corporativos",
        "Hosting + Dominio 1 año",
        "Entrega: 15-25 días"
      ],
      highlight: false
    },
    {
      name: "E-commerce",
      price: "$25,000",
      priceRange: "$25,000 - $40,000",
      maintenance: "$4,000/mes",
      popular: false,
      forWho: "Boutiques, tiendas que quieren vender online",
      features: [
        "Tienda en línea completa",
        "Hasta 100 productos",
        "Pasarela de pago integrada",
        "Sistema de inventario",
        "Calculadora de envíos",
        "Dashboard de ventas",
        "SEO para productos",
        "Hosting + Dominio 1 año",
        "Entrega: 20-30 días"
      ],
      highlight: false
    }
  ];

  const isHighlighted = (index: number) => {
    return selectedIndex === index;
  };

  return (
    <section id="precios" className="relative py-24 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-cyan-400 font-medium">Planes y Precios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elige el plan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              perfecto
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Todos los planes incluyen hosting y dominio por 1 año. Precios transparentes sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const highlighted = isHighlighted(index);

            return (
              <TiltCard
                key={index}
                className={`relative group transition-all duration-500 ${
                  highlighted ? 'md:scale-[1.02] lg:scale-105 lg:z-10' : ''
                }`}
                tiltAmount={8}
                scale={1}
              >
                <div
                  className={`relative h-full flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border-2 transition-all duration-500 ${
                    highlighted
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                      : 'border-gray-800'
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl transition-opacity duration-500 ${
                    highlighted ? 'opacity-100' : 'opacity-0'
                  }`} />

                  <div className="relative p-6 md:p-8 flex flex-col h-full">
                    {/* Popular badge - altura fija para alinear todas las tarjetas */}
                    <div className="h-7 mb-4">
                      {plan.popular && (
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Más Popular
                        </span>
                      )}
                    </div>

                    {/* Plan name */}
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        highlighted ? 'text-cyan-400' : 'text-white'
                      }`}>{plan.name}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{plan.forWho}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 overflow-hidden">
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 text-sm">MXN</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{plan.priceRange}</p>
                    </div>

                    {/* Maintenance */}
                    <div className="mb-8 py-3 px-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Mantenimiento:</span>
                        <span className="text-sm font-semibold text-cyan-400">{plan.maintenance}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg
                            className={`w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                              highlighted ? 'scale-110' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="https://wa.me/5213222440437"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-4 rounded-xl font-semibold transition-all duration-500 ${
                        highlighted
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl shadow-cyan-500/30'
                          : 'bg-gray-800 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white'
                      }`}
                    >
                      Comenzar
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Custom plan CTA */}
        <div className="mt-20 text-center">
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-12 max-w-3xl mx-auto hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                ¿Necesitas algo personalizado?
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Creamos soluciones a la medida de tu negocio. Contáctanos para una cotización personalizada.
              </p>
              <MagneticButton strength={0.4} radius={120}>
                <a
                  href="https://wa.me/5213222440437"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Solicitar cotización
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
