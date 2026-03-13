import { Navbar } from "@/components/sections/Navbar";
import { About } from "@/components/sections/About";
import { Methodology } from "@/components/sections/Methodology";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <About />
        <Methodology />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
