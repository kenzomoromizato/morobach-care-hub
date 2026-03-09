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
import FAQSection from "@/components/landing/FAQSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CareModelSection />
      <HowMembershipWorksSection />
      <WhoIsItForSection />
      <HowItWorksSection />
      <ExperienceSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
