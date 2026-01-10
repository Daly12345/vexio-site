import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold components to improve LCP
const Stats = dynamic(() => import("@/components/Stats"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Technologies = dynamic(() => import("@/components/Technologies"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

// Loader with no SSR to avoid hydration issues
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Technologies />
        <Services />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
