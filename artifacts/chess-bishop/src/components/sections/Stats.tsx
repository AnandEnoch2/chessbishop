import { FadeIn } from "@/components/animations/FadeIn";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 500, suffix: "+", label: "Students Taught" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Tournament Champions" },
    { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
  ];

  return (
    <section className="py-20 relative z-10 -mt-10" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 first:pt-0">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 flex items-baseline">
                  {inView ? (
                    <CountUp 
                      end={stat.value} 
                      decimals={stat.decimals || 0} 
                      duration={2.5}
                      useEasing
                    />
                  ) : "0"}
                  <span className="text-3xl md:text-4xl text-white ml-1">{stat.suffix}</span>
                </div>
                <p className="text-white/60 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
