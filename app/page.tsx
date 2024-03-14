import CTA from "@/components/CTA";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
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
    </>
  );
}
