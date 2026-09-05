import { motion } from "framer-motion";

const interests = [
  { emoji: "📚", title: "Study & Learning", desc: "Building strong academic foundations every day" },
  { emoji: "🤖", title: "AI & Technology", desc: "Exploring AI tools, prompt engineering and coding" },
  { emoji: "🏏", title: "Cricket", desc: "Learning teamwork, discipline and leadership" },
  { emoji: "⚽", title: "Football", desc: "Staying active and playing with passion" },
  { emoji: "🧩", title: "Problem Solving", desc: "Challenging myself with quizzes and competitions" },
  { emoji: "🏆", title: "Competitions", desc: "Participating in national quizzes and olympiads" },
];

const chips = [
  { emoji: "🎓", value: "IIT Madras", label: "Dream Goal" },
  { emoji: "🏅", value: "67+", label: "Certificates" },
  { emoji: "💡", value: "∞", label: "Curiosity Level" },
  { emoji: "🎯", value: "2030", label: "Building For" },
];

const hobbies = ["AI & Robotics", "Coding", "Reading", "Cricket", "Football", "Quizzing", "Space Tech", "Music"];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="glow-blob w-[400px] h-[400px] bg-purple-600/15 top-0 right-0" />
      <div className="glow-blob w-[400px] h-[400px] bg-emerald-500/10 bottom-0 left-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2"
        >
          Info
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-10"
        >
          <span className="mr-3">👋</span>
          <span className="rainbow-text">About Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14"
        >
          I'm Sarthak Sahu, a passionate student at Sunbeam School, Mau. I love exploring the world
          of Artificial Intelligence, playing cricket and football, and working hard towards my dream
          of studying B.Tech at <span className="text-primary font-semibold">IIT Madras</span>. I believe
          in becoming a good human being while pursuing excellence in everything I do.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold text-center mb-8"
        >
          <span className="mr-2">✨</span>My Interests
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
            >
              <span className="text-3xl">{item.emoji}</span>
              <h4 className="text-foreground font-semibold mt-3 mb-1">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {chips.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 text-center"
            >
              <span className="text-2xl">{c.emoji}</span>
              <p className="text-2xl font-display font-bold rainbow-text mt-2">{c.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{c.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {hobbies.map((h) => (
            <span
              key={h}
              className="px-4 py-2 rounded-full border border-border bg-card/60 text-secondary-foreground text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              {h}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
