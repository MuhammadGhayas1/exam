import React from 'react';
import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold tracking-tight">ExamSystem</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A comprehensive Java-based examination platform developed by Spaghetti Coders for COMSATS University Islamabad, Sahiwal Campus.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/spaghetti-coders" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/spaghetti-coders" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:spaghetti@coders.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-wrap gap-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#showcase" className="text-gray-400 hover:text-white transition-colors">Showcase</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Examination System. All rights reserved. Designed by Spaghetti Coders.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://example.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://example.com/terms" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
