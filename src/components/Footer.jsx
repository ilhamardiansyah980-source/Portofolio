import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import './Footer.css';

const socialLinks = [
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/6281200000000', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-text">IA</span>
              <span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">
              Production Supervisor & Aquaculture Specialist
            </p>
          </div>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Ilham Ardiansyah. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <HiHeart className="footer__heart" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
