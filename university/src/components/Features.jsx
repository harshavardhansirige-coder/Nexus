'use client';
import { motion } from 'framer-motion';
import { Cpu, Palette, Microscope, Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const programs = [
    {
      title: 'Computer Science & AI',
      description: 'Master algorithms, machine learning, and software engineering in state-of-the-art labs.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Design & Interactive Media',
      description: 'Blend creativity with technology to design immersive digital experiences.',
      icon: Palette,
      color: 'from-pink-500 to-rose-400'
    },
    {
      title: 'Biotechnology',
      description: 'Pioneer breakthroughs in genomics and molecular biology for a healthier future.',
      icon: Microscope,
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Business & Entrepreneurship',
      description: 'Develop the acumen to lead startups and manage global enterprises.',
      icon: Briefcase,
      color: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-[#181521] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#5227FF] tracking-widest uppercase mb-3"
          >
            Academic Excellence
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Explore Our Programs
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Choose from a wide array of cutting-edge disciplines tailored to prepare you for the careers of tomorrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-[#13111C] border border-white/5 hover:border-[#5227FF]/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-bl-[100px] transition-opacity group-hover:opacity-20`}></div>
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#5227FF]/20 transition-colors">
                    <Icon className="text-white group-hover:text-[#A991FF] transition-colors" size={28} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{program.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {program.description}
                  </p>
                  
                  <Link href="/programs" className="inline-flex items-center text-sm font-semibold text-[#A991FF] group-hover:text-[#5227FF] transition-colors">
                    View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
