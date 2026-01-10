"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | "result";

interface Answers {
  businessType: string;
  pages: string;
  features: string[];
  budget: string;
}

const plans = {
  micro: {
    name: "Micro",
    price: "$3,500",
    priceRange: "$3,500 - $4,500 MXN",
    description: "Landing page perfecta para negocios locales que quieren presencia online básica.",
    features: ["1 página", "Diseño responsivo", "WhatsApp integrado", "Google Maps", "Hosting + Dominio 1 año"],
    delivery: "3-5 días"
  },
  basico: {
    name: "Básico",
    price: "$5,500",
    priceRange: "$5,500 - $8,000 MXN",
    description: "Sitio web completo para negocios que necesitan más secciones.",
    features: ["3-5 páginas", "Formulario de contacto", "Galería de fotos", "SSL incluido", "Hosting + Dominio 1 año"],
    delivery: "5-7 días"
  },
  profesional: {
    name: "Profesional",
    price: "$9,000",
    priceRange: "$9,000 - $15,000 MXN",
    description: "Ideal para negocios que necesitan funcionalidades avanzadas.",
    features: ["5-7 páginas", "Menú digital o catálogo", "SEO básico", "Sistema de citas", "3 correos corporativos"],
    delivery: "10-15 días"
  },
  premium: {
    name: "Premium",
    price: "$16,000",
    priceRange: "$16,000 - $25,000 MXN",
    description: "Solución completa para negocios que buscan destacar.",
    features: ["8-12 páginas", "Reservaciones con calendario", "Versión en inglés", "Blog", "SEO avanzado"],
    delivery: "15-25 días"
  },
  ecommerce: {
    name: "E-commerce",
    price: "$25,000",
    priceRange: "$25,000 - $40,000 MXN",
    description: "Tienda en línea completa para vender tus productos.",
    features: ["Tienda online", "Hasta 100 productos", "Pasarela de pago", "Inventario", "Dashboard de ventas"],
    delivery: "20-30 días"
  }
};

export default function ContactWizard() {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({
    businessType: "",
    pages: "",
    features: [],
    budget: ""
  });
  const [recommendedPlan, setRecommendedPlan] = useState<keyof typeof plans | null>(null);

  const businessTypes = [
    { id: "food", label: "Restaurante / Cafetería / Comida", icon: "🍽️" },
    { id: "health", label: "Consultorio / Clínica / Salud", icon: "🏥" },
    { id: "beauty", label: "Estética / Spa / Belleza", icon: "💇" },
    { id: "retail", label: "Tienda / Boutique / Comercio", icon: "🛍️" },
    { id: "services", label: "Servicios profesionales", icon: "💼" },
    { id: "hospitality", label: "Hotel / Airbnb / Turismo", icon: "🏨" },
    { id: "other", label: "Otro tipo de negocio", icon: "🏢" }
  ];

  const pageOptions = [
    { id: "landing", label: "Solo 1 página (landing)", description: "Información básica y contacto" },
    { id: "small", label: "2-5 páginas", description: "Inicio, servicios, contacto, etc." },
    { id: "medium", label: "6-10 páginas", description: "Sitio web completo con secciones" },
    { id: "large", label: "Más de 10 páginas", description: "Sitio web extenso o con blog" }
  ];

  const featureOptions = [
    { id: "menu", label: "Menú digital / Catálogo de productos", icon: "📋" },
    { id: "booking", label: "Sistema de citas o reservaciones", icon: "📅" },
    { id: "ecommerce", label: "Tienda en línea (vender productos)", icon: "🛒" },
    { id: "multilang", label: "Versión en inglés", icon: "🌎" },
    { id: "blog", label: "Blog o sección de noticias", icon: "📝" },
    { id: "none", label: "Solo información básica", icon: "✨" }
  ];

  const budgetOptions = [
    { id: "low", label: "Menos de $5,000", range: "Económico" },
    { id: "medium", label: "$5,000 - $15,000", range: "Estándar" },
    { id: "high", label: "$15,000 - $30,000", range: "Profesional" },
    { id: "premium", label: "Más de $30,000", range: "Premium" },
    { id: "flexible", label: "Flexible / No estoy seguro", range: "A definir" }
  ];

  const calculateRecommendation = (): keyof typeof plans => {
    const { pages, features, budget } = answers;

    // Orden de planes de menor a mayor
    const planOrder: (keyof typeof plans)[] = ["micro", "basico", "profesional", "premium", "ecommerce"];

    // Si necesita e-commerce, directamente ese plan
    if (features.includes("ecommerce")) {
      return "ecommerce";
    }

    // Calcular plan base según número de páginas
    let basePlan: keyof typeof plans = "micro";

    if (pages === "landing") {
      basePlan = "micro";
    } else if (pages === "small") {
      basePlan = "basico";
    } else if (pages === "medium") {
      basePlan = "profesional";
    } else if (pages === "large") {
      basePlan = "premium";
    }

    // Si solo necesita info básica, quedarse con el plan base
    if (features.includes("none") || features.length === 0) {
      return adjustByBudget(basePlan, budget, planOrder);
    }

    // Caso especial: Landing + solo menú digital = Básico (un menú puede ser 1 página)
    if (pages === "landing" && features.length === 1 && features.includes("menu")) {
      return adjustByBudget("basico", budget, planOrder);
    }

    // Caso especial: Landing o pequeño + solo una feature simple = Básico
    if ((pages === "landing" || pages === "small") && features.length === 1) {
      if (features.includes("menu") || features.includes("blog")) {
        return adjustByBudget("basico", budget, planOrder);
      }
    }

    // Calcular "puntos" de features para subir de plan
    let featurePoints = 0;

    // Solo sumar puntos si hay múltiples features o features complejas
    if (features.includes("menu") && features.length > 1) featurePoints += 1;  // Menú + otras cosas
    if (features.includes("booking")) featurePoints += 2;     // Reservaciones (más complejo)
    if (features.includes("multilang")) featurePoints += 2;   // Bilingüe (más trabajo)
    if (features.includes("blog") && features.length > 1) featurePoints += 1;  // Blog + otras cosas

    // Subir de plan según puntos de features
    let recommendedIndex = planOrder.indexOf(basePlan);

    if (featurePoints >= 4) {
      recommendedIndex = Math.min(recommendedIndex + 2, 3); // Subir hasta Premium máximo
    } else if (featurePoints >= 2) {
      recommendedIndex = Math.min(recommendedIndex + 1, 3); // Subir 1 nivel
    }

    let recommended = planOrder[recommendedIndex];

    // Ajustar por presupuesto
    return adjustByBudget(recommended, budget, planOrder);
  };

  // Función para ajustar recomendación según presupuesto
  const adjustByBudget = (
    plan: keyof typeof plans,
    budget: string,
    planOrder: (keyof typeof plans)[]
  ): keyof typeof plans => {
    // Mapear presupuesto a plan máximo permitido
    const budgetMaxPlan: Record<string, keyof typeof plans> = {
      "low": "micro",           // Menos de $5,000 → máximo Micro
      "medium": "profesional",  // $5,000 - $15,000 → hasta Profesional
      "high": "premium",        // $15,000 - $30,000 → hasta Premium
      "premium": "ecommerce",   // Más de $30,000 → cualquier plan
      "flexible": "ecommerce"   // Flexible → cualquier plan
    };

    const maxPlan = budgetMaxPlan[budget] || "ecommerce";
    const planIndex = planOrder.indexOf(plan);
    const maxIndex = planOrder.indexOf(maxPlan);

    // Si el plan recomendado excede el presupuesto, bajar al máximo permitido
    if (planIndex > maxIndex) {
      return planOrder[maxIndex];
    }

    return plan;
  };

  const handleNext = () => {
    if (step === 4) {
      const recommendation = calculateRecommendation();
      setRecommendedPlan(recommendation);
      setStep("result");
    } else if (step !== "result") {
      setStep((step + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step === "result") {
      setStep(4);
      setRecommendedPlan(null);
    } else if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleFeatureToggle = (featureId: string) => {
    if (featureId === "none") {
      setAnswers({ ...answers, features: ["none"] });
    } else {
      const newFeatures = answers.features.filter(f => f !== "none");
      if (newFeatures.includes(featureId)) {
        setAnswers({ ...answers, features: newFeatures.filter(f => f !== featureId) });
      } else {
        setAnswers({ ...answers, features: [...newFeatures, featureId] });
      }
    }
  };

  const handleRestart = () => {
    setStep(1);
    setAnswers({ businessType: "", pages: "", features: [], budget: "" });
    setRecommendedPlan(null);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return answers.businessType !== "";
      case 2: return answers.pages !== "";
      case 3: return answers.features.length > 0;
      case 4: return answers.budget !== "";
      default: return true;
    }
  };

  const currentPlan = recommendedPlan ? plans[recommendedPlan] : null;

  const getWhatsAppMessage = () => {
    if (!currentPlan) return "";
    const businessLabel = businessTypes.find(b => b.id === answers.businessType)?.label || answers.businessType;
    const featuresLabels = answers.features.map(f => featureOptions.find(fo => fo.id === f)?.label).filter(Boolean).join(", ");

    return `Hola, me interesa el plan ${currentPlan.name} (${currentPlan.priceRange}).

Mi negocio: ${businessLabel}
Funcionalidades que necesito: ${featuresLabels || "Información básica"}

¿Podrían darme más información?`;
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border-2 border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

      <div className="relative p-6 lg:p-8">
        {/* Header */}
        {step !== "result" && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Encuentra tu plan ideal
            </h3>
            <p className="text-gray-400">
              Responde estas preguntas y te recomendaremos el mejor plan para tu proyecto
            </p>

            {/* Progress bar */}
            <div className="mt-6 flex items-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    s <= (step as number)
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                      : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Paso {step} de 4</p>
          </div>
        )}

        {/* Step 1: Business Type */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              ¿Qué tipo de negocio tienes?
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setAnswers({ ...answers, businessType: type.id })}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    answers.businessType === type.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                  }`}
                >
                  <span className="text-2xl">{type.icon}</span>
                  <span className={`font-medium ${
                    answers.businessType === type.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Pages */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              ¿Cuántas páginas necesitas?
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {pageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setAnswers({ ...answers, pages: option.id })}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    answers.pages === option.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                  }`}
                >
                  <span className={`font-medium block ${
                    answers.pages === option.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    {option.label}
                  </span>
                  <span className="text-sm text-gray-500">{option.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Features */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              ¿Qué funcionalidades necesitas?
            </h4>
            <p className="text-sm text-gray-400 mb-4">Puedes seleccionar varias opciones</p>
            <div className="grid grid-cols-1 gap-3">
              {featureOptions.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureToggle(feature.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    answers.features.includes(feature.id)
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                  }`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className={`font-medium ${
                    answers.features.includes(feature.id) ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    {feature.label}
                  </span>
                  {answers.features.includes(feature.id) && (
                    <svg className="w-5 h-5 text-cyan-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Budget */}
        {step === 4 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              ¿Cuál es tu presupuesto aproximado?
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setAnswers({ ...answers, budget: option.id })}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    answers.budget === option.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                  }`}
                >
                  <span className={`font-medium block ${
                    answers.budget === option.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    {option.label}
                  </span>
                  <span className="text-sm text-gray-500">{option.range}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {step === "result" && currentPlan && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Te recomendamos el plan
              </h3>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {currentPlan.name}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-3xl font-bold text-white">{currentPlan.price}</span>
                <span className="text-gray-400 text-sm">{currentPlan.priceRange}</span>
              </div>
              <p className="text-gray-300 mb-4">{currentPlan.description}</p>
              <ul className="space-y-2 mb-4">
                {currentPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Entrega estimada: {currentPlan.delivery}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/5213222440437?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Solicitar este plan por WhatsApp
              </a>

              <button
                onClick={handleRestart}
                className="w-full px-6 py-3 rounded-xl font-medium text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Volver a empezar
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {step !== "result" && (
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-xl font-medium text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Atrás
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                canProceed()
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              {step === 4 ? 'Ver mi recomendación' : 'Siguiente'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
