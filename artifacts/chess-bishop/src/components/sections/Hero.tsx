import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    bg: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
    tag: "Accepting new students for 2025",
    headline1: "Master Chess,",
    headline2: "Master Life.",
    sub: "Professional chess coaching for all levels — from beginners learning the basics to tournament players seeking grandmaster strategies.",
    cta1: { label: "Book a Free Lesson", href: "#contact" },
    cta2: { label: "Explore Courses", href: "#courses" },
  },
  {
    bg: "linear-gradient(135deg, #0a1628 0%, #0d2340 40%, #0f2e55 70%, #0a1628 100%)",
    tag: "Academic Chess for Kids",
    headline1: "Igniting Young",
    headline2: "Minds Through Chess.",
    sub: "Chess is a great way to teach children gain focus and a mindset for success. Join our Academic Chess program today!",
    cta1: { label: "Book Demo", href: "#contact" },
    cta2: { label: "Tournaments", href: "#events" },
  },
  {
    bg: "linear-gradient(135deg, #071220 0%, #0c1e38 40%, #152d4a 70%, #071220 100%)",
    tag: "World's #1 Chess Curriculum",
    headline1: "Train Like a",
    headline2: "Grandmaster.",
    sub: "Curated by doctorate researchers in metacognition & emotional intelligence, crafted by FIDE rated chess players.",
    cta1: { label: "Start Now", href: "#courses" },
    cta2: { label: "Learn More", href: "#about" },
  },
  {
    bg: `url(${import.meta.env.BASE_URL}images/coach.png), linear-gradient(135deg, #0a1628 0%, #0d2340 100%)`,
    tag: "1-on-1 Private Coaching",
    headline1: "Personalized",
    headline2: "Chess Mastery.",
    sub: "One-on-one sessions with an experienced coach tailored precisely to your level, goals, and schedule.",
    cta1: { label: "Book a Session", href: "#contact" },
    cta2: { label: "View Courses", href: "#courses" },
  },
];

export function Hero() {
  const floatingPieces = ["♚", "♛", "♜", "♝", "♞", "♟"];
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const goTo = (index: number) => {
    setCurrent(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Sliding background layers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          style={{
            backgroundImage: slide.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.45)",
          }}
        />
      </AnimatePresence>

      {/* Gradient overlay always on top of background */}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white/80">{slide.tag}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
              <span className="text-gradient">{slide.headline1}</span><br />
              <span className="text-gradient-gold">{slide.headline2}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {slide.sub}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={slide.cta1.href} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  {slide.cta1.label}
                </Button>
              </a>
              <a href={slide.cta2.href} className="w-full sm:w-auto">
                <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-8">
                  {slide.cta2.label}
                </Button>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative focus:outline-none"
            >
              <motion.div
                animate={{
                  width: i === current ? 32 : 8,
                  backgroundColor: i === current ? "hsl(var(--primary))" : "rgba(255,255,255,0.3)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-2 rounded-full cursor-pointer"
                style={{ width: i === current ? 32 : 8 }}
              />
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <div className="mt-4 text-white/30 text-xs font-mono tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
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
