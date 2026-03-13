import { FadeIn } from "@/components/animations/FadeIn";
import { Brain, Swords, ShieldAlert } from "lucide-react";

export function Methodology() {
  const pillars = [
    {
      title: "Tactical Sharpness",
      icon: Swords,
      desc: "Daily puzzles and pattern recognition training to build tactical intuition. Spot combinations instantly."
    },
    {
      title: "Strategic Understanding",
      icon: Brain,
      desc: "Long-term planning, positional evaluation, pawn structures, and outmaneuvering your opponent conceptually."
    },
    {
      title: "Psychological Resilience",
      icon: ShieldAlert,
      desc: "Mental game mastery, time management, recovering from blunders, and developing a tournament-winning mindset."
    }
  ];

  return (
    <section className="py-24 relative border-y border-white/5">
      <div className="absolute inset-0 chess-grid-bg opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">The Chess Bishop Method</h2>
          <p className="text-white/70 text-lg">A holistic approach to chess training that goes beyond memorizing moves. We build complete players.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={i} delay={i * 0.2} direction="up">
                <div className="text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-white/70 leading-relaxed">{pillar.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
