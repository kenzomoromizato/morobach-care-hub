import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import CareModelSection from "@/components/landing/CareModelSection";
import HowMembershipWorksSection from "@/components/landing/HowMembershipWorksSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhoIsItForSection from "@/components/landing/WhoIsItForSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CareModelSection />
      <HowMembershipWorksSection />
      <WhoIsItForSection />
      <HowItWorksSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
