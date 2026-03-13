import { FadeIn } from "@/components/animations/FadeIn";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Chess Bishop transformed my game. I went from 1200 to 1800 ELO in just 8 months of private coaching. The structured approach to endgame strategy was the missing piece for me.",
      name: "Alex Mercer",
      title: "Tournament Player, Age 16"
    },
    {
      quote: "The best investment I made for my child's development. Not only did his chess improve, but his focus and academic performance in school saw a massive boost.",
      name: "Sarah Jenkins",
      title: "Parent"
    },
    {
      quote: "Coach's analysis sessions are incredibly detailed. I finally understand strategic chess instead of just playing 'hope chess'. Highly recommend the intermediate mastery course!",
      name: "David Kim",
      title: "Club Member"
    },
    {
      quote: "Won my first local tournament after 3 months of coaching. The opening repertoire provided was bulletproof. Thank you for the dedication!",
      name: "James Thompson",
      title: "Amateur Competitor"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Hear from our Students</h3>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                <Quote className="text-primary/40 w-12 h-12 mb-6" />
                <p className="text-lg text-white/90 font-light leading-relaxed mb-8 flex-grow">
                  "{item.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-white text-lg">{item.name}</p>
                  <p className="text-primary text-sm">{item.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
