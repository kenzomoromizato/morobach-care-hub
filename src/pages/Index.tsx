import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import CareModelSection from "@/components/landing/CareModelSection";
import WhoIsItForSection from "@/components/landing/WhoIsItForSection";
import DoctorSection from "@/components/landing/DoctorSection";
import QuoteSection from "@/components/landing/QuoteSection";
import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import FAQSection from "@/components/landing/FAQSection";
import Navbar from "@/components/landing/Navbar";
import FloatingCTA from "@/components/landing/FloatingCTA";
import AnnouncementBar, {
  ANNOUNCEMENT_ENABLED,
} from "@/components/landing/AnnouncementBar";

const ANNOUNCEMENT_HEIGHT = 40;

const Index = () => {
  const [announcementOpen, setAnnouncementOpen] = useState(ANNOUNCEMENT_ENABLED);
  const topOffset = announcementOpen ? ANNOUNCEMENT_HEIGHT : 0;

  return (
    <main>
      {announcementOpen && (
        <AnnouncementBar onClose={() => setAnnouncementOpen(false)} />
      )}
      <Navbar topOffset={topOffset} />
      <FloatingCTA />
      <HeroSection topOffset={topOffset} />
      <CareModelSection />
      <WhoIsItForSection />
      <DoctorSection />
      <QuoteSection />
      <AboutSection />
      <ExperienceSection />
      <FAQSection />
    </main>
  );
};

export default Index;
