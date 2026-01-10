import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vexio - Soluciones Digitales en México",
  description: "Páginas web profesionales que convierten visitantes en clientes. Desarrollo web, e-commerce, SEO y mantenimiento web en México.",
  keywords: ["desarrollo web", "páginas web", "e-commerce", "SEO", "México", "Vexio"],
  openGraph: {
    title: "Vexio - Soluciones Digitales",
    description: "Soluciones digitales para hacer crecer tu negocio",
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
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            {children}
            <BackToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
