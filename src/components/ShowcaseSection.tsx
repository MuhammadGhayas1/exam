import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Local images from the /src/assets folder
import adminLogin from '../assets/admin login.png';
import admin from '../assets/admin.png';
import answerReview from '../assets/answer review.png';
import creatingExam from '../assets/creating exam .png';
import examCreated from '../assets/exam created succesfully.png';
import loginSuccess from '../assets/loginsuccesful as admin.png';
import questionAdded from '../assets/question added succesfuly .png';
import quiz from '../assets/quiz.png';
import selectExam from '../assets/select exam to solve.png';
import studentLogin from '../assets/student login .png';
import updatingQuestion from '../assets/updating a question.png';

const screenshots = [
  { image: adminLogin, title: "Admin Login", description: "Admin authentication screen to access dashboard features." },
  { image: admin, title: "Admin Dashboard", description: "Overview of functionalities available to the admin." },
  { image: answerReview, title: "Answer Review", description: "Admin reviews student answers and provides grading." },
  { image: creatingExam, title: "Creating Exam", description: "Admin interface to add and configure a new exam." },
  { image: examCreated, title: "Exam Created Successfully", description: "Confirmation screen shown after exam creation." },
  { image: loginSuccess, title: "Login Success", description: "Success message after admin logs in." },
  { image: questionAdded, title: "Question Added", description: "Success screen after adding a question to the exam." },
  { image: quiz, title: "Quiz Page", description: "Student attempting a quiz under time constraints." },
  { image: selectExam, title: "Select Exam", description: "Student selects an available exam to begin." },
  { image: studentLogin, title: "Student Login", description: "Authentication screen for students." },
  { image: updatingQuestion, title: "Updating a Question", description: "Admin updates an existing question in the system." }
];

const ShowcaseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Fade-in animation when in view
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0] opacity-0 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Showcase</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Take a visual tour of our Examination System — from user authentication to exam creation,
            and everything in between.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700/50 shadow-xl">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={screenshots[currentIndex].image}
                alt={screenshots[currentIndex].title}
                className="w-full h-full object-contain bg-black"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{screenshots[currentIndex].title}</h3>
                  <p className="text-gray-300">{screenshots[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-indigo-500' : 'bg-slate-600'
                } transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
