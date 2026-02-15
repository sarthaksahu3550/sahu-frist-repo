import { motion } from "framer-motion";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";
import cert4 from "@/assets/cert-4.jpg";

const certificates = [
  { src: cert1, alt: "Certificate 1" },
  { src: cert2, alt: "Certificate 2" },
  { src: cert3, alt: "Certificate 3" },
  { src: cert4, alt: "Certificate 4" },
];

const AchievementsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
        >
          My <span className="text-primary">Achievements</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-lg"
        >
          Certificates and recognitions I've earned through hard work and participation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="cert-card rounded-lg overflow-hidden border border-border bg-card"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
