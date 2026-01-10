import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

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
