import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiCog, HiClipboardCheck, HiChartBar, HiShieldCheck,
  HiUserGroup, HiLightBulb, HiChat, HiClock,
} from 'react-icons/hi';
import { GiTropicalFish, GiWaterDrop } from 'react-icons/gi';
import './Skills.css';

const technicalSkills = [
  { icon: <GiTropicalFish />, name: 'Aquaculture Management', level: 90 },
  { icon: <HiCog />, name: 'Production Planning', level: 85 },
  { icon: <HiClipboardCheck />, name: 'Quality Control', level: 88 },
  { icon: <GiWaterDrop />, name: 'Water Quality Management', level: 92 },
  { icon: <HiChartBar />, name: 'Data Analysis', level: 78 },
  { icon: <HiShieldCheck />, name: 'Safety Management (K3)', level: 82 },
];

const softSkills = [
  { icon: <HiUserGroup />, name: 'Leadership', level: 90 },
  { icon: <HiLightBulb />, name: 'Problem Solving', level: 88 },
  { icon: <HiChat />, name: 'Communication', level: 85 },
  { icon: <HiClock />, name: 'Time Management', level: 82 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="skills section" id="skills">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="red-line" />
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Keahlian teknis dan soft skill yang saya kembangkan
          </p>
        </motion.div>

        <div className="skills__grid">
          <motion.div
            className="skills__category"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="skills__category-title">
              <span className="skills__category-dot" />
              Technical Skills
            </h3>
            <div className="skills__list">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skills__item glass-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                >
                  <div className="skills__item-header">
                    <div className="skills__item-icon">{skill.icon}</div>
                    <span className="skills__item-name">{skill.name}</span>
                    <span className="skills__item-percent">{skill.level}%</span>
                  </div>
                  <div className="skills__bar-track">
                    <motion.div
                      className="skills__bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills__category"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="skills__category-title">
              <span className="skills__category-dot" />
              Soft Skills
            </h3>
            <div className="skills__list">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skills__item glass-card"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                >
                  <div className="skills__item-header">
                    <div className="skills__item-icon">{skill.icon}</div>
                    <span className="skills__item-name">{skill.name}</span>
                    <span className="skills__item-percent">{skill.level}%</span>
                  </div>
                  <div className="skills__bar-track">
                    <motion.div
                      className="skills__bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional skills tags */}
            <motion.div
              className="skills__tags"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="skills__category-title" style={{ marginTop: '2rem' }}>
                <span className="skills__category-dot" />
                Other Skills
              </h3>
              <div className="skills__tag-list">
                {['Microsoft Office', 'HACCP', 'GMP', 'SSOP', 'Inventory Management',
                  'Budgeting', 'Reporting', 'Team Building'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="skills__tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
