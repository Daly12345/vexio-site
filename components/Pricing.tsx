"use client";

import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const plans = [
  {
    name: "Micro",
    price: "$3,500",
    priceRange: "$3,500 - $4,500",
    popular: false,
    forWho: "Taquerias, fondas, talleres pequenos",
    features: [
      "Landing page (1 pagina)",
      "Diseno responsivo",
      "Boton de WhatsApp",
      "Google Maps integrado",
      "Galeria basica (5 fotos)",
      "Hosting + Dominio 1 ano",
      "Entrega: 3-5 dias"
    ],
    highlight: false
  },
  {
    name: "Basico",
    price: "$5,500",
    priceRange: "$5,500 - $8,000",
    popular: false,
    forWho: "Esteticas, veterinarias, tiendas pequenas",
    features: [
      "3-5 paginas completas",
      "WhatsApp + formulario de contacto",
      "Galeria expandida (12 fotos)",
      "SSL incluido",
      "1 revision incluida",
      "Hosting + Dominio 1 ano",
      "Entrega: 5-7 dias"
    ],
    highlight: false
  },
  {
    name: "Profesional",
    price: "$9,000",
    priceRange: "$9,000 - $15,000",
    popular: true,
    forWho: "Restaurantes, consultorios, tours",
    features: [
      "5-7 paginas profesionales",
      "Menu digital o catalogo",
      "SEO basico incluido",
      "Google My Business configurado",
      "Sistema de citas basico",
      "3 correos corporativos",
      "Hosting + Dominio 1 ano",
      "Entrega: 10-15 dias"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "$16,000",
    priceRange: "$16,000 - $25,000",
    popular: false,
    forWho: "Hoteles, restaurantes premium, clinicas",
    features: [
      "8-12 paginas diseno personalizado",
      "Sistema de reservaciones con calendario",
      "Version en ingles incluida",
      "Blog profesional",
      "Chat/chatbot basico",
      "SEO avanzado",
      "10 correos corporativos",
      "Hosting + Dominio 1 ano",
      "Entrega: 15-25 dias"
    ],
    highlight: false
  },
  {
    name: "E-commerce",
    price: "$25,000",
    priceRange: "$25,000 - $40,000",
    popular: false,
    forWho: "Boutiques, tiendas que quieren vender online",
    features: [
      "Tienda en linea completa",
      "Hasta 100 productos",
      "Pasarela de pago integrada",
      "Sistema de inventario",
      "Calculadora de envios",
      "Dashboard de ventas",
      "SEO para productos",
      "Hosting + Dominio 1 ano",
      "Entrega: 20-30 dias"
    ],
    highlight: false
  }
];

// Mobile version - completely static, no animations
function MobilePricing() {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  return (
    <section id="precios" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1.5 mb-4">
            <span className="text-xs text-cyan-400 font-medium">Planes y Precios</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Elige el plan <span className="text-cyan-400">perfecto</span>
          </h2>
          <p className="text-sm text-gray-400">
            Todos los planes incluyen hosting y dominio por 1 ano
          </p>
        </div>

        <div className="space-y-4">
          {plans.map((plan, index) => {
            const isSelected = selectedIndex === index;

            return (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl border-2 p-5 ${
                  isSelected ? "border-cyan-500" : "border-gray-800"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {plan.popular && (
                      <span className="inline-block bg-cyan-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">
                        Mas Popular
                      </span>
                    )}
                    <h3 className={`text-lg font-bold ${isSelected ? "text-cyan-400" : "text-white"}`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-400">{plan.forWho}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 text-xs block">MXN</span>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/5213222440437"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-cyan-500 text-white rounded-lg font-semibold text-sm"
                    >
                      Comenzar
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">
            Necesitas algo personalizado?
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Creamos soluciones a la medida de tu negocio
          </p>
          <a
            href="https://wa.me/5213222440437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Solicitar cotizacion
          </a>
        </div>
      </div>
    </section>
  );
}

// Desktop version with animations
function DesktopPricing() {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const isHighlighted = (index: number) => {
    return selectedIndex === index;
  };

  return (
    <section id="precios" className="relative py-24 bg-black overflow-hidden">
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
            Todos los planes incluyen hosting y dominio por 1 ano. Precios transparentes sin costos ocultos.
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
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl transition-opacity duration-500 ${
                    highlighted ? 'opacity-100' : 'opacity-0'
                  }`} />

                  <div className="relative p-6 md:p-8 flex flex-col h-full">
                    {plan.popular && (
                      <div className="mb-4 -mt-1">
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Mas Popular
                        </span>
                      </div>
                    )}

                    <div className={plan.popular ? 'mb-6' : 'mb-6 mt-6'}>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        highlighted ? 'text-cyan-400' : 'text-white'
                      }`}>{plan.name}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{plan.forWho}</p>
                    </div>

                    <div className="mb-8 overflow-hidden">
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 text-sm">MXN</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{plan.priceRange}</p>
                    </div>

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

        <div className="mt-20 text-center">
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-12 max-w-3xl mx-auto hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Necesitas algo personalizado?
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Creamos soluciones a la medida de tu negocio. Contactanos para una cotizacion personalizada.
              </p>
              <MagneticButton strength={0.4} radius={120}>
                <a
                  href="https://wa.me/5213222440437"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Solicitar cotizacion
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return isMobile ? <MobilePricing /> : <DesktopPricing />;
}
