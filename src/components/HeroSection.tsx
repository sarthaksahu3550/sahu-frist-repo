import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-geometric relative min-h-[70vh] flex items-center justify-center">
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-sans"
        >
          Student • Dreamer • Future Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold font-display glow-text text-foreground mb-6"
        >
          Sarthak Sahu
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
