'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Alumni, Software Engineer at TechCorp',
      content: 'Nexus University didn\'t just give me a degree; it gave me the practical skills and network to land my dream job right after graduation. The professors truly care about your success.',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Michael Chen',
      role: 'Current Student, Business Administration',
      content: 'The collaborative environment here is unmatched. I\'ve had the opportunity to work on real-world projects with students from different disciplines, which has broadened my perspective immensely.',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Alumni, Biotechnology Researcher',
      content: 'The research facilities at Nexus are world-class. Having access to cutting-edge equipment as an undergraduate was a game-changer for my academic and professional trajectory.',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#13111C] relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#5227FF]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#5227FF] tracking-widest uppercase mb-3"
          >
            Student Voices
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What Our Community Says
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="flex text-[#A991FF] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="mr-1" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-[#5227FF]/50 mr-4"
                />
                <div>
                  <h5 className="text-white font-bold text-sm">{testimonial.name}</h5>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
