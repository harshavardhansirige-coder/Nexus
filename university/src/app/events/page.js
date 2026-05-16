import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const eventImages = [
  "image copy 10.png", "image copy 11.png", "image copy 12.png", 
  "image copy 13.png", "image copy 14.png", "image copy 15.png"
];

export default function Events() {
  return (
    <main className="min-h-screen bg-[#13111C] text-slate-50 selection:bg-[#5227FF] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#A991FF] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              Campus Life
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] to-[#A991FF]">Events</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Discover the vibrant life at Nexus. From hackathons and tech talks to cultural festivals and networking mixers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventImages.map((imgName, index) => (
              <div key={index} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={`/images/${imgName}`} 
                    alt={`Event ${index + 1}`} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13111C] to-transparent opacity-80"></div>
                </div>
                <div className="p-6 relative z-10 -mt-16">
                  <span className="inline-block px-3 py-1 bg-[#5227FF] text-xs font-bold rounded-md mb-3">
                    NOV {10 + index}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A991FF] transition-colors">
                    Annual Nexus Gathering {index + 1}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    Join us for an incredible experience connecting with peers, industry leaders, and alumni. 
                  </p>
                  <Link href="/apply" className="text-sm font-semibold text-white hover:text-[#A991FF] flex items-center transition-colors">
                    Register Now <span className="ml-2">→</span>
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
