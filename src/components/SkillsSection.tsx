import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  // Core Dev
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
  { name: "Video Editing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "Prompt Engineering", icon: "https://cdn.simpleicons.org/googlegemini/white" },
  // AI Chatbots & Assistants
  { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/white" },
  { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "Perplexity AI", icon: "https://cdn.simpleicons.org/perplexity/20B2AA" },
  { name: "Grok", icon: "https://cdn.simpleicons.org/x/white" },
  { name: "Microsoft Copilot", icon: "https://cdn.simpleicons.org/microsoftcopilot/white" },
  { name: "DeepSeek", icon: "https://cdn.simpleicons.org/deepseek/4D6BFF" },
  { name: "Pi (Inflection)", icon: "https://cdn.simpleicons.org/inflection/white" },
  { name: "Character.ai", icon: "https://cdn.simpleicons.org/characterai/white" },
  { name: "Replika", icon: "https://cdn.simpleicons.org/replika/white" },
  { name: "Talkie AI", icon: "https://cdn.simpleicons.org/talkie/white" },
  // AI Image Generation
  { name: "Midjourney", icon: "https://cdn.simpleicons.org/midjourney/white" },
  { name: "DALL-E", icon: "https://cdn.simpleicons.org/openai/white" },
  { name: "Stable Diffusion", icon: "https://cdn.simpleicons.org/stabilityai/white" },
  { name: "Leonardo AI", icon: "https://cdn.simpleicons.org/leonardo/white" },
  { name: "Adobe Firefly", icon: "https://cdn.simpleicons.org/adobe/FF0000" },
  { name: "Ideogram", icon: "https://cdn.simpleicons.org/ideogram/white" },
  { name: "Canva AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  // AI Video & Media
  { name: "Runway", icon: "https://cdn.simpleicons.org/runway/white" },
  { name: "Pika Labs", icon: "https://cdn.simpleicons.org/pika/white" },
  { name: "Suno AI", icon: "https://cdn.simpleicons.org/suno/white" },
  { name: "Synthesia", icon: "https://cdn.simpleicons.org/synthesia/white" },
  { name: "ElevenLabs", icon: "https://cdn.simpleicons.org/elevenlabs/white" },
  { name: "Descript", icon: "https://cdn.simpleicons.org/descript/white" },
  { name: "Captions", icon: "https://cdn.simpleicons.org/captions/white" },
  { name: "AIVA", icon: "https://cdn.simpleicons.org/aiva/white" },
  { name: "Lalal.ai", icon: "https://cdn.simpleicons.org/lalalai/white" },
  { name: "Riffusion", icon: "https://cdn.simpleicons.org/riffusion/white" },
  { name: "Beatoven.ai", icon: "https://cdn.simpleicons.org/beatoven/white" },
  { name: "Google Veo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  // AI Writing & Productivity
  { name: "Grammarly", icon: "https://cdn.simpleicons.org/grammarly/15C39A" },
  { name: "QuillBot", icon: "https://cdn.simpleicons.org/quillbot/white" },
  { name: "Jasper AI", icon: "https://cdn.simpleicons.org/jasper/white" },
  { name: "Writesonic", icon: "https://cdn.simpleicons.org/writesonic/white" },
  { name: "Otter AI", icon: "https://cdn.simpleicons.org/otter/white" },
  { name: "Dubverse", icon: "https://cdn.simpleicons.org/dubverse/white" },
  // AI Education
  { name: "Khanmigo", icon: "https://cdn.simpleicons.org/khanacademy/14BF96" },
  { name: "ELSA Speak", icon: "https://cdn.simpleicons.org/elsa/white" },
  { name: "Duolingo Max", icon: "https://cdn.simpleicons.org/duolingo/58CC02" },
  { name: "Socratic", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Mindgrasp", icon: "https://cdn.simpleicons.org/mindgrasp/white" },
  // AI Dev Tools
  { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/white" },
  { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/white" },
  { name: "Bolt.new", icon: "https://cdn.simpleicons.org/stackblitz/1389FD" },
  { name: "Replit", icon: "https://cdn.simpleicons.org/replit/F26207" },
  { name: "Tabnine", icon: "https://cdn.simpleicons.org/tabnine/white" },
  { name: "Cody", icon: "https://cdn.simpleicons.org/sourcegraph/FF5543" },
  { name: "Google AI Studio", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Dora AI", icon: "https://cdn.simpleicons.org/dora/white" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
  // AI Health & Wellness
  { name: "Youper", icon: "https://cdn.simpleicons.org/youper/white" },
  { name: "Woebot", icon: "https://cdn.simpleicons.org/woebot/white" },
  { name: "FitnessAI", icon: "https://cdn.simpleicons.org/fitnessai/white" },
  { name: "Sleep Cycle AI", icon: "https://cdn.simpleicons.org/sleepcycle/white" },
  { name: "Zing Coach", icon: "https://cdn.simpleicons.org/zing/white" },
  { name: "Bearable", icon: "https://cdn.simpleicons.org/bearable/white" },
  // Enterprise AI
  { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
  { name: "Snowflake AI", icon: "https://cdn.simpleicons.org/snowflake/29B5E8" },
  { name: "Palantir", icon: "https://cdn.simpleicons.org/palantir/white" },
  { name: "Oracle AI", icon: "https://cdn.simpleicons.org/oracle/F80000" },
  { name: "SAP AI", icon: "https://cdn.simpleicons.org/sap/0FAAFF" },
  { name: "Salesforce AI", icon: "https://cdn.simpleicons.org/salesforce/00A1E0" },
  { name: "UiPath", icon: "https://cdn.simpleicons.org/uipath/FA4616" },
  { name: "IBM watsonx", icon: "https://cdn.simpleicons.org/ibm/white" },
  { name: "AWS AI", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
  { name: "Azure AI", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "H2O.ai", icon: "https://cdn.simpleicons.org/h2o/white" },
  { name: "Cohere", icon: "https://cdn.simpleicons.org/cohere/white" },
  { name: "DataRobot", icon: "https://cdn.simpleicons.org/datarobot/white" },
  { name: "C3.ai", icon: "https://cdn.simpleicons.org/c3ai/white" },
  { name: "Abacus AI", icon: "https://cdn.simpleicons.org/abacus/white" },
  { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627" },
  { name: "Opus Clip", icon: "https://cdn.simpleicons.org/opus/white" },
  // AI Companions
  { name: "Alice AI", icon: "https://cdn.simpleicons.org/alice/white" },
  { name: "Anima AI", icon: "https://cdn.simpleicons.org/anima/white" },
  { name: "EVA AI", icon: "https://cdn.simpleicons.org/eva/white" },
  { name: "Paradot", icon: "https://cdn.simpleicons.org/paradot/white" },
  { name: "Nomi AI", icon: "https://cdn.simpleicons.org/nomi/white" },
  // More Tools
  { name: "Kinetix", icon: "https://cdn.simpleicons.org/kinetix/white" },
  { name: "Rosebud AI", icon: "https://cdn.simpleicons.org/rosebud/white" },
  { name: "FaceFusion", icon: "https://cdn.simpleicons.org/facefusion/white" },
  { name: "Nano Banana", icon: "https://cdn.simpleicons.org/nanobanaana/white" },
  { name: "Upword", icon: "https://cdn.simpleicons.org/upword/white" },
  { name: "Starburst", icon: "https://cdn.simpleicons.org/starburst/white" },
  { name: "Uberduck", icon: "https://cdn.simpleicons.org/uberduck/white" },
  { name: "Speak", icon: "https://cdn.simpleicons.org/speak/white" },
  { name: "Luminance", icon: "https://cdn.simpleicons.org/luminance/white" },
  { name: "Yellow AI", icon: "https://cdn.simpleicons.org/yellowai/white" },
  { name: "Uniphore", icon: "https://cdn.simpleicons.org/uniphore/white" },
  { name: "Fractal", icon: "https://cdn.simpleicons.org/fractal/white" },
  { name: "ServiceNow AI", icon: "https://cdn.simpleicons.org/servicenow/white" },
  { name: "PolyAI", icon: "https://cdn.simpleicons.org/polyai/white" },
  { name: "Automation Anywhere", icon: "https://cdn.simpleicons.org/automationanywhere/white" },
  { name: "Capgemini AI", icon: "https://cdn.simpleicons.org/capgemini/0070AD" },
  { name: "Ocient", icon: "https://cdn.simpleicons.org/ocient/white" },
  { name: "Janitor AI", icon: "https://cdn.simpleicons.org/janitorai/white" },
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
