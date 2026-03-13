import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "Top 5 Chess Openings for Beginners to Dominate Early",
      excerpt: "Start your games with confidence. These five fundamental openings teach development, center control, and king safety.",
      date: "Oct 12, 2024",
      category: "Strategy",
      // Unsplash fallback for standard blog post stock images
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "How Chess Dramatically Improves Academic Performance",
      excerpt: "Recent studies show a direct correlation between learning chess and improved math, reading, and spatial reasoning skills in children.",
      date: "Sep 28, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1603228254113-176bd1772c91?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Psychology of Chess: Winning the Mental Game",
      excerpt: "Recovering from blunders, managing clock pressure, and reading your opponent's body language over the board.",
      date: "Sep 15, 2024",
      category: "Mindset",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn direction="right" className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Insights & Articles</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Latest from the Board</h3>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group cursor-pointer h-full flex flex-col glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-white/50 text-sm mb-3 block">{post.date}</span>
                  <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-white/70 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm gap-2 group-hover:gap-3 transition-all mt-auto">
                    Read Article <ArrowRight size={16} />
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
