import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const quotes = [
  {
    name: "Siegbert Tarrasch",
    quote: "Chess, like love, like music, has the power to make men happy.",
    icon: "♘",
  },
  {
    name: "Blaise Pascal",
    quote: "Chess is the gymnasium of the mind.",
    icon: "♗",
  },
  {
    name: "Vladimir Putin",
    quote: "Chess makes men wiser and clear-sighted.",
    icon: "♕",
  },
  {
    name: "Garry Kasparov",
    quote: "Chess is life in miniature. Chess is a struggle, chess battles.",
    icon: "♔",
  },
];

export function ChessQuotes() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center px-8 py-10 group"
            >
              {/* Divider between cols */}
              {i < quotes.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-px bg-gray-200" />
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-full border-2 border-amber-500/40 flex items-center justify-center mb-4 group-hover:border-amber-500 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl text-amber-600 select-none">{q.icon}</span>
              </div>

              <h3 className="text-gray-900 font-bold text-lg mb-3">{q.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">"{q.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
