import { Navbar } from "@/components/sections/Navbar";
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/sections/Footer";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Events />
      </main>
      <Footer />
    </div>
  );
}
