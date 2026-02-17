import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
