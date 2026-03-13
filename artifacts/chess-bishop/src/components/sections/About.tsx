import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Trophy, Star, Target, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    initials: "SK",
    name: "Surya Kumar",
    role: "Head Chess Coach & Founder",
    color: "from-blue-900 to-blue-700",
  },
  {
    initials: "RV",
    name: "Rahul Venkat",
    role: "Senior Chess Trainer",
    color: "from-amber-800 to-amber-600",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    role: "Academic Chess Coordinator",
    color: "from-teal-900 to-teal-700",
  },
];

const testimonials = [
  {
    name: "Vijayalakshmi",
    role: "Parent Of Karthick From London",
    text: "Surya Sir is very good. He explains concepts really well in a way that we can understand easily. My son really enjoys his chess classes as he finds them fun and exciting.",
    avatar: "V",
    color: "bg-slate-400",
  },
  {
    name: "Paras Parmar",
    role: "Parent Of Aaren Parmar From UAE",
    text: "We as parents are satisfied with the progress Aaren has made in learning chess with Chessbishop. Tutor is very good at explaining terminology and concepts. Aaren found them easy to learn and grasp. Classes are crisp and to the point.",
    avatar: "P",
    color: "bg-slate-500",
  },
  {
    name: "Dr. Sathya Kumar J., Ph.D",
    role: "Visiting Professor in B Schools (Rajalakshmi School Of Business And Firebird Institute Of Research In Management)",
    text: "Surya and his team's Chess game coaching methodology is innovative and wonderful for learning.",
    avatar: "S",
    color: "bg-amber-600",
    hasPhoto: true,
  },
];

function MissionVision() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-16"
        >
          About
        </motion.p>

        {/* Mission Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Mission image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex-shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center border border-amber-200">
              {/* Decorative chess board illustration */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10 pointer-events-none">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={
                      (Math.floor(i / 8) + (i % 8)) % 2 === 0
                        ? "bg-amber-800"
                        : "bg-amber-200"
                    }
                  />
                ))}
              </div>
              <div className="relative z-10 text-center px-8">
                <div className="text-7xl mb-3 select-none">♟</div>
                <p className="text-amber-800 font-semibold text-sm">Kids Playing Chess</p>
              </div>
            </div>
          </motion.div>

          {/* Mission text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Our <span className="text-amber-600">Mission</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To engage kids with Mindfulness and improve their cognitive ability.
              To make them master the game of chess through fun-filled interactions
              and training.
            </p>
          </motion.div>
        </div>

        {/* Vision Row — reversed */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Vision image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex-shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-200">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10 pointer-events-none">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={
                      (Math.floor(i / 8) + (i % 8)) % 2 === 0
                        ? "bg-blue-800"
                        : "bg-blue-200"
                    }
                  />
                ))}
              </div>
              <div className="relative z-10 text-center px-8">
                <div className="text-7xl mb-3 select-none">♞</div>
                <p className="text-blue-800 font-semibold text-sm">Young Chess Champion</p>
              </div>
            </div>
          </motion.div>

          {/* Vision text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Our <span className="text-amber-600">Vision</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To accelerate the mental health of the students through the medium of
              chess (64 squares).
              <br /><br />
              To create better individuals for society.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function OurTeam() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Our <span className="text-amber-600">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-base max-w-xl mx-auto mb-14"
        >
          We are dedicated to broadening and developing chess as art, recreation,
          and as a significant element of culture in our planet.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center group"
            >
              {/* Avatar */}
              <div
                className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden`}
              >
                <span className="text-white text-5xl font-bold select-none">
                  {member.initials}
                </span>
              </div>
              <h4 className="text-gray-900 font-bold text-lg">{member.name}</h4>
              <p className="text-amber-600 text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatPeopleSay() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <div ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-3"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-14"
        >
          What <span className="text-amber-600">People</span> Say
        </motion.h2>

        <div className="relative flex items-center">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-amber-50 hover:border-amber-400 transition-colors shadow"
            aria-label="Previous"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-12 w-full">
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div
                  key={t.name + current + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center px-7 py-8 relative"
                >
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full ${t.color} flex items-center justify-center text-white text-2xl font-bold mb-6 -mt-12 shadow-md border-4 border-white`}
                  >
                    {t.avatar}
                  </div>

                  <p className="text-gray-500 text-sm italic leading-relaxed mb-6 text-center">
                    "{t.text}"
                  </p>

                  <h4 className="text-gray-900 font-bold text-base">{t.name}</h4>
                  <p className="text-gray-400 text-xs mt-1 text-center leading-snug">{t.role}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-amber-50 hover:border-amber-400 transition-colors shadow"
            aria-label="Next"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-amber-500" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  const achievements = [
    { icon: Trophy, text: "International Chess Master (IM)" },
    { icon: Star, text: "Former National Champion" },
    { icon: Target, text: "Certified FIDE Instructor" },
    { icon: Award, text: "Coached 10+ National Masters" }
  ];

  return (
    <>
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

      {/* New: Mission & Vision */}
      <MissionVision />

      {/* New: Our Team */}
      <OurTeam />

      {/* New: What People Say */}
      <WhatPeopleSay />
    </>
  );
}
