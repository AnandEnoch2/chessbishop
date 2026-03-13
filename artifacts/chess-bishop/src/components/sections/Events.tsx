import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export function Events() {
  const events = [
    {
      title: "Monthly Online Blitz Tournament",
      date: "Every First Saturday",
      time: "14:00 GMT",
      location: "Chess.com / Lichess",
      desc: "Open to all students. Swiss system, 3+2 time control.",
      tag: "Online"
    },
    {
      title: "Annual Chess Summer Camp",
      date: "August 15 - 20, 2025",
      time: "09:00 - 16:00",
      location: "London Chess Center",
      desc: "Intensive 1-week program with grandmaster guest lectures.",
      tag: "In-Person"
    },
    {
      title: "Youth Championship U-18",
      date: "October 10, 2025",
      time: "10:00 AM",
      location: "City Hall Arena",
      desc: "FIDE-rated tournament for youth players looking to gain rating points.",
      tag: "Rated"
    },
    {
      title: "Club Championship Final",
      date: "December 5, 2025",
      time: "18:00 GMT",
      location: "Main Clubhouse",
      desc: "Annual rated tournament for exclusive club members.",
      tag: "Members Only"
    }
  ];

  return (
    <section id="events" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn direction="right" className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Tournaments & Gatherings</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Upcoming Events</h3>
          </FadeIn>
          <FadeIn direction="left">
            <Button variant="outline">View Calendar</Button>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:bg-white/[0.05] transition-colors border-l-4 border-l-transparent hover:border-l-primary">
                
                {/* Date Block */}
                <div className="flex-shrink-0 w-full sm:w-32 bg-background/50 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-white/5">
                  <Calendar className="text-primary mb-2" size={24} />
                  <span className="text-xs text-white/50 uppercase font-semibold block mb-1">Date</span>
                  <span className="text-white font-bold text-sm">{event.date.split(',')[0]}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="text-xl font-display font-bold text-white">{event.title}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/20">
                      {event.tag}
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-4">{event.desc}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} /> {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} /> {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
