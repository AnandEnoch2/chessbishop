import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const scrolled = useScroll(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ];

  function navigate(href: string) {
    setLocation(href);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:bg-primary/30 transition-colors">
            <Crown className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-wider">
            Chess<span className="text-primary">Bishop</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => navigate(link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location === link.href
                      ? "text-primary"
                      : "text-white/70 hover:text-primary"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <Button
            variant="default"
            size="sm"
            className="hidden lg:flex"
            onClick={() => navigate("/contact")}
          >
            Start Learning
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.href)}
                  className={cn(
                    "text-left text-lg font-medium py-2 border-b border-white/5",
                    location === link.href
                      ? "text-primary"
                      : "text-white/80 hover:text-primary"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="w-full mt-4"
                onClick={() => navigate("/contact")}
              >
                Start Learning
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
