import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import AboutSection from "@/components/landing/AboutSection";
import CareModelSection from "@/components/landing/CareModelSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <CareModelSection />
      <ForWhomSection />
      <DifferentialSection />
      <HowItWorksSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
