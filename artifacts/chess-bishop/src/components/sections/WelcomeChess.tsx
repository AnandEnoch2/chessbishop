import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function WelcomeChess() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3"
          >
            Welcome
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
          >
            We Have Been Igniting Young Minds <br className="hidden md:block" />
            Through Chess For Over Seven Years.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base leading-relaxed mb-4"
          >
            Chess Bishop believes the uncracked Chess mystery of centuries could challenge the Neo-cortex of
            the current generation kids and be pivotal in shaping their brain functions in terms of dynamic
            cognitive development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-base leading-relaxed mb-10"
          >
            Kids will be excited to understand and amazed by the positive experience that chess offers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="px-8 bg-amber-600 hover:bg-amber-700 text-white border-0" onClick={() => scrollTo("courses")}>
              Start Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-gray-400 text-gray-700 hover:bg-gray-100"
              onClick={() => scrollTo("about")}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
