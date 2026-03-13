import { FadeIn } from "@/components/animations/FadeIn";
import { Trophy, Star, Target, Award } from "lucide-react";

export function About() {
  const achievements = [
    { icon: Trophy, text: "International Chess Master (IM)" },
    { icon: Star, text: "Former National Champion" },
    { icon: Target, text: "Certified FIDE Instructor" },
    { icon: Award, text: "Coached 10+ National Masters" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0 border border-white/10 shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/coach.png`} 
                  alt="Chess Master Coach" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                {/* Decorative border elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/60" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/60" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-display font-bold text-white">David Bishop</h3>
                  <p className="text-primary font-medium">International Master</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">About The Coach</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Elevating minds through the <span className="text-gradient-gold">Art of Chess</span>.
              </h3>
              
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed mb-8">
                <p>
                  With over 15 years of professional coaching experience, I've dedicated my life to unlocking the potential within every student. Chess is more than a game—it's a rigorous mental gymnasium that hones critical thinking, instills patience, and demands strategic foresight.
                </p>
                <p className="italic border-l-2 border-primary pl-4 text-white/90">
                  "I believe chess develops skills applicable in every area of life. When you learn to evaluate positions and anticipate consequences, you change how you approach real-world problems."
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 glass-card p-4 rounded-xl">
                      <div className="bg-primary/20 p-2 rounded-lg text-primary">
                        <Icon size={20} />
                      </div>
                      <span className="text-white/90 font-medium text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
