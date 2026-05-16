import Link from 'next/link';
import { Globe, Mail, MessageSquare, Share2, Link2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0e17] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter mb-6 inline-block">
              Nexus<span className="text-[#5227FF]">University</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Empowering the next generation of global leaders, innovators, and creators through an unparalleled educational experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/harshavardhansirige-coder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5227FF] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5227FF] transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5227FF] transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5227FF] transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5227FF] transition-colors">
                <Link2 size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Academics</h4>
            <ul className="space-y-3">
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">Undergraduate Programs</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">Graduate Programs</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">Online Learning</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">Research Centers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Admissions</h4>
            <ul className="space-y-3">
              <li><Link href="/apply" className="text-gray-400 hover:text-white transition-colors text-sm">Apply Now</Link></li>
              <li><Link href="/apply" className="text-gray-400 hover:text-white transition-colors text-sm">Tuition & Financial Aid</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors text-sm">Campus Tours</Link></li>
              <li><Link href="/apply" className="text-gray-400 hover:text-white transition-colors text-sm">International Students</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">123 University Ave<br />Tech District, City 90210</li>
              <li className="text-gray-400 text-sm">+1 (800) 123-4567</li>
              <li>
                <a href="mailto:admissions@nexus.edu" className="flex items-center text-[#5227FF] hover:text-[#A991FF] transition-colors text-sm font-medium mt-4">
                  <Mail size={16} className="mr-2" />
                  admissions@nexus.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Nexus University. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
