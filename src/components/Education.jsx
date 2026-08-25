import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCalendar, HiLocationMarker, HiStar } from 'react-icons/hi';
import './Education.css';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courses = [
    'Manajemen Produksi Akuakultur',
    'Teknologi Budidaya Perairan',
    'Pengendalian Mutu Hasil Perikanan',
    'Analisis Kualitas Air',
    'Manajemen Usaha Perikanan',
    'Keselamatan & Kesehatan Kerja',
  ];

  return (
    <section className="education section" id="education">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="red-line" />
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Pendidikan formal yang membentuk kompetensi saya
          </p>
        </motion.div>

        <motion.div
          className="education__card glass-card"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="education__header">
            <div className="education__icon-wrapper">
              <HiAcademicCap className="education__icon" />
            </div>
            <div className="education__info">
              <h3 className="education__degree">
                Sarjana Terapan Perikanan (S.Tr.Pi.)
              </h3>
              <p className="education__school">IPB University</p>
              <p className="education__major">
                Teknologi dan Manajemen Akuakultur Terapan
              </p>
              <div className="education__meta">
                <span className="education__meta-item">
                  <HiCalendar /> Class of 2026
                </span>
                <span className="education__meta-item">
                  <HiLocationMarker /> Bogor, Jawa Barat
                </span>
              </div>
            </div>
          </div>

          <div className="education__divider" />

          <div className="education__details">
            <div className="education__detail-section">
              <h4 className="education__detail-title">
                <HiStar className="education__detail-icon" />
                Mata Kuliah Relevan
              </h4>
              <div className="education__courses">
                {courses.map((course, i) => (
                  <motion.span
                    key={course}
                    className="education__course-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
