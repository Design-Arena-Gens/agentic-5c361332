import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import ProgramGrid from "../components/ProgramGrid";
import InnovationTracks from "../components/InnovationTracks";
import ImpactShowcase from "../components/ImpactShowcase";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-gradient-to-b from-brand-dark/60 via-brand-dark/20 to-transparent blur-[120px]" />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <ProgramGrid />
        <InnovationTracks />
        <ImpactShowcase />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
