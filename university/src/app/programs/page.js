import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const programImages = [
  "image copy 2.png", "image copy 3.png", "image copy 4.png", 
  "image copy 5.png", "image copy 6.png", "image copy 7.png",
  "image copy 8.png", "image copy 9.png", "image copy 16.png",
  "image copy 17.png", "image copy 18.png", "image copy 19.png",
  "image copy.png", "image.png"
];

const programNames = [
  "Computer Science", "Artificial Intelligence", "Data Science", 
  "Cybersecurity", "Digital Arts", "Business Administration",
  "Quantum Engineering", "Robotics", "Bioinformatics", 
  "Renewable Energy", "Interactive Media", "Space Exploration",
  "Economics", "Psychology"
];

export default function Programs() {
  return (
    <main className="min-h-screen bg-[#13111C] text-slate-50 selection:bg-[#5227FF] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#A991FF] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] to-[#A991FF]">Programs</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Cutting-edge curriculum designed for the innovators, builders, and leaders of tomorrow. Find the path that ignites your passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programImages.map((imgName, index) => (
              <div key={index} className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(82,39,255,0.15)]">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={`/images/${imgName}`} 
                    alt={`Program ${index + 1}`} 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13111C] via-transparent to-transparent opacity-90"></div>
                </div>
                <div className="p-5 relative z-10 -mt-10">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A991FF] transition-colors line-clamp-1">
                    {programNames[index] || "Future Tech"}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    Master the foundational skills and advanced concepts required to excel in this rapidly evolving field.
                  </p>
                  <Link href="/apply" className="inline-flex items-center justify-center w-full py-2 px-4 border border-[#5227FF]/50 text-sm font-medium rounded-lg text-white hover:bg-[#5227FF]/20 transition-all">
                    Apply Now
                  </Link>
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
