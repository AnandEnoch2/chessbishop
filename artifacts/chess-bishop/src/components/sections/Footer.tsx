import { Crown, Twitter, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Coaching Services", href: "/courses" },
  { label: "Tournament Calendar", href: "/events" },
  { label: "International Tournaments", href: "/tournaments" },
  { label: "Blog & Resources", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [, setLocation] = useLocation();

  function navigate(href: string) {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Crown className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider">
                Chess<span className="text-primary">Bishop</span>
              </span>
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering chess players of all levels to reach their full potential through structured, professional coaching and deep analysis.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'].map((link) => (
                <li key={link}>
                  <span className="text-white/60 text-sm cursor-default">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe for weekly chess puzzles, strategy tips, and exclusive course discounts.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Email address" type="email" className="bg-white/5 border-white/10" required />
              <Button type="submit" size="icon" variant="default" className="shrink-0">
                <Send size={16} />
              </Button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Chess Bishop. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with a passion for the game.
          </p>
        </div>
      </div>
    </footer>
  );
}
