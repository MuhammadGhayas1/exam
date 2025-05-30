import React, { useEffect, useRef } from 'react';
import { Shield, Users, Terminal, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Our Project</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            The Console-Based Examination System is designed to streamline the examination process at COMSATS University Islamabad, providing an efficient and secure environment for conducting objective-type examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
            <div className="bg-slate-800/60 p-8 rounded-xl h-full border border-slate-700/50 hover:border-indigo-500/50 transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="text-2xl font-bold text-white mb-4">Problem Statement</h3>
              <p className="text-gray-300 mb-6">
                Manual exam conduction using paper-based methods is time-consuming, resource-intensive, and prone to errors in marking and result compilation. There is also a risk of question leaks and human bias.
              </p>
              <p className="text-gray-300">
                This project addresses these challenges by offering an automated and secure way to conduct multiple-choice exams using a console-based application, reducing human effort and enhancing the integrity of the examination process.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
            <div className="bg-slate-800/60 p-8 rounded-xl h-full border border-slate-700/50 hover:border-indigo-500/50 transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="text-2xl font-bold text-white mb-4">Proposed Solution</h3>
              <p className="text-gray-300 mb-6">
                The system is built using Java with Object-Oriented Programming (OOP) principles to ensure modularity and maintainability. The application operates entirely through the console and stores data using file handling.
              </p>
              <p className="text-gray-300">
                With features for both administrators and students, our system facilitates secure quiz management, timed examinations, and instant result generation, enhancing the overall examination experience.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300">
            <div className="bg-gradient-to-br from-indigo-800/30 to-indigo-600/20 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-indigo-500/10 transition-all transform hover:scale-[1.03] border border-indigo-500/20 hover:border-indigo-500/40">
              <div className="bg-indigo-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-300">Enhanced security measures to prevent cheating and ensure exam integrity</p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-400">
            <div className="bg-gradient-to-br from-indigo-800/30 to-indigo-600/20 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-indigo-500/10 transition-all transform hover:scale-[1.03] border border-indigo-500/20 hover:border-indigo-500/40">
              <div className="bg-indigo-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Efficient</h3>
              <p className="text-gray-300">Automated grading and instant feedback to save time and resources</p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-500">
            <div className="bg-gradient-to-br from-indigo-800/30 to-indigo-600/20 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-indigo-500/10 transition-all transform hover:scale-[1.03] border border-indigo-500/20 hover:border-indigo-500/40">
              <div className="bg-indigo-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modular</h3>
              <p className="text-gray-300">Object-oriented design for maintainability and future expansion</p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-600">
            <div className="bg-gradient-to-br from-indigo-800/30 to-indigo-600/20 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-indigo-500/10 transition-all transform hover:scale-[1.03] border border-indigo-500/20 hover:border-indigo-500/40">
              <div className="bg-indigo-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">User-Friendly</h3>
              <p className="text-gray-300">Intuitive console interface for both students and administrators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;