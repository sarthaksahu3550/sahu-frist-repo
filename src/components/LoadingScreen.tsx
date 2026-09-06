import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import sarthakPhoto from "@/assets/sarthak-photo.jpg";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="dark loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 loading-grid opacity-70" />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/8 blur-[120px]" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-8 left-8 w-20 h-20 border border-primary/30 rounded-full" />
      <div className="absolute top-12 right-16 w-3 h-3 bg-primary/40 rounded-full" />
      <div className="absolute bottom-16 right-12 w-12 h-12 border border-accent/30 rounded-xl rotate-45" />
      <div className="absolute bottom-20 left-16 w-2 h-2 bg-primary/30 rounded-full" />

      {/* Profile photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-4"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto loading-portrait-ring">
          <div className="absolute inset-0 rounded-full animated-ring" />
          <div className="absolute inset-[6px] rounded-full overflow-hidden bg-background border border-border">
            <img src={sarthakPhoto} alt="Sarthak Sahu" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-2xl md:text-3xl font-display font-bold rainbow-text tracking-widest relative z-10 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="block md:inline">SARTHAK</span>
        <span className="hidden md:inline">&nbsp;</span>
        <span className="block md:inline">SAHU</span>
      </motion.div>

      {/* Progress number */}
      <motion.p
        className="text-7xl md:text-8xl font-display font-bold loading-gradient-text relative z-10 leading-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.min(progress, 100)}%
      </motion.p>

      <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mt-6 relative z-10">
        Loading Experience
      </p>

      {/* Progress bar */}
      <div className="mt-6 w-64 h-2 rounded-full bg-secondary/80 overflow-hidden relative z-10 border border-border">
        <motion.div
          className="h-full rounded-full loading-gradient-bar"
          style={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
