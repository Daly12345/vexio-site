"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | "result";

interface Answers {
  businessType: string;
  businessName: string;
  needs: string[];
}

const businessTypes = [
  { id: "barberia", label: "Barbería", icon: "💈" },
  { id: "estetica", label: "Salón / Estética", icon: "💇" },
  { id: "restaurante", label: "Restaurante / Café", icon: "🍽️" },
  { id: "consultorio", label: "Consultorio / Clínica", icon: "🏥" },
  { id: "tienda", label: "Tienda / Boutique", icon: "🛍️" },
  { id: "hotel", label: "Hotel / Turismo", icon: "🏨" },
  { id: "servicios", label: "Servicios profesionales", icon: "💼" },
  { id: "otro", label: "Otro tipo de negocio", icon: "🏢" },
];

const needsOptions = [
  { id: "presencia", label: "Presencia profesional online" },
  { id: "google", label: "Aparecer en Google cuando me buscan" },
  { id: "whatsapp", label: "Que clientes me contacten por WhatsApp" },
  { id: "galeria", label: "Mostrar mi galería de trabajos / fotos" },
  { id: "menu", label: "Mostrar menú / servicios / precios" },
  { id: "ubicacion", label: "Que sepan dónde estoy ubicado" },
];

const businessLabels: Record<string, string> = Object.fromEntries(
  businessTypes.map((b) => [b.id, b.label])
);

const needLabels: Record<string, string> = Object.fromEntries(
  needsOptions.map((n) => [n.id, n.label])
);

function buildWhatsAppMessage(answers: Answers): string {
  const business = businessLabels[answers.businessType] || "mi negocio";
  const needs = answers.needs.map((id) => `• ${needLabels[id]}`).join("\n");
  const name = answers.businessName.trim();

  const lines = [
    `Hola, vi su sitio y quiero cotizar el paquete de $3,000 MXN.`,
    ``,
    `Tipo de negocio: ${business}`,
    name ? `Nombre del negocio: ${name}` : "",
    answers.needs.length > 0 ? `\nLo que necesito:\n${needs}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

function buildWhatsAppLink(answers: Answers): string {
  const message = buildWhatsAppMessage(answers);
  return `https://wa.me/5213222440437?text=${encodeURIComponent(message)}`;
}

export default function ContactWizard() {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({
    businessType: "",
    businessName: "",
    needs: [],
  });

  const totalSteps = 3;
  const progress = step === "result" ? 100 : (((step as number) - 1) / totalSteps) * 100;

  const reset = () => {
    setStep(1);
    setAnswers({ businessType: "", businessName: "", needs: [] });
  };

  const toggleNeed = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      needs: prev.needs.includes(id)
        ? prev.needs.filter((n) => n !== id)
        : [...prev.needs, id],
    }));
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      {/* Header */}
      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            {step === "result" ? "Tu cotización" : `Paso ${step} de ${totalSteps}`}
          </span>
          {step !== "result" && step !== 1 && (
            <button
              onClick={() => setStep(((step as number) - 1) as Step)}
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Atrás
            </button>
          )}
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-gray-800/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4">
        {step === 1 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¿Qué tipo de negocio tienes?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Para mandarte un ejemplo personalizado.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {businessTypes.map((b) => {
                const selected = answers.businessType === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      setAnswers({ ...answers, businessType: b.id });
                      setTimeout(() => setStep(2), 200);
                    }}
                    className={`text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 ${
                      selected
                        ? "bg-cyan-500/15 border-cyan-500 shadow-lg shadow-cyan-500/10"
                        : "bg-gray-800/40 border-gray-700/50 hover:border-cyan-500/40 hover:bg-gray-800/70"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl mb-1.5 block" aria-hidden>
                      {b.icon}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        selected ? "text-cyan-400" : "text-gray-300"
                      }`}
                    >
                      {b.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¿Cómo se llama tu negocio?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Opcional, pero ayuda a que la cotización sea más precisa.
            </p>
            <input
              type="text"
              value={answers.businessName}
              onChange={(e) => setAnswers({ ...answers, businessName: e.target.value })}
              placeholder="Ej. Barbería Rocío, Sushi Sakura..."
              className="w-full bg-gray-800/40 border border-gray-700 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors"
              autoFocus
            />

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Continuar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-3.5 rounded-xl text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Saltar
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¿Qué necesitas que la página haga por ti?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Marca todo lo que aplique. Todo viene incluido en el paquete.
            </p>
            <div className="space-y-2 mb-6">
              {needsOptions.map((n) => {
                const selected = answers.needs.includes(n.id);
                return (
                  <button
                    key={n.id}
                    onClick={() => toggleNeed(n.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                      selected
                        ? "bg-cyan-500/15 border-cyan-500"
                        : "bg-gray-800/40 border-gray-700/50 hover:border-cyan-500/40"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                        selected
                          ? "bg-cyan-500 border-cyan-500"
                          : "border-gray-600"
                      }`}
                    >
                      {selected && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={3.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        selected ? "text-white font-medium" : "text-gray-300"
                      }`}
                    >
                      {n.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep("result")}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-cyan-500/30 btn-shine"
            >
              Ver mi cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}

        {step === "result" && (
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-cyan-400 font-medium">
                Listo en 48 horas
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">
              Paquete completo Vexio
            </h3>
            <p className="text-gray-400 mb-6">
              {answers.businessName.trim()
                ? `Para ${answers.businessName.trim()}`
                : `Para tu ${businessLabels[answers.businessType]?.toLowerCase() || "negocio"}`}
              .
            </p>

            {/* Price */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-5 md:p-6 mb-5">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-none">
                  $3,000
                </span>
                <span className="text-base text-gray-400">MXN</span>
              </div>
              <p className="text-sm text-gray-300">
                <span className="text-cyan-400 font-semibold">Una sola vez.</span>{" "}
                Sin mensualidades. La página queda tuya.
              </p>

              <div className="mt-4 pt-4 border-t border-cyan-500/20 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Anticipo</div>
                  <div className="text-lg font-bold text-white">$1,000 MXN</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Al entregar</div>
                  <div className="text-lg font-bold text-white">$2,000 MXN</div>
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                Incluye
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  "Página web profesional, responsive, optimizada para SEO local",
                  "Google My Business optimizado (fotos, horarios, categorías)",
                  "Conexión a WhatsApp con botón flotante",
                  "Hosting + dominio el primer año",
                  "Soporte 2 semanas para ajustes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <a
              href={buildWhatsAppLink(answers)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-cyan-500/40 btn-shine mb-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Mandar mi cotización por WhatsApp
            </a>
            <button
              onClick={reset}
              className="w-full text-center text-sm text-gray-500 hover:text-cyan-400 transition-colors py-2"
            >
              Empezar de nuevo
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Te responde Vexio en menos de 2 minutos en horario hábil.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
