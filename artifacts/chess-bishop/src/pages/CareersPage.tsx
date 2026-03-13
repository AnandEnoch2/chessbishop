import { Navbar } from "@/components/sections/Navbar";
import { Careers } from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Careers />
      </main>
      <Footer />
    </div>
  );
}
