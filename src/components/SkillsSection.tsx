import { motion } from "framer-motion";
import { Monitor, Code, PenTool, Globe, BookOpen, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Computer Skills",
    icon: Monitor,
    skills: [
      { name: "MS Word", level: 90 },
      { name: "MS Excel", level: 80 },
      { name: "MS PowerPoint", level: 85 },
      { name: "Google Docs", level: 88 },
    ],
  },
  {
    title: "Web & Coding",
    icon: Code,
    skills: [
      { name: "HTML & CSS", level: 75 },
      { name: "Python", level: 60 },
      { name: "JavaScript", level: 55 },
      { name: "Scratch", level: 85 },
    ],
  },
  {
    title: "Creative",
    icon: PenTool,
    skills: [
      { name: "Canva", level: 90 },
      { name: "Video Editing", level: 70 },
      { name: "Poster Design", level: 80 },
      { name: "Presentation", level: 88 },
    ],
  },
  {
    title: "Digital Literacy",
    icon: Globe,
    skills: [
      { name: "Internet Research", level: 92 },
      { name: "Email & Communication", level: 85 },
      { name: "Social Media", level: 80 },
      { name: "Cyber Safety", level: 78 },
    ],
  },
  {
    title: "Academic",
    icon: BookOpen,
    skills: [
      { name: "Science", level: 85 },
      { name: "Mathematics", level: 80 },
      { name: "English", level: 82 },
      { name: "Hindi", level: 90 },
    ],
  },
  {
    title: "Tech & AI",
    icon: Cpu,
    skills: [
      { name: "AI Tools (ChatGPT)", level: 88 },
      { name: "Lovable / No-Code", level: 85 },
      { name: "Typing Speed", level: 75 },
      { name: "Quiz Platforms", level: 95 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-lg"
        >
          A snapshot of the tools and abilities I've developed as a student.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="rounded-lg border border-border bg-card p-6 skill-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
