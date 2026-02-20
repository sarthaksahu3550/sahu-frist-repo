import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Scratch", icon: "https://cdn.simpleicons.org/scratch/FF8C1A" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Google Docs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "MS Word", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg" },
  { name: "Lovable", icon: "https://lovable.dev/icon.svg" },
  { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/white" },
  { name: "Video Editing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "Prompt Engineering", icon: "https://cdn.simpleicons.org/googlegemini/white" },
  { name: "Bolt.new", icon: "https://cdn.simpleicons.org/stackblitz/1389FD" },
  { name: "Replit", icon: "https://cdn.simpleicons.org/replit/F26207" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/white" },
  { name: "Midjourney", icon: "https://cdn.simpleicons.org/midjourney/white" },
  { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/white" },
  { name: "Google AI Studio", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Stability AI", icon: "https://cdn.simpleicons.org/stabilityai/white" },
  { name: "Leonardo AI", icon: "https://cdn.simpleicons.org/leonardo/white" },
  { name: "Perplexity", icon: "https://cdn.simpleicons.org/perplexity/20B2AA" },
  { name: "Otter AI", icon: "https://cdn.simpleicons.org/otter/white" },
  { name: "Grammarly", icon: "https://cdn.simpleicons.org/grammarly/15C39A" },
  { name: "Tabnine", icon: "https://cdn.simpleicons.org/tabnine/white" },
  { name: "Copilot", icon: "https://cdn.simpleicons.org/microsoftcopilot/white" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Dora AI", icon: "https://cdn.simpleicons.org/dora/white" },
  { name: "Suno AI", icon: "https://cdn.simpleicons.org/suno/white" },
  { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627" },
  { name: "Opus Clip", icon: "https://cdn.simpleicons.org/opus/white" },
  { name: "Google Veo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Cody", icon: "https://cdn.simpleicons.org/sourcegraph/FF5543" },
  { name: "Ideogram", icon: "https://cdn.simpleicons.org/ideogram/white" },
];

const SkillIcon = ({ skill }: { skill: { name: string; icon: string } }) => {
  const [failed, setFailed] = useState(false);

  return failed ? (
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg md:text-xl">
      {skill.name.charAt(0)}
    </div>
  ) : (
    <img
      src={skill.icon}
      alt={skill.name}
      className="w-12 h-12 md:w-16 md:h-16 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

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
              <SkillIcon skill={skill} />
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
