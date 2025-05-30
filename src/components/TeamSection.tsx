import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".team-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Javeria Arshad",
      role: "Team Lead & Developer",
      image: img1,
      bio: "Lead developer responsible for system architecture and core functionality implementation.",
      social: {
        linkedin:
          "https://www.linkedin.com/in/javeria-arshad-877a08349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "javeriaarshadswl@gmail.com",
      },
    },
    {
      name: "Alishba Shahbaz",
      role: "Backend Developer",
      image: img2,
      bio: "Focused on database design, file handling, and core Java implementation.",
      social: {},
    },
    {
      name: "Fatima Asad",
      role: "UI/UX Designer",
      image: img3,
      bio: "Responsible for console interface design, user experience, and documentation.",
      social: {},
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0] to-indigo-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 team-animate opacity-0 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Meet the talented individuals behind the Examination System project,
            combining expertise in Java development, system design, and user
            experience.
          </p>
        </div>

        {/* Centered Cards */}
        <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-animate opacity-0 transition-all duration-1000 delay-${
                index * 100
              }`}
            >
              <div className="bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all transform hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/10 w-72">
                {/* Image Wrapper */}
                <div className="h-60 bg-black flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
