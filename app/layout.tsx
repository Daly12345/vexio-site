import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Vexio — Páginas web por $3,000 MXN, entrega en 48 horas",
  description: "Estudio digital en México. Página web + Google My Business + WhatsApp por $3,000 MXN, una sola vez. Entrega en 48 horas. Sin mensualidades.",
  keywords: ["página web México", "página web $3000", "diseño web Puerto Vallarta", "Google My Business", "WhatsApp Business", "Vexio"],
  openGraph: {
    title: "Vexio — Páginas web por $3,000 MXN, entrega en 48 horas",
    description: "Página web + Google My Business + WhatsApp en un solo paquete. Pago único, sin mensualidades.",
    url: "https://vexio.mx",
    siteName: "Vexio",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
