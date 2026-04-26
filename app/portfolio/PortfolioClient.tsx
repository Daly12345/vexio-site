"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

type Category = "todos" | "restaurantes" | "estetica" | "barberia" | "inmobiliaria";

interface Project {
  id: string;
  name: string;
  category: Exclude<Category, "todos">;
  industry: string;
  location: string;
  url: string;
}

const PROJECTS: Project[] = [
  {
    id: "aterra",
    name: "Aterra",
    category: "inmobiliaria",
    industry: "Inmobiliaria de lujo",
    location: "Punta Mita, Nayarit",
    url: "https://aterra-demo.vercel.app/",
  },
  {
    id: "seres",
    name: "SERES Sayulita",
    category: "restaurantes",
    industry: "Beach Club & Restaurant",
    location: "Sayulita, Nayarit",
    url: "https://seres-sayulita.vercel.app/",
  },
  {
    id: "umami",
    name: "Umami Sushi",
    category: "restaurantes",
    industry: "Restaurante japonés",
    location: "Nuevo Vallarta",
    url: "https://umami-sushi-nv.vercel.app/",
  },
  {
    id: "arte-glamour",
    name: "Arte & Glamour",
    category: "estetica",
    industry: "Salón de belleza · Instituto",
    location: "Nuevo Vallarta",
    url: "https://arte-glamour-demo.vercel.app/",
  },
  {
    id: "marcia-santos",
    name: "Márcia Santos Alaciados",
    category: "estetica",
    industry: "Salón especialista en alaciados",
    location: "Nuevo Vallarta",
    url: "https://marcia-santos-alaciados.vercel.app/",
  },
  {
    id: "clipperoom",
    name: "Clipperoom",
    category: "barberia",
    industry: "Barbería",
    location: "Bucerías, Nayarit",
    url: "https://clipperoom.vercel.app/",
  },
  {
    id: "black-barber",
    name: "Black Barber Qro",
    category: "barberia",
    industry: "Barbería",
    location: "Querétaro",
    url: "https://barberia-lac.vercel.app/",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "restaurantes", label: "Restaurantes" },
  { id: "estetica", label: "Estética" },
  { id: "barberia", label: "Barberías" },
  { id: "inmobiliaria", label: "Inmobiliaria" },
];

const STEPS = [
  {
    number: "01",
    title: "Cotizamos",
    description:
      "Te cuento del negocio por WhatsApp y te mando un ejemplo personalizado en menos de 2 minutos.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Mandas anticipo más tu material, y armo la página a la medida en 24 a 36 horas.",
  },
  {
    number: "03",
    title: "Entregamos",
    description:
      "Sitio en línea, Google optimizado y WhatsApp conectado. Pago final, queda tuyo.",
  },
];

const INCLUDES = [
  {
    title: "Página web profesional",
    description: "Responsive, rápida y optimizada para SEO local.",
  },
  {
    title: "Google My Business",
    description: "Fotos, descripción, horarios y categorías afinados.",
  },
  {
    title: "Conexión a WhatsApp",
    description: "Botón flotante directo al chat con tu negocio.",
  },
  {
    title: "Hosting + dominio",
    description: "Incluidos durante el primer año, sin cargos extra.",
  },
  {
    title: "Galería estructurada",
    description: "Servicios, precios y galería listos para tu cliente.",
  },
  {
    title: "Soporte 2 semanas",
    description: "Cambios y ajustes incluidos después de la entrega.",
  },
];

const MARQUEE_ITEMS = [
  "Aterra",
  "Inmobiliaria",
  "Punta Mita",
  "$3,000 MXN una sola vez",
  "SERES",
  "Restaurantes",
  "Sayulita",
  "Entrega en 48 horas",
  "Umami Sushi",
  "Nuevo Vallarta",
  "Arte & Glamour",
  "Salones",
  "Márcia Santos",
  "Querétaro",
  "Clipperoom",
  "Barberías",
  "Bucerías",
  "Black Barber Qro",
  "Riviera Nayarit",
  "Sin mensualidades",
];

const WA_HREF =
  "https://wa.me/5213222440437?text=Hola%2C%20vi%20su%20portafolio%20y%20quiero%20cotizar%20una%20p%C3%A1gina%20para%20mi%20negocio";

const WA_HREF_GENERIC =
  "https://wa.me/5213222440437?text=Hola%2C%20vi%20su%20portafolio%20y%20quiero%20m%C3%A1s%20info";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const PREVIEW_VIEWPORT_WIDTH = 1440;
const PREVIEW_VIEWPORT_HEIGHT = 900;

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px" });
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (!previewRef.current) return;

    const update = () => {
      const el = previewRef.current;
      if (!el) return;
      const w = el.clientWidth;
      if (w > 0) setScale(w / PREVIEW_VIEWPORT_WIDTH);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(previewRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <TiltCard tiltAmount={5} scale={1.02} glareEnabled>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10"
          aria-label={`Abrir demo de ${project.name}`}
        >
          {/* Preview area */}
          <div className="relative bg-gray-950 border-b border-gray-800">
            {/* Browser chrome */}
            <div className="relative z-20 h-7 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 flex items-center px-3 gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div className="ml-2 flex-1 h-3.5 rounded-sm bg-gray-800/80 px-2 flex items-center">
                <span className="text-[9px] text-gray-500 font-mono truncate">
                  {project.url.replace(/^https?:\/\//, "")}
                </span>
              </div>
            </div>

            {/* Iframe wrapper - aspect ratio matches viewport (1440:900 = 16:10) */}
            <div
              ref={previewRef}
              className="relative aspect-[16/10] overflow-hidden bg-gray-950"
            >
              {inView && scale > 0 ? (
                <>
                  <iframe
                    src={project.url}
                    title={`Demo: ${project.name}`}
                    loading="lazy"
                    onLoad={() => setIframeLoaded(true)}
                    sandbox="allow-scripts allow-same-origin"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{
                      width: `${PREVIEW_VIEWPORT_WIDTH}px`,
                      height: `${PREVIEW_VIEWPORT_HEIGHT}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "0 0",
                      border: "none",
                      transition: "opacity 0.5s ease",
                      opacity: iframeLoaded ? 1 : 0,
                    }}
                  />
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-950">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-dot" />
                        cargando preview
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
              )}
            </div>

            {/* Hover overlay with "ver demo" */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-5 pointer-events-none">
              <div className="flex items-center gap-2 text-white text-sm font-medium bg-cyan-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                Ver demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <svg
                className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-400 mb-3">{project.industry}</p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </div>
          </div>
        </a>
      </TiltCard>
    </motion.div>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-gray-800/80 bg-gray-950/50 backdrop-blur-sm py-5">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 text-sm md:text-base font-medium text-gray-400"
          >
            {item}
            <span className="text-cyan-500/60 select-none" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProjects =
    activeCategory === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Counts for filter pills
  const counts: Record<Category, number> = {
    todos: PROJECTS.length,
    restaurantes: PROJECTS.filter((p) => p.category === "restaurantes").length,
    estetica: PROJECTS.filter((p) => p.category === "estetica").length,
    barberia: PROJECTS.filter((p) => p.category === "barberia").length,
    inmobiliaria: PROJECTS.filter((p) => p.category === "inmobiliaria").length,
  };

  // Smooth scroll to portfolio
  const scrollToPortfolio = () => {
    document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative">
      {/* ============== HERO ============== */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center pt-20 pb-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />

        {/* Decorative orbs */}
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle horizontal lines */}
        <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs sm:text-sm text-cyan-400 font-medium">
                  Portafolio · Estudio Vexio
                </span>
              </div>

              <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.02] tracking-tight mb-6">
                Páginas web que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-300% animate-gradient">
                  cierran clientes
                </span>
                <span className="text-cyan-400">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                Estudio digital para barberías, restaurantes, salones y negocios locales en México.
                Sitio profesional + Google My Business + WhatsApp en{" "}
                <span className="text-white font-semibold">48 horas</span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
                <MagneticButton strength={0.4} radius={120}>
                  <a
                    href={WA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 btn-shine"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Cotizar por WhatsApp
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.3} radius={100}>
                  <button
                    onClick={scrollToPortfolio}
                    className="group inline-flex items-center gap-2 border border-cyan-400/60 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 px-7 py-4 rounded-full font-semibold transition-colors duration-300"
                  >
                    Ver portafolio
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </MagneticButton>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Pago único, sin mensualidades
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Entrega en 48 horas
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Sitio + GMB + WhatsApp
                </span>
              </div>
            </motion.div>

            {/* Right - Price as graphic element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-8 md:p-10 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                      Paquete único
                    </span>
                    <span className="text-xs text-gray-500 font-mono">vexio.mx</span>
                  </div>

                  {/* Big price */}
                  <div className="mb-1">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl text-gray-400 font-bold mt-3">$</span>
                      <span className="price-gradient-text text-[5.5rem] md:text-[7rem] font-bold leading-none tracking-tighter">
                        3,000
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 -mt-2">
                      <span className="text-base text-gray-400 font-medium">MXN</span>
                      <span className="text-xs text-gray-600">·</span>
                      <span className="text-sm text-cyan-400 font-medium">una sola vez</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

                  {/* Payment terms */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        Anticipo
                      </div>
                      <div className="text-xl font-bold text-white">
                        $1,000<span className="text-xs text-gray-500 ml-1">MXN</span>
                      </div>
                    </div>
                    <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        Al entregar
                      </div>
                      <div className="text-xl font-bold text-white">
                        $2,000<span className="text-xs text-gray-500 ml-1">MXN</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer of card */}
                  <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Disponibilidad esta semana
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToPortfolio}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
          aria-label="Ver portafolio"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent" />
        </button>
      </section>

      {/* ============== MARQUEE ============== */}
      <Marquee />

      {/* ============== PORTFOLIO ============== */}
      <section
        id="portafolio"
        className="relative py-20 md:py-24 bg-black overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
                  <span className="text-xs sm:text-sm text-cyan-400 font-medium">
                    Trabajo seleccionado
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Lo que hemos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    construido
                  </span>
                </h2>
                <p className="text-base text-gray-400 mt-4">
                  Cada proyecto es un cliente real con un sitio en producción.
                  Click para abrir el demo.
                </p>
              </div>

              <div className="text-sm text-gray-500 font-mono shrink-0">
                <span className="text-cyan-400 text-2xl font-bold">{filteredProjects.length}</span>
                <span className="ml-2">
                  {filteredProjects.length === 1 ? "proyecto" : "proyectos"}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Filter pills */}
          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-gray-900/60 text-gray-400 border border-gray-800 hover:border-cyan-500/50 hover:text-cyan-400"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                  <span
                    className={`text-xs font-mono ${
                      isActive ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {counts[cat.id]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ============== CÓMO TRABAJAMOS ============== */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs sm:text-sm text-cyan-400 font-medium">El proceso</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Cómo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  trabajamos
                </span>
              </h2>
              <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">
                Tres pasos. Cero burocracia. Tu sitio en línea esta semana.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {STEPS.map((step, idx) => (
              <ScrollReveal key={step.number} delay={idx * 0.1}>
                <div className="group relative h-full bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-cyan-500/50 p-7 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Number */}
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400/30 to-blue-500/10 leading-none tracking-tight">
                      {step.number}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== QUÉ INCLUYE ============== */}
      <section className="relative py-20 md:py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs sm:text-sm text-cyan-400 font-medium">Qué incluye</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Todo lo que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  necesita tu negocio
                </span>{" "}
                online
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {INCLUDES.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.05}>
                <div className="group h-full bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-cyan-500/40 p-6 transition-all duration-500">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />

        {/* Big background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-cyan-400 font-medium">
                Disponible esta semana
              </span>
            </div>

            {/* Massive price */}
            <div className="mb-2">
              <span className="price-gradient-text text-[4.5rem] sm:text-[7rem] lg:text-[9rem] font-bold leading-none tracking-tighter">
                $3,000
              </span>
            </div>
            <p className="text-base sm:text-lg text-gray-400 mb-10">
              <span className="text-cyan-400 font-semibold">MXN</span> · una sola vez · entrega en 48 horas
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Tu negocio merece una página{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                que venda
              </span>
              .
            </h2>

            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
              Mándame un mensaje y te respondo en menos de 2 minutos con un ejemplo personalizado para tu negocio.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <MagneticButton strength={0.4} radius={120}>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 btn-shine"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Cotizar por WhatsApp
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3} radius={100}>
                <button
                  onClick={scrollToPortfolio}
                  className="inline-flex items-center gap-2 border border-gray-700 hover:border-cyan-400/60 text-gray-300 hover:text-cyan-400 px-7 py-4 sm:py-5 rounded-full font-semibold transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                  </svg>
                  Volver al portafolio
                </button>
              </MagneticButton>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <span>Sin mensualidades</span>
              <span className="text-gray-700">·</span>
              <span>$1,000 anticipo · $2,000 al entregar</span>
              <span className="text-gray-700">·</span>
              <span>Soporte 2 semanas incluido</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="relative bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link
                href="/"
                className="text-3xl font-bold text-gradient-animated inline-block mb-4"
              >
                Vexio
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                Estudio digital para negocios mexicanos. Páginas web profesionales, Google My Business y WhatsApp por un solo precio.
                Pago único de <span className="text-cyan-400 font-semibold">$3,000 MXN</span>, entrega en 48 horas.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_HREF_GENERIC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  +52 322 244 0437
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div className="md:col-span-3">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Contacto
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={WA_HREF_GENERIC}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@vexio.mx"
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contacto@vexio.mx
                  </a>
                </li>
                <li>
                  <Link
                    href="/#precios"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Portafolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cobertura */}
            <div className="md:col-span-4">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Cobertura
              </h3>
              <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm leading-snug">
                      Toda la República Mexicana
                    </p>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Trabajamos 100% remoto por WhatsApp y videollamada. No importa en qué ciudad o estado estés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              &copy; 2026 Vexio. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs font-mono">
              Hecho en México · vexio.mx
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
