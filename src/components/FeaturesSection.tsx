import React, { useEffect, useRef } from 'react';
import { 
  Users, Lock, Clock, FileCheck, PencilRuler, 
  BarChart3, Shield, Database 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
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

    const elements = document.querySelectorAll('.feature-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Lock size={28} />,
      title: "Secure Authentication",
      description: "Role-based login system for administrators and students with password protection and session management."
    },
    {
      icon: <PencilRuler size={28} />,
      title: "Exam Creation",
      description: "Administrators can create multiple-choice questions, set time limits, and organize questions by subject or difficulty."
    },
    {
      icon: <Clock size={28} />,
      title: "Timed Assessments",
      description: "Automatic timing system enforces exam duration with countdown display and auto-submission when time expires."
    },
    {
      icon: <Shield size={28} />,
      title: "Anti-Cheating Measures",
      description: "Randomized question order and controlled access to prevent unauthorized sharing of answers."
    },
    {
      icon: <FileCheck size={28} />,
      title: "Instant Grading",
      description: "Automatic scoring and immediate feedback for students upon exam completion with correct answer review."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Performance Analytics",
      description: "Detailed analytics for administrators to track student performance across different exams and questions."
    },
    {
      icon: <Database size={28} />,
      title: "Data Management",
      description: "Robust file-based storage system for questions, user accounts, and exam results with backup capabilities."
    },
    {
      icon: <Users size={28} />,
      title: "User Management",
      description: "Administrative tools to manage student accounts, organize students into groups, and assign exams to specific groups."
    }
  ];

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 feature-animate opacity-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our examination system provides a comprehensive set of tools for both administrators and students,
            ensuring a secure, efficient, and user-friendly examination experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-animate opacity-0 transition-all duration-1000 delay-${index * 100}`}
            >
              <div className="bg-slate-800/60 h-full p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all transform hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="bg-indigo-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <div className="text-indigo-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;