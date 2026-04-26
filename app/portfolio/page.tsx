import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portafolio Vexio — Páginas web profesionales por $3,000 MXN, entrega en 48hrs",
  description:
    "Estudio digital en México. Páginas web + Google My Business + WhatsApp por $3,000 MXN una sola vez. Entrega en 48 horas. Mira nuestro trabajo: barberías, restaurantes, salones, inmobiliarias.",
  keywords: [
    "portafolio web México",
    "página web $3000",
    "diseño web Puerto Vallarta",
    "página web barbería",
    "página web restaurante",
    "página web salón",
    "Vexio portafolio",
  ],
  openGraph: {
    title: "Portafolio Vexio — Páginas web por $3,000 MXN, entrega en 48hrs",
    description:
      "Mira el trabajo del estudio. Páginas web profesionales para negocios en México. Pago único, sin mensualidades.",
    url: "https://vexio.mx/portfolio",
    siteName: "Vexio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio Vexio — $3,000 MXN, entrega en 48hrs",
    description:
      "Páginas web profesionales para negocios en México. Pago único, entrega en 48 horas.",
  },
  alternates: {
    canonical: "https://vexio.mx/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <PortfolioClient />
      <WhatsAppButton />
    </div>
  );
}
