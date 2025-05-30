import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import AnimatedBackground from "./components/AnimatedBackground";
import ShowcaseSection from "./components/ShowcaseSection";
import Footer from "./components/Footer";
import ResourcesSection from "./components/ResourcesSection";
import Mentor from "./components/Mentor";

function App() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Mentor/>
        <FeaturesSection />
        <ResourcesSection />
        <TeamSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
