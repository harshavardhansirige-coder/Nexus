'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F293A] to-[#13111C] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5227FF] rounded-full blur-[120px] opacity-20 z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#A991FF] rounded-full blur-[120px] opacity-20 z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join a community of forward-thinkers, innovators, and leaders. Applications for the upcoming semester are now open.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/apply" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full bg-[#5227FF] hover:bg-[#6842FF] text-white font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(82,39,255,0.4)] text-lg group">
              Apply Now 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-bold transition-all text-lg">
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
