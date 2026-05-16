import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Apply() {
  return (
    <main className="min-h-screen bg-[#13111C] text-slate-50 selection:bg-[#5227FF] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#A991FF] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              Admissions
            </span>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
              Apply to Nexus University
            </h1>
            <p className="text-gray-400 font-light">
              Take the first step towards shaping your destiny. Fill out the application form below.
            </p>
          </div>
          
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">First name</label>
                <input type="text" id="first-name" name="first-name" className="w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all" required />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">Last name</label>
                <input type="text" id="last-name" name="last-name" className="w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all" required />
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-2">Program of Interest</label>
              <select id="program" name="program" className="w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all [&>option]:bg-[#13111C] [&>option]:text-white">
                <option value="cs">Computer Science & AI</option>
                <option value="design">Digital Design & Arts</option>
                <option value="business">Business & Innovation</option>
                <option value="engineering">Quantum Engineering</option>
              </select>
            </div>

            <div>
              <label htmlFor="statement" className="block text-sm font-medium text-gray-300 mb-2">Personal Statement</label>
              <textarea id="statement" name="statement" rows="4" className="w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all" placeholder="Tell us why you want to join Nexus..."></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#5227FF] hover:bg-[#6842FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5227FF] transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(82,39,255,0.3)]">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
