import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import sarthakPhoto from "@/assets/sarthak-photo.jpg";

const NAME = "SARTHAK SAHU";
const letterColors: [string, string][] = [
  ["#ff5f6d", "#c94b4b"],
  ["#f857a6", "#ff5858"],
  ["#ffc371", "#ff5f6d"],
  ["#ffb347", "#ffcc33"],
  ["#e0c3fc", "#8ec5fc"],
  ["#34d399", "#10b981"],
  ["#38bdf8", "#6366f1"],
  ["#a78bfa", "#8b5cf6"],
  ["#f472b6", "#ec4899"],
  ["#38bdf8", "#0ea5e9"],
  ["#34d399", "#059669"],
  ["#fbbf24", "#f59e0b"],
  ["#a78bfa", "#7c3aed"],
];

const roles = ["Student", "AI Enthusiast", "Future Engineer", "Dreamer", "Problem Solver", "Curious Learner"];

const roleBadges = ["Student", "Dreamer", "Creator"];

const stats = [
  { value: "67+", label: "Certificates" },
  { value: "100+", label: "Skills Explored" },
  { value: "2+", label: "Years Learning" },
  { value: "1", label: "Big Dream: IIT Madras" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[roleIndex];
    let delay = deleting ? 45 : 90;
    if (!deleting && typed === word) {
      delay = 1600;
    } else if (deleting && typed === "") {
      delay = 300;
    }
    const t = setTimeout(() => {
      if (!deleting && typed === word) {
        setDeleting(true);
      } else if (deleting && typed === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setTyped(word.slice(0, typed.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Ambient glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-purple-600/25 top-1/4 left-1/2 -translate-x-1/2" />
      <div className="glow-blob w-[420px] h-[420px] bg-emerald-500/20 bottom-0 left-1/4" />
      <div className="glow-blob w-[420px] h-[420px] bg-rose-500/15 bottom-0 right-0" />

      {/* Floating particles */}
      {[
        { c: "#facc15", top: "60%", left: "58%", d: "0s" },
        { c: "#4ade80", top: "72%", left: "55%", d: "1s" },
        { c: "#f472b6", top: "78%", left: "62%", d: "2s" },
        { c: "#38bdf8", top: "65%", left: "95%", d: "0.5s" },
        { c: "#a3e635", top: "74%", left: "98%", d: "1.5s" },
        { c: "#4ade80", top: "30%", left: "99%", d: "2.5s" },
        { c: "#22d3ee", top: "92%", left: "6%", d: "3s" },
      ].map((p, i) => (
        <span
          key={i}
          className="float-particle w-2 h-2"
          style={{ backgroundColor: p.c, top: p.top, left: p.left, animationDelay: p.d, boxShadow: `0 0 12px ${p.c}` }}
        />
      ))}

      {/* Decorative shapes */}
      <div className="absolute top-8 left-8 w-14 h-14 border border-amber-500/30 rounded-full" />
      <div className="absolute top-10 right-10 w-3 h-3 bg-amber-500/50 rounded-full" />
      <div className="absolute bottom-12 right-12 w-10 h-10 border border-rose-500/30 rounded-md rotate-12" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Photo with rainbow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 rounded-full animated-ring" />
            <div className="absolute inset-[6px] rounded-full overflow-hidden bg-background">
              <img src={sarthakPhoto} alt="Sarthak Sahu" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>

        {/* Rainbow name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-widest mb-6 flex flex-col md:flex-row items-center justify-center leading-none"
          aria-label="Sarthak Sahu"
        >
          {NAME.split(" ").map((word, wordIndex) => (
            <span key={word} className={wordIndex === 1 ? "md:ml-5" : ""}>
              {word.split("").map((ch, letterIndex) => {
                const index = wordIndex === 0 ? letterIndex : letterIndex + 7;
                return (
                  <motion.span
                    key={`${word}-${letterIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.05 }}
                    className="rainbow-letter"
                    style={{
                      ["--letter-c1" as string]: letterColors[index % letterColors.length][0],
                      ["--letter-c2" as string]: letterColors[index % letterColors.length][1],
                    }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-secondary-foreground font-display mb-5"
        >
          I'm a <span className="rainbow-text font-bold">{typed}</span>
          <span className="type-caret" />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-muted-foreground max-w-xl mb-6 leading-relaxed"
        >
          I am a student at Sunbeam School, Mau, with a deep passion for Artificial Intelligence
          and technology. I'm working hard towards my dream of studying B.Tech at IIT Madras.
        </motion.p>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-10"
        >
          {roleBadges.map((r) => (
            <span
              key={r}
              className="px-5 py-2 rounded-full border border-border bg-card/60 text-secondary-foreground text-sm font-medium backdrop-blur-sm"
            >
              {r}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="text-3xl md:text-4xl font-display font-bold rainbow-text">{s.value}</p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
