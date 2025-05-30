import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link } from './Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a1a2e]/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center space-x-2 text-white">
            <BookOpen className="h-8 w-8 text-[#c4b5fd]" />
            <span className="text-xl font-bold tracking-tight">ExamSystem</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="text-white/80 hover:text-white transition-colors">About</Link>
            <Link href="#features" className="text-white/80 hover:text-white transition-colors">Features</Link>
            <Link href="#team" className="text-white/80 hover:text-white transition-colors">Team</Link>
            <Link href="#showcase" className="text-white/80 hover:text-white transition-colors">Showcase</Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 bg-[#8257e6] hover:bg-[#9466ff] text-white rounded-md transition-all transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4 bg-[#1a1a2e] mt-2 rounded-md">
              <Link href="#home" className="text-white/80 hover:text-white transition-colors p-2">Home</Link>
              <Link href="#about" className="text-white/80 hover:text-white transition-colors p-2">About</Link>
              <Link href="#features" className="text-white/80 hover:text-white transition-colors p-2">Features</Link>
              <Link href="#team" className="text-white/80 hover:text-white transition-colors p-2">Team</Link>
              <Link href="#showcase" className="text-white/80 hover:text-white transition-colors p-2">Showcase</Link>
              <Link 
                href="#contact" 
                className="px-4 py-2 bg-[#8257e6] text-white rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;