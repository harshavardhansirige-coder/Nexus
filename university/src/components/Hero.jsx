'use client';
import DotGrid from './DotGrid';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#13111C]">
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={18}
          baseColor="#2F293A"
          activeColor="#5227FF"
          proximity={150}
          shockRadius={200}
          shockStrength={3}
          resistance={800}
          returnDuration={1.2}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#13111C]/40 via-transparent to-[#13111C]" pointer-events-none></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5227FF]/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#A991FF] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Empowering Future Leaders
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Shape Your Destiny at <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] to-[#A991FF]">
              Nexus University
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            A limitless educational experience designed to push boundaries, spark innovation, and ignite your true potential.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/programs" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#5227FF] hover:bg-[#6842FF] text-white font-medium transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(82,39,255,0.4)] text-lg text-center">
              Explore Programs
            </Link>
            <Link href="/#about" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all backdrop-blur-sm text-lg text-center">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
