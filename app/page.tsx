import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AICapabilities from "@/components/AICapabilities";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <AICapabilities />
      <HowItWorks />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
