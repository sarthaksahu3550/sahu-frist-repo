import { motion } from "framer-motion";
import { BookOpen, Cpu, Trophy } from "lucide-react";

const interests = [
  { icon: BookOpen, label: "Study & Learning" },
  { icon: Cpu, label: "AI & Technology" },
  { icon: Trophy, label: "Cricket & Football" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 grid-pattern">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed mb-12"
        >
          I'm Sarthak Sahu, a passionate student at Sunbeam School, Mau. I love exploring the world of
          Artificial Intelligence, playing cricket and football, and working hard towards my dream of studying
          B.Tech at <span className="text-primary font-medium">IIT Madras</span>. I believe in becoming a good
          human being while pursuing excellence in everything I do.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
            >
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-secondary-foreground font-medium text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
