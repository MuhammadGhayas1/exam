import React, { useEffect, useRef } from 'react';
import { Mail, Github as GitHub, LinkedinIcon } from 'lucide-react';

const ContactSection: React.FC = () => {
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

    const elements = document.querySelectorAll('.contact-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 contact-animate opacity-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Have questions about our Examination System? Interested in collaborating or learning more?
            Reach out to us using the form below or connect through our social platforms.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 contact-animate opacity-0 transition-all duration-1000 delay-100">
            <div className="bg-slate-800/60 p-8 rounded-xl border border-slate-700/50 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/20 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email Us</h4>
                    <p className="text-gray-300">javeriaarshadswl@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  
                </div>
                
                
              </div>
          
              
            </div>
          </div>
          
          <div className="md:col-span-3 contact-animate opacity-0 transition-all duration-1000 delay-200">
            <div className="bg-slate-800/60 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <div className="w-full aspect-[4/3]">
                <iframe 
                  src="https://forms.gle/yVeBfz47gp1Tm7NeA"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;