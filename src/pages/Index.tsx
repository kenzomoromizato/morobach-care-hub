import HeroSection from "@/components/landing/HeroSection";
import CareModelSection from "@/components/landing/CareModelSection";
import WhoIsItForSection from "@/components/landing/WhoIsItForSection";
import DoctorSection from "@/components/landing/DoctorSection";
import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import FAQSection from "@/components/landing/FAQSection";
import Navbar from "@/components/landing/Navbar";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CareModelSection />
      <WhoIsItForSection />
      <DoctorSection />
      <AboutSection />
      <ExperienceSection />
      <FAQSection />
    </main>
  );
};

export default Index;
