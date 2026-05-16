'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Events', href: '/events' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#13111C]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
              Nexus<span className="text-[#5227FF]">University</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  {link.name}
                </Link>
              ))}
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Log in
              </Link>
              <Link href="/signup" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Sign up
              </Link>
              <Link href="/apply" className="bg-[#5227FF] hover:bg-[#6842FF] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(82,39,255,0.3)]">
                Apply Now
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#13111C]/95 backdrop-blur-md border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/login" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
            <Link 
              href="/apply" 
              className="block w-full text-center mt-4 bg-[#5227FF] hover:bg-[#6842FF] text-white px-5 py-3 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
