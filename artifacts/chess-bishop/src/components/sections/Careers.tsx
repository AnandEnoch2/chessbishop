import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import { Crown, TrendingUp, Palette, CheckCircle2 } from "lucide-react";

const positions = [
  {
    icon: Crown,
    title: "Chess Coach – FIDE Rated Players",
    requirements: [
      "Good Communication skills in English",
      "Passionate in teaching chess",
      "Kids friendly and sincere trainer",
      "Expert in tech (Skype, Zoom, Google meet, Google Spread sheets, lichess.org, Chessbase etc.)",
      "Active Broadband connection with 20+ MBPS with Laptop, Desktop with webcam is must.",
      "Flexible & Committed in Working.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    requirements: [
      "Communication skills are essential.",
      "Passionate about their work.",
      "Chess Knowledge and update is must.",
      "Customer Friendly person",
    ],
  },
  {
    icon: Palette,
    title: "Designer / Video Editor / Content Creator",
    roles: [
      {
        name: "Content Writer",
        items: [
          "Candidates who like to read & research, understand the audience & the Content & a flair for writing Informative, Creative, engaging content for Social Media Platforms like YouTube, Facebook, Instagram, Twitter. Conceive Ideas & Write Content for Talk show & Blogs.",
        ],
      },
      {
        name: "Designer & Video Editor",
        items: [
          "Design visual content for print and digital applications that is on‑brand, reinforces our status and reputation, and is appropriate for our various audiences.",
          "Video Editors are Economical.",
          "Time Efficient Video Editing.",
          "Video Editors Boost productivity.",
          "Seamlessly Create Appealing Videos.",
          "Work Remotely on Your Projects.",
        ],
      },
      {
        name: "Desired Candidate Profile",
        items: [
          "Degree and Qualification is no bar (Should be Creative)",
          "Excellent writing and editing skills in English",
          "Proven at least 1 year of work experience as a Content Writer, Video Editor",
          "Portfolio of published articles",
          "Search engine optimization",
          "The ability to handle multiple projects concurrently.",
        ],
      },
    ],
  },
];

export function Careers() {
  const { toast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileName(e.target.files?.[0]?.name ?? "");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Application submitted!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
      setFileName("");
    }, 1200);
  }

  return (
    <section className="bg-background text-foreground">

      {/* Hero / Intro */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <FadeIn>
          <p className="text-center text-xs font-bold tracking-[0.3em] text-primary uppercase mb-16">
            Careers
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Illustration */}
          <FadeIn>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full bg-primary/30 flex items-center justify-center">
                    <svg viewBox="0 0 200 280" className="w-44 h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="60" r="40" fill="#d4a843" opacity="0.9"/>
                      <ellipse cx="100" cy="200" rx="50" ry="70" fill="#60a5fa" opacity="0.85"/>
                      <circle cx="100" cy="58" r="30" fill="#fde68a"/>
                      <ellipse cx="100" cy="52" rx="32" ry="18" fill="#92400e"/>
                      <path d="M70 58 Q100 80 130 58" stroke="#78350f" strokeWidth="2" fill="none"/>
                      <circle cx="88" cy="55" r="4" fill="#1e293b"/>
                      <circle cx="112" cy="55" r="4" fill="#1e293b"/>
                      <path d="M92 68 Q100 74 108 68" stroke="#92400e" strokeWidth="2" fill="none"/>
                      <rect x="85" y="64" width="30" height="8" rx="4" fill="#d97706" opacity="0.6"/>
                      <ellipse cx="100" cy="270" rx="45" ry="12" fill="#1e293b" opacity="0.4"/>
                      <rect x="78" y="168" width="18" height="65" rx="6" fill="#1e293b"/>
                      <rect x="104" y="168" width="18" height="65" rx="6" fill="#1e293b"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We Are Always Looking For{" "}
              <span className="text-primary">Great Teachers!</span>
              <br />
              <span className="text-2xl md:text-3xl text-white/90">
                If You Are Passionate About Teaching Reach Out To Us By Filling The Form Below.
              </span>
            </h2>

            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <p>We are currently looking for coaches, with the following requirements:</p>
              <ul className="space-y-2">
                {[
                  "Fluent in English",
                  "Passionate about teaching chess",
                  "Passionate about working with young kids",
                  "Expert in Technology (Skype, Zoom, Google Sheets, Lichess.org, Chessbase etc.)",
                  "Active Internet Connection (20+ Mbps) and Desktop/Laptop with a webcam is must",
                  "Committed, sincere, flexible and willing to learn.",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p>
                Please attach your resume at the bottom of the page, and a video clip of you teaching chess in English.
              </p>
              <p>
                <strong className="text-white">Note:</strong> If you don't have a clip, record a beginner clip explaining a tactical concept for about 8-10 minutes in English and attach it to the form.
              </p>
              <p>
                If the clip size is more than 10 MB, please email the clipping to{" "}
                <a href="mailto:hrchessbishop@gmail.com" className="text-primary font-semibold hover:underline">
                  hrchessbishop@gmail.com
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Our Positions */}
      <div className="border-t border-white/10 bg-white/2">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Our <span className="text-primary">Position</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positions.map((pos, i) => (
              <FadeIn key={pos.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-primary/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-6">
                    <pos.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4">{pos.title}</h3>

                  {pos.requirements && (
                    <ul className="space-y-2">
                      {pos.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-white/65">
                          <span className="text-primary mt-1">▪</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {pos.roles && (
                    <div className="space-y-5">
                      {pos.roles.map((role) => (
                        <div key={role.name}>
                          <p className="font-semibold text-primary text-sm mb-2">{role.name}:</p>
                          <ul className="space-y-1.5">
                            {role.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs text-white/65">
                                <span className="text-primary mt-0.5">▪</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Upload Your <span className="text-primary">Resume</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">First Name</label>
                  <Input required placeholder="First Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Last Name</label>
                  <Input required placeholder="Last Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Phone</label>
                  <Input required type="tel" placeholder="Phone Number" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Email</label>
                  <Input required type="email" placeholder="Email Address" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Date of Birth</label>
                  <Input type="date" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Current FIDE Standard Rating</label>
                  <Input placeholder="e.g. 1800" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Highest FIDE Standard Rating and when was it achieved?</label>
                  <Input placeholder="e.g. 2100 in 2020" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">How many years of coaching experience do you have?</label>
                  <Input placeholder="e.g. 3 years" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Highest Educational Qualification</label>
                  <Input placeholder="e.g. B.Sc. Computer Science" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Any notable students? and their performances?</label>
                  <Input placeholder="Describe notable students..." className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">What coaching fees are you expecting for a 1-hour session?</label>
                  <Input placeholder="e.g. $20/hr" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">List the coaches who have trained you?</label>
                  <Textarea placeholder="List coach names..." className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none" rows={3} />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">
                  Attach Your Resume:{" "}
                  <span className="text-white/50 text-xs">
                    File Formats Only: <strong className="text-white/70">".doc", ".docx", ".pdf", ".zip", ".txt"</strong>
                  </span>
                </label>
                <div
                  className="border border-white/10 rounded-lg bg-white/5 px-4 py-3 flex items-center gap-3 cursor-pointer hover:border-primary/40 transition-colors"
                  onClick={() => fileRef.current?.click()}
                >
                  <span className="text-sm bg-white/10 text-white px-3 py-1 rounded border border-white/20 shrink-0">
                    Choose File
                  </span>
                  <span className="text-white/40 text-sm truncate">
                    {fileName || "No file chosen"}
                  </span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".doc,.docx,.pdf,.zip,.txt"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="px-12"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Apply Now"}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
