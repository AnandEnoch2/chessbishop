import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const associates = [
  {
    name: "Startup India",
    bg: "#fff",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-6 py-4">
        <span className="text-2xl font-bold text-gray-800 leading-none">
          <span className="text-orange-500">#</span>startup
          <span className="text-green-600">in</span>
          <span className="text-blue-600">dia</span>
        </span>
        <div className="w-8 h-1 mt-2 bg-gradient-to-r from-orange-500 via-blue-600 to-green-600 rounded-full" />
      </div>
    ),
  },
  {
    name: "Ancient Chess Academy",
    bg: "#fff",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-4 py-4 text-center">
        <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center mb-2">
          <span className="text-white text-xl">♞</span>
        </div>
        <span className="text-xs font-bold text-green-800 uppercase tracking-wide leading-tight">
          Ancient Chess Academy
        </span>
        <span className="text-[10px] text-gray-500 mt-0.5">Mystery of Squares</span>
      </div>
    ),
  },
  {
    name: "Champions Online Chess Academy",
    bg: "#fff",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-4 py-4 text-center">
        <div
          className="w-14 h-14 mb-2"
          style={{
            background:
              "repeating-conic-gradient(#222 0% 25%, #fff 0% 50%) 0 0 / 14px 14px",
            borderRadius: 4,
          }}
        />
        <span className="text-xs font-bold text-gray-800 uppercase tracking-wide leading-tight">
          Champions Online Chess Academy
        </span>
      </div>
    ),
  },
];

const features = [
  {
    icon: "♛",
    title: "WORLD'S #1 CHESS Curriculum",
    desc: "Curated by Doctorate Researchers in Metacognition & Emotional Intelligence, professionally customized and crafted by well-experienced FIDE Rated chess Players.",
  },
  {
    icon: "♜",
    title: "ACADEMIC Chess",
    desc: "We are dedicated to broadening and developing chess as art, recreation, and as a significant element of culture all around the world.",
  },
];

export function Associates() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: featRef, inView: featInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-[#0f1c2e]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Our <span className="text-amber-500">Associates</span>
        </motion.h2>

        {/* Associate logos */}
        <div ref={ref} className="flex flex-wrap justify-center gap-8 mb-20">
          {associates.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="w-48 h-36 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ background: a.bg }}
            >
              {a.content}
            </motion.div>
          ))}
        </div>

        {/* Features row */}
        <div ref={featRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature list */}
          <div className="space-y-0">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -30 }}
                animate={featInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="flex items-start gap-5 py-7 border-b border-white/10 last:border-0">
                  <div className="w-14 h-14 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-amber-500">{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-2">{f.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Illustration / chess image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={featInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden h-72 lg:h-80 bg-gradient-to-br from-amber-500/10 to-blue-900/30 border border-white/10 flex items-center justify-center"
          >
            {/* Decorative chess illustration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[180px] select-none pointer-events-none">
              ♟
            </div>
            <div className="relative z-10 text-center px-8">
              <div className="text-6xl mb-4 flex justify-center gap-3">
                <span className="animate-bounce" style={{ animationDelay: "0s" }}>♟</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>♙</span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>♟</span>
              </div>
              <p className="text-amber-400 font-bold text-lg">Play. Learn. Conquer.</p>
              <p className="text-white/50 text-sm mt-2">Strategy is everything on the board and beyond.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
