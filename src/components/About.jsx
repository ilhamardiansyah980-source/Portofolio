import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBriefcase, HiStar, HiUserGroup } from 'react-icons/hi';
import './About.css';

const stats = [
  { icon: <HiBriefcase />, value: 'Fresh Graduate', label: 'Status' },
  { icon: <HiAcademicCap />, value: 'S.Tr.Pi.', label: 'Gelar' },
  { icon: <HiStar />, value: 'IPB', label: 'Universitas' },
  { icon: <HiUserGroup />, value: 'Leader', label: 'Karakter' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="about section" id="about">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="red-line" />
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Mengenal lebih dekat tentang latar belakang dan passion saya
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text-card glass-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__text-content">
              <h3 className="about__heading">
                Passionate <span className="text-accent">Production Supervisor</span>
              </h3>
              <p className="about__paragraph">
                Saya Ilham Ardiansyah, lulusan program studi Teknologi dan Manajemen
                Akuakultur Terapan dari IPB University (Institut Pertanian Bogor)
                angkatan 2026 dengan gelar Sarjana Terapan Perikanan (S.Tr.Pi.).
              </p>
              <p className="about__paragraph">
                Selama menempuh pendidikan, saya mengembangkan pemahaman mendalam
                tentang manajemen produksi, pengendalian kualitas, dan optimalisasi
                proses di industri akuakultur. Saya memiliki jiwa kepemimpinan yang kuat
                dan mampu bekerja dalam tim maupun secara mandiri.
              </p>
              <p className="about__paragraph">
                Saya berdedikasi untuk menerapkan ilmu dan keterampilan yang saya miliki
                sebagai Supervisor Produksi, dengan fokus pada efisiensi operasional,
                keselamatan kerja, dan peningkatan kualitas hasil produksi.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="about__stat-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="about__stat-icon">{stat.icon}</div>
                <div className="about__stat-info">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
