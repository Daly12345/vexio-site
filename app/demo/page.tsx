import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Demo Builder · Vexio — Diseña tu sitio ideal",
  description:
    "Diseña tu sitio web ideal de forma interactiva. Elige tu industria, personaliza y obtén una cotización al instante.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="fixed top-16 md:top-20 left-0 right-0 bottom-0">
        <iframe
          src="/demo-builder.html?embedded"
          className="w-full h-full border-none"
          title="Vexio Demo Builder"
        />
      </main>
    </div>
  );
}
