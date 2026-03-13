import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    lines: [
      { label: "WhatsApp", value: "+91 96005 65326", href: "https://wa.me/919600565326" },
      { label: "Phone", value: "+91 82484 72501", href: "tel:+918248472501" },
    ],
  },
  {
    icon: MapPin,
    lines: [
      {
        label: "Address",
        value:
          "31/13 Second street, Srinivasa Nagar, Co operative Colony Road, MC Road, Thanjavur, TamilNadu, India Pincode: 613 007.",
        href: null,
      },
    ],
  },
  {
    icon: Mail,
    lines: [
      { label: "Email", value: "teamchessbishop@gmail.com", href: "mailto:teamchessbishop@gmail.com" },
    ],
  },
];

const classOptions = [
  "1 class per week",
  "2 classes per week",
  "3 classes per week",
  "4 classes per week",
  "5 classes per week",
  "More than 5",
];

const hearOptions = [
  "Google Search",
  "Social Media (Facebook / Instagram)",
  "YouTube",
  "Friend / Family Referral",
  "Chess Tournament",
  "Other",
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <section id="contact" className="bg-background text-foreground">

      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-12">
        <FadeIn>
          <p className="text-center text-xs font-bold tracking-[0.3em] text-primary uppercase mb-12">
            Contact Us
          </p>
        </FadeIn>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {infoCards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-primary/15 border border-primary/30 rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-primary/60 transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-background/40 border border-primary/40 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1.5">
                  {card.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.value}
                        href={line.href}
                        className="block text-sm font-medium text-white hover:text-primary transition-colors"
                      >
                        {line.value}
                      </a>
                    ) : (
                      <p key={line.value} className="text-sm text-white/80 leading-relaxed">
                        {line.value}
                      </p>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Google Maps Embed */}
        <FadeIn delay={0.2}>
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-20" style={{ height: 400 }}>
            <iframe
              title="Chess Bishop Location – Thanjavur"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.1401%2C10.7770%2C79.1601%2C10.7970&layer=mapnik&marker=10.7870%2C79.1501"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>

      {/* Contact Form */}
      <div className="border-t border-white/10 bg-white/2">
        <div className="container mx-auto px-4 md:px-6 py-20 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Contact <span className="text-primary">Form</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  required
                  placeholder="Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  required
                  type="tel"
                  placeholder="Phone"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  type="number"
                  placeholder="Age"
                  min={4}
                  max={100}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  placeholder="City"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  placeholder="Country"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  placeholder="FIDE Rating"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Input
                  placeholder="Time Zone"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />

                {/* No of classes dropdown */}
                <div className="relative">
                  <select
                    className="w-full h-12 rounded-md bg-white/5 border border-white/10 text-white/70 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-background text-white/50">
                      No of class per week
                    </option>
                    {classOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-background text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">▾</span>
                </div>

                {/* How did you hear dropdown */}
                <div className="relative">
                  <select
                    className="w-full h-12 rounded-md bg-white/5 border border-white/10 text-white/70 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-background text-white/50">
                      How did you hear about us?
                    </option>
                    {hearOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-background text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">▾</span>
                </div>
              </div>

              {/* Comment */}
              <Textarea
                placeholder="Comment"
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
              />

              <div className="flex justify-center pt-2">
                <Button type="submit" size="lg" className="px-12" disabled={submitting}>
                  {submitting ? "Sending..." : "Contact Us"}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
