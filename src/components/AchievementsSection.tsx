import { motion } from "framer-motion";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";
import cert4 from "@/assets/cert-4.jpg";
import cert5 from "@/assets/cert-5.jpg";
import cert6 from "@/assets/cert-6.jpg";
import cert7 from "@/assets/cert-7.jpg";
import cert8 from "@/assets/cert-8.png";
import cert9 from "@/assets/cert-9.jpg";
import cert10 from "@/assets/cert-10.jpg";
import cert11 from "@/assets/cert-11.jpg";
import cert12 from "@/assets/cert-12.jpg";
import cert13 from "@/assets/cert-13.jpg";
import cert14 from "@/assets/cert-14.jpg";
import cert15 from "@/assets/cert-15.jpg";
import cert16 from "@/assets/cert-16.jpg";
import cert17 from "@/assets/cert-17.jpg";
import cert18 from "@/assets/cert-18.jpg";
import cert19 from "@/assets/cert-19.jpg";
import cert20 from "@/assets/cert-20.jpg";
import cert21 from "@/assets/cert-21.jpg";
import cert22 from "@/assets/cert-22.jpg";
import cert23 from "@/assets/cert-23.jpg";
import cert24 from "@/assets/cert-24.jpg";
import cert25 from "@/assets/cert-25.jpg";
import cert26 from "@/assets/cert-26.jpg";
import cert27 from "@/assets/cert-27.jpg";

const certificates = [
  { src: cert1, alt: "Certificate 1" },
  { src: cert2, alt: "Certificate 2" },
  { src: cert3, alt: "Certificate 3" },
  { src: cert4, alt: "Certificate 4" },
  { src: cert5, alt: "Swasth Dhara Toh Khet Hara 2.0 Quiz" },
  { src: cert6, alt: "Unity in Diversity Quiz 2024" },
  { src: cert7, alt: "GOBARdhan Quiz" },
  { src: cert8, alt: "Pariksha Pe Charcha 2026" },
  { src: cert9, alt: "Dr. B.R. Ambedkar Quiz 2024" },
  { src: cert10, alt: "Mann Ki Baat 2024 December" },
  { src: cert11, alt: "Naturopathy Quiz 2024" },
  { src: cert12, alt: "SVASTIK Quiz" },
  { src: cert13, alt: "Senior Citizens' Welfare Awareness Quiz" },
  { src: cert14, alt: "Discover Ladakh Quiz" },
  { src: cert15, alt: "Ken-Betwa Link Project Quiz" },
  { src: cert16, alt: "Senior Citizens' Welfare Awareness Quiz" },
  { src: cert17, alt: "Data Privacy Awareness Quiz" },
  { src: cert18, alt: "Energy Efficiency for Sustainable India" },
  { src: cert19, alt: "Cyber Security Awareness Quiz" },
  { src: cert20, alt: "Vande Mataram - 150 Years Quiz" },
  { src: cert21, alt: "Swachh Bharat Mission Grameen Phase-II Quiz" },
  { src: cert22, alt: "Insurance Awareness Quiz BimaGyaan" },
  { src: cert23, alt: "India's Timeless Monuments - A Heritage Quiz" },
  { src: cert24, alt: "VIGYANOTSAV - National Science Day Quiz 2025" },
  { src: cert25, alt: "IKS Indology Quiz" },
  { src: cert26, alt: "Mahakumbh 2025 Quiz" },
  { src: cert27, alt: "Drug-Free India Awareness Quiz" },
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
