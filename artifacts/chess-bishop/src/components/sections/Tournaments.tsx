import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, FileText, Image } from "lucide-react";

const registrationSites = [
  { url: "www.chessfee.com", link: "https://www.chessfee.com" },
  { url: "www.signinchess.com", link: "https://www.signinchess.com" },
  { url: "www.chessentry.in", link: "https://www.chessentry.in" },
  { url: "www.chessmil.com", link: "https://www.chessmil.com" },
];

const trophyEvents = [
  {
    title: "Dhoni's Trophy",
    subtitle: "Below 1600",
    actions: [
      { label: "Download Brochure", icon: Download, href: "#" },
      { label: "Google Form Registration", icon: FileText, href: "#" },
    ],
  },
  {
    title: "Dhoni's Trophy Open",
    subtitle: "E-Certificates",
    actions: [
      { label: "Download E-Certificates", icon: Download, href: "#" },
    ],
  },
  {
    title: "Dhoni's Trophy",
    subtitle: "Below 1600",
    actions: [
      { label: "Download Event-Images", icon: Image, href: "#" },
    ],
  },
];

function QRCode({ data }: { data: string }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(data)}&bgcolor=c8e6f0&color=000000&margin=6`;
  return (
    <img
      src={qrUrl}
      alt={`QR code for ${data}`}
      className="w-36 h-36 rounded-md"
    />
  );
}

export function Tournaments() {
  return (
    <section className="bg-background text-foreground">

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 260 }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.35)",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 px-4">
          {/* Sponsor Logos Bar */}
          <div className="bg-white/90 backdrop-blur rounded-full px-8 py-3 flex items-center gap-6 mb-10 shadow-lg">
            {["FIDE", "AICF", "TN Chess", "♛", "LEAD"].map((logo, i) => (
              <span
                key={i}
                className={`font-bold text-sm tracking-wider ${
                  i === 3 ? "text-2xl text-amber-700" : "text-slate-800"
                }`}
              >
                {logo}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white tracking-wider uppercase leading-tight drop-shadow-lg">
            International
            <br />
            Chess Tournament
          </h1>
        </div>
      </div>

      {/* Registration Section */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <FadeIn>
          <h2 className="text-center text-base font-black tracking-[0.2em] uppercase text-white mb-12">
            International Tournaments Brochure &amp; Registration
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {registrationSites.map((site, i) => (
            <FadeIn key={site.url} delay={i * 0.08}>
              <div className="bg-[#c8e6f0] rounded-xl p-5 flex flex-col items-center gap-4">
                <p className="text-xs font-semibold text-slate-600 tracking-wide">{site.url}</p>
                <a href={site.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 flex items-center gap-1.5"
                  >
                    Register Now <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
                <QRCode data={site.link} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Notice */}
        <FadeIn delay={0.2}>
          <div className="border-2 border-primary/50 bg-primary/10 rounded-xl p-6 text-center mb-16">
            <p className="text-white font-bold text-base md:text-lg uppercase tracking-wide">
              "Please Fill Google Form After Registration And Payment Completion Without Fail"
            </p>
          </div>
        </FadeIn>

        {/* Trophy Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trophyEvents.map((event, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[#c8e6f0]/15 border border-[#c8e6f0]/30 rounded-xl p-6 flex flex-col gap-4">
                <div>
                  <p className="font-bold text-white text-lg">{event.title}</p>
                  <p className="text-white/70 text-sm">{event.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {event.actions.map((action) => (
                    <a key={action.label} href={action.href}>
                      <Button
                        size="sm"
                        className="bg-slate-700 hover:bg-slate-600 text-white text-xs flex items-center gap-1.5"
                      >
                        <action.icon className="w-3 h-3" />
                        {action.label}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
