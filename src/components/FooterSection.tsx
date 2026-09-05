import { ExternalLink } from "lucide-react";

const links = [
  { label: "MyGov Quiz", url: "https://quiz.mygov.in/" },
  { label: "Sunbeam School Mau", url: "https://sunbeamschoolmau.edu.in/" },
  { label: "Discord", url: "https://discord.com/users/1474038953106477107" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="relative border-t border-border py-16 px-6 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] bg-purple-600/10 -bottom-20 left-1/3" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">Contact</p>
        <h3 className="font-display text-3xl md:text-4xl font-bold rainbow-text mb-6">Let's Connect</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-secondary-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
            >
              {link.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          © 2026 Sarthak Sahu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
