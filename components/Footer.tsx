'use client';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://www.instagram.com/rohan__upadhyay07.18/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/rohanupadhyay001"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:rohanupadhyay838@gmaill.com"
          className="footer-icon"
          aria-label="Email"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-upadhyay-595313316/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-contact">
        <MdPhone style={{ marginRight: 8 }} />
        <span>+91-7307873669</span>
      </div>
      <div className="footer-rights">
        All rights conserved &copy; {new Date().getFullYear()}
      </div>
      <style jsx>{`
        .footer {
          background: #000;
          color: #fff;
          font-family: "Comic Sans MS", "Comic Sans", cursive;
          text-align: center;
          padding: 2rem 1rem 1rem 1rem;
          position: relative;
        }
        .footer-social {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }
        .footer-icon {
          font-size: 2rem;
          color: #fff;
          transition: transform 0.3s, color 0.3s;
          position: relative;
        }
        .footer-icon:hover {
          color: #ffb347;
          transform: translateY(-12px) scale(1.2) rotate(-10deg);
          filter: drop-shadow(0 4px 12px #ffb34788);
        }
        .footer-contact {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .footer-rights {
          font-size: 1rem;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}
