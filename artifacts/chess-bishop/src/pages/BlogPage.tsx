import { Navbar } from "@/components/sections/Navbar";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/sections/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
