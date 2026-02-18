import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import FooterSection from "@/components/FooterSection";
import LoadingScreen from "@/components/LoadingScreen";

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
      <main className={`min-h-screen bg-background ${loading ? "overflow-hidden h-screen" : ""}`}>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
