import { motion } from "framer-motion";
import sarthakPhoto from "@/assets/sarthak-photo.jpg";

const roles = ["Student", "Dreamer", "Future Engineer"];

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
          {/* Animated ring around photo */}
          <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto">
            <div className="absolute inset-0 rounded-full animated-ring" />
            <div className="absolute inset-[6px] rounded-full overflow-hidden bg-background">
              <img
                src={sarthakPhoto}
                alt="Sarthak Sahu"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold font-display glow-text text-foreground mb-6 tracking-wide"
        >
          Sarthak Sahu
        </motion.h1>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-6"
        >
          {roles.map((role) => (
            <span
              key={role}
              className="px-5 py-2 rounded-full border border-border bg-card/60 text-secondary-foreground text-sm font-medium backdrop-blur-sm"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
