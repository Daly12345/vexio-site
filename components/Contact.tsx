"use client";

import ContactWizard from "./ContactWizard";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-cyan-400 font-medium">Contacto</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            ¿Listo para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              comenzar?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre qué plan es el ideal para tu negocio en menos de 1 minuto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Wizard */}
          <div className="order-2 lg:order-1">
            <ContactWizard />
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Prefieres contacto directo?
              </h3>
              <p className="text-gray-400 mb-8">
                Si ya sabes lo que necesitas o tienes un proyecto más complejo, escríbenos directamente.
              </p>
              <div className="space-y-6">
                <MagneticButton strength={0.2} radius={150}>
                  <a
                    href="https://wa.me/5213222440437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                      <p className="text-lg text-white font-medium group-hover:text-cyan-400 transition">
                        +52 322 244 0437
                      </p>
                      <p className="text-xs text-green-400">Respuesta en minutos</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 ml-auto group-hover:text-cyan-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.2} radius={150}>
                  <a
                    href="mailto:contacto@vexio.mx"
                    className="group flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-lg text-white font-medium group-hover:text-cyan-400 transition">
                        contacto@vexio.mx
                      </p>
                      <p className="text-xs text-gray-500">Respuesta en 24 horas</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 ml-auto group-hover:text-cyan-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </MagneticButton>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />
              <div className="relative">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ¿Por qué elegirnos?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Entregas rápidas y puntuales
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Diseños modernos y profesionales
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Soporte técnico incluido
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Precios transparentes
                  </li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Trabajamos de forma remota desde México</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
