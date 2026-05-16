'use client';
import { motion } from 'framer-motion';
import { Award, BookOpen, Globe2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Global Students', value: '15,000+', icon: Globe2 },
    { label: 'Programs', value: '120+', icon: BookOpen },
    { label: 'Excellence Awards', value: '50+', icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-[#13111C] relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#181521]/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-[#5227FF] tracking-widest uppercase mb-3">About Nexus</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Redefining Education for the Modern Era.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At Nexus University, we believe that education is not just about acquiring knowledge—it's about transforming the way we see the world. Our campus is a hub of innovation where ambitious minds come together to solve tomorrow's challenges today.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-1 bg-[#5227FF] rounded-full"></div>
              <p className="text-white font-medium italic text-lg">
                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-start ${index === 2 ? 'sm:col-span-2' : ''} hover:bg-white/10 transition-colors group`}
                >
                  <div className="p-3 rounded-lg bg-[#5227FF]/20 text-[#A991FF] mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h4>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
