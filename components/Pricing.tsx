"use client";

import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const features = [
  "Página web profesional (responsive, rápida, SEO local)",
  "Optimización de Google My Business (fotos, descripción, horarios)",
  "Conexión directa a WhatsApp (botón flotante)",
  "Hosting + dominio incluidos primer año",
  "Galería + servicios + precios estructurados",
  "Soporte primeras 2 semanas para cambios",
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-24 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-cyan-400 font-medium">Paquete Único</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Un solo precio.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Sin sorpresas.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pago una sola vez. La página queda tuya. Lista en 48 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Main pricing card */}
          <TiltCard className="lg:col-span-3" tiltAmount={6} scale={1}>
            <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 overflow-hidden">
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />

              <div className="relative p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    El paquete completo
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-medium bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Entrega en 48 hrs
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 leading-none tracking-tight">
                      $3,000
                    </span>
                    <span className="text-2xl text-gray-400 font-medium">MXN</span>
                  </div>
                  <p className="text-base text-gray-300 mt-3">
                    Pago <span className="text-cyan-400 font-semibold">una sola vez</span>. Sin mensualidades. La página queda tuya.
                  </p>
                </div>

                {/* Payment terms */}
                <div className="mb-8 p-5 bg-gray-800/40 rounded-xl border border-gray-700/50">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                    Plan de pago
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-white">$1,000</span>
                        <span className="text-xs text-gray-400">MXN</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">Anticipo para arrancar</p>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-white">$2,000</span>
                        <span className="text-xs text-gray-400">MXN</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">Al entregar el sitio</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <MagneticButton strength={0.4} radius={120}>
                  <a
                    href="https://wa.me/5213222440437?text=Hola,%20quiero%20cotizar%20una%20p%C3%A1gina%20para%20mi%20negocio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 btn-shine"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Cotizar por WhatsApp
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </MagneticButton>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Te respondemos en menos de 2 minutos en horario hábil
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Features card */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 md:p-10 hover:border-cyan-500/40 transition-colors duration-500">
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-6">
              Qué incluye
            </h3>
            <ul className="space-y-5">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-800/80">
              <p className="text-sm text-gray-400 leading-relaxed">
                Ideal para barberías, restaurantes, salones, consultorios y negocios locales que necesitan{" "}
                <span className="text-white font-medium">presencia profesional</span> sin la complicación de un sitio inflado.
              </p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Sin mensualidades
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Entrega en 48 hrs
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Pago en 2 partes
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            La página queda tuya
          </div>
        </div>
      </div>
    </section>
  );
}
