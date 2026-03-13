import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

function navigate(setLocation: (href: string) => void, href: string) {
  setLocation(href);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Hero() {
  const floatingPieces = ["♚", "♛", "♜", "♝", "♞", "♟"];
  const [, setLocation] = useLocation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.45)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/70 to-background pointer-events-none" />
      <div className="absolute inset-0 z-0 chess-grid-bg opacity-15 pointer-events-none" />

      {/* Floating chess pieces */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingPieces.map((piece, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-6xl select-none"
            initial={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 16}%`,
              rotate: i * 40,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [i * 40, i * 40 + 60, i * 40],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {piece}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white/80">Accepting new students for 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
            <span className="text-gradient">Master Chess,</span><br />
            <span className="text-gradient-gold">Master Life.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Professional chess coaching for all levels — from beginners learning the basics to tournament players seeking grandmaster strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8" onClick={() => navigate(setLocation, "/contact")}>
              Book a Free Lesson
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-8" onClick={() => navigate(setLocation, "/courses")}>
              Explore Courses
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
