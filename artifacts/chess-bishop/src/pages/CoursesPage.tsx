import { Navbar } from "@/components/sections/Navbar";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { Footer } from "@/components/sections/Footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Services />
        <Methodology />
      </main>
      <Footer />
    </div>
  );
}
