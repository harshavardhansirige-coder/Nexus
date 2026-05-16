import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote: "Nexus didn't just teach me how to code; it taught me how to think differently. The collaborative environment and access to top-tier resources accelerated my growth exponentially.",
    author: "Sarah Chen",
    role: "Software Engineer at Google",
    initial: "S"
  },
  {
    quote: "The emphasis on real-world projects and industry connections meant I had multiple job offers before graduation. Nexus truly bridges the gap between academia and industry.",
    author: "James Rodriguez",
    role: "Product Manager at TechCorp",
    initial: "J"
  },
  {
    quote: "As a design student, finding a community that values both aesthetics and functionality was crucial. Nexus provided the perfect playground for my creativity.",
    author: "Elena Petrova",
    role: "Lead Designer at Creative Studio",
    initial: "E"
  },
  {
    quote: "The professors are not just academics; they are industry veterans who bring invaluable practical experience into the classroom.",
    author: "David Kim",
    role: "Data Scientist at OpenAI",
    initial: "D"
  },
  {
    quote: "Nexus University's focus on ethical tech and social impact aligned perfectly with my career goals. I feel prepared to make a real difference.",
    author: "Aisha Patel",
    role: "AI Ethics Researcher",
    initial: "A"
  },
  {
    quote: "The global alumni network is incredible. Wherever I go, there's always a Nexus grad willing to help out and collaborate.",
    author: "Marcus Johnson",
    role: "Startup Founder",
    initial: "M"
  }
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-[#13111C] text-slate-50 selection:bg-[#5227FF] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#A991FF] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              Student Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Hear from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] to-[#A991FF]">Alumni</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Discover how Nexus University has transformed the lives and careers of our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#5227FF]/50 transition-colors backdrop-blur-sm relative group">
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-[#5227FF]/10 font-serif leading-none group-hover:text-[#5227FF]/20 transition-colors">
                  &quot;
                </div>
                
                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed font-light">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5227FF] to-[#A991FF] flex items-center justify-center text-white font-bold text-xl mr-4 shadow-[0_0_15px_rgba(82,39,255,0.3)]">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t.author}</h4>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
