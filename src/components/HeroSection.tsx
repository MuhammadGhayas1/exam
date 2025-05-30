import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from './Link';

const HeroSection: React.FC = () => {
  const words = ['CUI Examination System'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typing logic
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0]">
      <style jsx>{`
        @keyframes slideFade {
          0% { opacity: 0; transform: translateX(-20px); }
          50% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-20px); }
        }
        @keyframes bounceFade {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.9); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#6b3fa0]/70 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-8 p-4 rounded-full bg-[#8257e6]/20 text-[#c4b5fd]">
            <BookOpen size={48} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-[80px]">
            {`${words[index].substring(0, subIndex)}`}
            <span className="text-[#c4b5fd]">{words[index].includes('Examination') ? ' ' : ''}</span>
            <span className="ml-1">{blink ? '|' : ' '}</span>
          </h1>

          {/* Subtitle with loop animation */}
          <p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
            style={{
              animation: 'slideFade 6s ease-in-out infinite',
            }}
          >
            A comprehensive Java-based examination platform that revolutionizes how tests are conducted and managed in academic environments.
          </p>

          {/* Buttons with looping animation */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              animation: 'bounceFade 6s ease-in-out infinite',
            }}
          >
            <Link
              href="#features"
              className="px-8 py-3 bg-[#8257e6] hover:bg-[#9466ff] text-white rounded-md font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Features <ArrowRight size={18} />
            </Link>
            <Link
              href="#about"
              className="px-8 py-3 bg-transparent border-2 border-[#c4b5fd]/30 hover:border-[#c4b5fd]/60 text-white rounded-md font-medium transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#6b3fa0] to-transparent"></div>
      <div className="absolute -bottom-10 right-0 w-72 h-72 bg-[#8257e6]/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#9466ff]/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
