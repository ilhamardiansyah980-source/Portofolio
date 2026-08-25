import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  HiMail, HiPhone, HiLocationMarker, HiPaperAirplane,
} from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    icon: <HiMail />,
    label: 'Email',
    value: 'ilham.ardiansyah@email.com',
    href: 'mailto:ilham.ardiansyah@email.com',
  },
  {
    icon: <HiPhone />,
    label: 'Phone',
    value: '+62 812-XXXX-XXXX',
    href: 'tel:+6281200000000',
  },
  {
    icon: <HiLocationMarker />,
    label: 'Location',
    value: 'Bogor, Jawa Barat, Indonesia',
    href: null,
  },
];

const socialLinks = [
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/6281200000000', label: 'WhatsApp' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="red-line" />
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Tertarik untuk berdiskusi atau ada peluang kerja sama? Jangan ragu untuk menghubungi saya
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Let's talk!</h3>
            <p className="contact__info-desc">
              Saya terbuka untuk peluang baru dan kolaborasi. Silakan hubungi
              saya melalui form atau kontak di bawah ini.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact__info-item glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">{item.value}</a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label={link.label}
                  id={`contact-${link.label.toLowerCase()}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows={5}
                className="contact__input contact__textarea"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary contact__submit"
              id="submit-contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>✓ Terkirim!</>
              ) : (
                <><HiPaperAirplane /> Send Message</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
