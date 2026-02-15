import { motion } from "framer-motion";
import sarthakPhoto from "@/assets/sarthak-photo.jpg";

const HeroSection = () => {
  return (
    <section className="hero-geometric relative min-h-[80vh] flex items-center justify-center">
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(40_90%_55%/0.15)] mx-auto">
            <img
              src={sarthakPhoto}
              alt="Sarthak Sahu"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-sans"
        >
          Student • Dreamer • Future Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold font-display glow-text text-foreground mb-6"
        >
          Sarthak Sahu
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-primary/50" />
          <span className="text-primary font-display text-lg">Sunbeam School, Mau</span>
          <span className="h-px w-12 bg-primary/50" />
        </motion.div>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/10 rotate-45" />
      <div className="absolute bottom-20 right-16 w-32 h-32 border border-primary/5 rotate-12" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full" />
    </section>
  );
};

export default HeroSection;
