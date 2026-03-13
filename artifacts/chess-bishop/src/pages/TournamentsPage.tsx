import { Navbar } from "@/components/sections/Navbar";
import { Tournaments } from "@/components/sections/Tournaments";
import { Footer } from "@/components/sections/Footer";

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Tournaments />
      </main>
      <Footer />
    </div>
  );
}
