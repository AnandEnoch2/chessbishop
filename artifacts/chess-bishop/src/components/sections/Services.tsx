import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Crown, User, Users, MonitorPlay } from "lucide-react";

export function Services() {
  const courses = [
    {
      title: "Beginner Fundamentals",
      icon: BookOpen,
      price: "$49",
      period: "/ month",
      desc: "Learn piece movements, basic tactics, and foundational opening principles.",
      features: ["Rules & Movements", "Basic Checkmates", "Opening Principles"]
    },
    {
      title: "Intermediate Mastery",
      icon: Target,
      price: "$79",
      period: "/ month",
      desc: "Focus on tactical patterns, positional evaluation, and endgame techniques.",
      features: ["Advanced Tactics", "Positional Play", "Endgame Fundamentals"],
      popular: true
    },
    {
      title: "Advanced Tournament Prep",
      icon: Crown,
      price: "$129",
      period: "/ month",
      desc: "Deep calculation, personalized opening repertoire, and game analysis.",
      features: ["Opening Repertoire", "Deep Calculation", "Opponent Profiling"]
    },
    {
      title: "1-on-1 Private Coaching",
      icon: User,
      price: "$80",
      period: "/ hour",
      desc: "Intensive, personalized sessions tailored exactly to your weaknesses and goals.",
      features: ["Game Analysis", "Custom Study Plan", "Direct Mentorship"]
    },
    {
      title: "Group Classes",
      icon: Users,
      price: "$35",
      period: "/ session",
      desc: "Learn collaboratively with peers in small, interactive groups of 5-8 students.",
      features: ["Peer Learning", "Training Games", "Group Analysis"]
    },
    {
      title: "Online Video Course",
      icon: MonitorPlay,
      price: "$199",
      period: " one-time",
      desc: "Self-paced learning with 200+ instructional videos covering all phases of the game.",
      features: ["Lifetime Access", "200+ HD Videos", "Downloadable PGNs"]
    }
  ];

  return (
    <section id="courses" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Training Programs</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Choose Your Path to Mastery</h3>
            <p className="text-white/70 text-lg">Structured curriculum designed to elevate your ELO rating, whether you're touching a piece for the first time or preparing for a Grandmaster norm.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`relative h-full flex flex-col glass-card glass-card-hover rounded-2xl p-8 ${course.popular ? 'border-primary/50 shadow-primary/10 shadow-xl' : ''}`}>
                  {course.popular && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="w-14 h-14 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 text-primary">
                    <Icon size={28} />
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold text-white mb-2">{course.title}</h4>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{course.price}</span>
                    <span className="text-white/50">{course.period}</span>
                  </div>
                  
                  <p className="text-white/70 mb-8 flex-grow">{course.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant={course.popular ? "default" : "glass"} className="w-full mt-auto">
                    Enroll Now
                  </Button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
