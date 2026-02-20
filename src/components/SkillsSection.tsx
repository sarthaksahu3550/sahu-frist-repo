import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Scratch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scratch/scratch-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Google Docs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "MS Word", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg" },
  { name: "Lovable", icon: "https://lovable.dev/icon.svg" },
  { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
  { name: "Video Editing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "Prompt Engineering", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg" },
  { name: "Bolt", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bolt.svg" },
  { name: "Replit", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/replit.svg" },
  { name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg" },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" },
  { name: "GitHub Copilot", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/githubcopilot.svg" },
  { name: "Midjourney", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/midjourney.svg" },
  { name: "Cursor", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cursor.svg" },
  { name: "Google AI Studio", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg" },
  { name: "Stability AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stabilityai.svg" },
  { name: "Leonardo AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leonardoai.svg" },
  { name: "Perplexity AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/perplexity.svg" },
  { name: "Otter AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/otter.svg" },
  { name: "Grammarly", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/grammarly.svg" },
  { name: "Tabnine", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tabnine.svg" },
  { name: "Microsoft Copilot", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftcopilot.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Dora AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/d.svg" },
  { name: "Suno AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/suno.svg" },
  { name: "Tableau", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg" },
  { name: "Opus Clip", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/opusdei.svg" },
  { name: "Google Veo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Cody", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sourcegraph.svg" },
  { name: "Ideogram AI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ideogram.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center justify-center gap-3 p-5 md:p-6 rounded-xl border border-border bg-card skill-card aspect-square"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                loading="lazy"
              />
              <span className="text-foreground text-xs md:text-sm font-medium text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
