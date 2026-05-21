import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import CursorEffect from "@/components/CursorEffect";
import BackgroundMusic from "@/components/BackgroundMusic";


const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!loading && <Navbar />}
      {!loading && <CursorEffect />}
      {!loading && <BackgroundMusic />}
      
      <main className={`min-h-screen bg-background ${loading ? "overflow-hidden h-screen" : ""}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
