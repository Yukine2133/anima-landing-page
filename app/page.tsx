import CTA from "@/components/CTA";
import CTABottom from "@/components/CTABottom";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Metrics />
      <CTA />
      <Testimonials />
      <Pricing />
      <Team />
      <CTABottom />
      <Contact />
      <Footer />
    </>
  );
}
