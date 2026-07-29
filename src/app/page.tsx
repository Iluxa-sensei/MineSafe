import { Competitors } from "@/components/Competitors";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Solution } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Solution />
      <Competitors />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
