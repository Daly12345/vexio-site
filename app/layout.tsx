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
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
