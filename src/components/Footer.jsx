import { Heart } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-bg-secondary border-t border-accent-primary/8 py-8 mt-[-1.5rem] rounded-t-[2rem] z-10 shadow-[0_-8px_30px_rgba(108,60,233,0.04)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="font-display font-bold text-xl">
            <span className="text-accent-primary">S</span>
            <span className="text-text-primary">G</span>
            <span className="text-accent-secondary">P</span>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm font-body flex items-center gap-1.5">
            © {new Date().getFullYear()} Siva Ganesh Pepakayala. Built with
            <Heart size={14} className="text-accent-secondary fill-accent-secondary" />
            and React
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sivaganesh7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
              data-cursor-hover
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/p-sivaganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
              data-cursor-hover
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
