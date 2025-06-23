'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Poetry Works', href: '/poetry' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Me', href: '/contact' },
];

// Helper to wrap each letter in a span for animation
function FlippingText({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((char, idx) => (
        <span className="flip-letter" style={{ '--delay': `${idx + 1}` } as React.CSSProperties} key={idx}>
          {char}
        </span>
      ))}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* Left: Name */}
      <div className="navbar-name">
        <span className="golden-name">Rohan Upadhyay</span>
      </div>
      {/* Center/Right: Nav Links */}
      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link${pathname === item.href ? ' active' : ''}`}
          >
            <FlippingText text={item.label} />
          </Link>
        ))}
      </div>
      <style jsx global>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 1rem 2rem;
          background: #000;
          font-family: "Comic Sans MS", "Comic Sans", cursive;
          position: relative;
          z-index: 100;
        }
        .navbar-name {
          flex: 0 0 auto;
          margin-left: 2rem; /* Shift name right */
        }
        .golden-name {
          font-size: 1.6rem;
          font-weight: bold;
          color: #FFD700;
          letter-spacing: 2px;
          transition: filter 0.4s;
          cursor: pointer;
          display: inline-block;
        }
        .golden-name:hover {
          filter: blur(4px) brightness(1.2);
          animation: blurInOut 0.8s;
        }
        @keyframes blurInOut {
          0%   { filter: blur(0px) brightness(1); }
          40%  { filter: blur(6px) brightness(1.4);}
          60%  { filter: blur(6px) brightness(1.4);}
          100% { filter: blur(0px) brightness(1);}
        }
        .navbar-links {
          display: flex;
          gap: 2rem;
          margin-left: auto;
          min-width: 50vw; /* Ensures links start from center */
          justify-content: flex-start;
        }
        .nav-link {
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: color 0.2s;
        }
        .nav-link.active {
          text-decoration: underline;
        }
        .flip-letter {
          display: inline-block;
          transition: transform 0.5s;
          animation: flipIn 1.2s;
          animation-delay: calc(0.08s * var(--delay));
        }
        .nav-link:hover .flip-letter {
          animation: flip 0.6s;
          animation-fill-mode: both;
        }
        @keyframes flip {
          0%   { transform: rotateY(0deg);}
          50%  { transform: rotateY(180deg);}
          100% { transform: rotateY(0deg);}
        }
        @keyframes flipIn {
          0%   { transform: rotateY(90deg);}
          100% { transform: rotateY(0deg);}
        }
      `}</style>
    </nav>
  );
}

