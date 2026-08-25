import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import './Experience.css';

const experiences = [
  {
    title: 'Operasional & Monitoring Produksi',
    company: 'PT Suri Tani Pemuka',
    location: 'Indonesia',
    period: '2025',
    description:
      'Terlibat dalam kegiatan operasional dan monitoring proses kerja untuk memastikan kegiatan berjalan sesuai prosedur dan target yang ditetapkan.',
    highlights: [
      'Monitoring kualitas dan kondisi operasional secara berkala serta mengidentifikasi permasalahan selama proses berlangsung',
      'Berpartisipasi dalam kegiatan produksi, quality control, pencatatan hasil, hingga proses distribusi',
      'Bekerja secara kolaboratif dengan tim dalam mendukung kelancaran kegiatan operasional dan pencapaian target kerja',
    ],
    isCurrent: true,
  },
  {
    title: 'SAIL Batch 9 Program',
    company: 'PT Suri Tani Pemuka',
    location: 'Indonesia',
    period: '2025',
    description:
      'Mengikuti program SAIL Batch 9 di PT Suri Tani Pemuka dan terlibat dalam berbagai kegiatan operasional perusahaan di bidang akuakultur.',
    highlights: [
      'Berpartisipasi dalam kegiatan budidaya dan pemeliharaan udang, termasuk monitoring kondisi, pertumbuhan, serta kegiatan produksi',
      'Terlibat dalam proses panen, penanganan, dan pengelolaan hasil budidaya sesuai kegiatan operasional di lapangan',
      'Memahami alur distribusi dan penjualan hasil budidaya serta mengembangkan kemampuan kerja sama tim, komunikasi, dan adaptasi di lingkungan industri',
    ],
    isCurrent: false,
  },
  {
    title: 'Praktik Kerja Lapangan',
    company: 'Balai Benih Ikan (BBI) Ciganjur',
    location: 'Jakarta',
    period: '2025',
    description:
      'Mendukung kegiatan operasional melalui monitoring rutin, pengelolaan kebutuhan kerja, serta penerapan prosedur untuk menjaga kualitas proses.',
    highlights: [
      'Melakukan pengamatan dan pencatatan kondisi secara berkala sebagai bagian dari evaluasi kegiatan',
      'Penerapan prosedur operasional untuk menjaga kualitas proses',
    ],
    isCurrent: false,
  },
  {
    title: 'Praktik Kerja Lapangan',
    company: 'Balai Riset Benih Ikan Hias (BRBIH) Depok',
    location: 'Depok, Jawa Barat',
    period: '2024',
    description:
      'Terlibat dalam kegiatan operasional harian, monitoring kondisi lingkungan kerja, serta pelaksanaan prosedur kerja secara konsisten.',
    highlights: [
      'Membantu proses pemantauan dan pengelolaan kegiatan untuk menjaga kualitas serta efisiensi operasional',
      'Monitoring kondisi lingkungan kerja dan pelaksanaan prosedur kerja',
    ],
    isCurrent: false,
  },
];


export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="experience section" id="experience">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="red-line" />
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Perjalanan profesional dan pengalaman kerja saya
          </p>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience__item ${index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div className="experience__dot-wrapper">
                <div className={`experience__dot ${exp.isCurrent ? 'experience__dot--active' : ''}`}>
                  <HiBriefcase />
                </div>
              </div>

              <div className="experience__card glass-card">
                {exp.isCurrent && <span className="experience__badge">Terbaru</span>}
                <h3 className="experience__title">{exp.title}</h3>
                <p className="experience__company">{exp.company}</p>

                <div className="experience__meta">
                  <span className="experience__meta-item">
                    <HiCalendar /> {exp.period}
                  </span>
                  <span className="experience__meta-item">
                    <HiLocationMarker /> {exp.location}
                  </span>
                </div>

                <p className="experience__description">{exp.description}</p>

                <ul className="experience__highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="experience__highlight">{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
