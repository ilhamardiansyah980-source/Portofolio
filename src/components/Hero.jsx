import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <ParticleBackground />
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />

      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero__text">
            <motion.p
              className="hero__greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="hero__greeting-line" />
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ilham
              <span className="hero__name-accent"> Ardiansyah</span>
            </motion.h1>

            <motion.div
              className="hero__role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  'Production Supervisor',
                  2000,
                  'Aquaculture Specialist',
                  2000,
                  'Quality Control Expert',
                  2000,
                  'Team Leader',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="hero__role-text"
              />
              <span className="hero__cursor">|</span>
            </motion.div>

            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Lulusan Sekolah Vokasi IPB dengan keahlian di bidang teknologi dan manajemen
              akuakultur terapan. Berdedikasi untuk mengoptimalkan proses produksi
              dengan pendekatan inovatif dan terukur.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="/CV_Ilham_Ardiansyah.pdf" download className="btn btn-primary" id="download-cv-btn">
                <HiDownload /> Download CV
              </a>
              <a href="#contact" className="btn btn-outline" id="contact-btn"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
                <HiMail /> Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn" id="linkedin-link">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Instagram" id="instagram-link">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="hero__image-glow" />
            <div className="hero__image-ring hero__image-ring--1" />
            <div className="hero__image-ring hero__image-ring--2" />
            <div className="hero__image-container">
              <img src="/images/profile.png" alt="Ilham Ardiansyah" className="hero__image" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="hero__scroll-text">Scroll Down</span>
          <div className="hero__scroll-line">
            <div className="hero__scroll-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
