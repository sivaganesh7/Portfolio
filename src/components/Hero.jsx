import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  "Full-Stack Developer",
  "AI Integration Engineer",
  "MERN Stack Developer",
  "CS Undergraduate @ VIT"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent-primary/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent-secondary/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/20 bg-white/60 backdrop-blur-sm mb-8 shadow-sm"
        >
          <span className="text-sm border-r border-accent-primary/15 pr-2">🚀</span>
          <span className="text-sm font-body text-text-primary/80 font-medium">Looking for new opportunities</span>
        </motion.div>

        {/* Glitch Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glitch-text font-display font-extrabold leading-tight mb-6"
          data-text="Siva Ganesh Pepakayala"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
        >
          Siva Ganesh Pepakayala
        </motion.h1>

        {/* Rotating Subtitle */}
        <div className="h-10 mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-body text-lg md:text-2xl text-accent-primary font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="group px-8 py-3.5 bg-accent-primary text-white font-body font-semibold rounded-xl
              hover:bg-accent-primary/90 transition-all duration-300 flex items-center gap-2
              shadow-[0_4px_20px_rgba(108,60,233,0.3)] hover:shadow-[0_6px_30px_rgba(108,60,233,0.45)]"
            data-cursor-hover
          >
            View My Work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href="https://drive.google.com/file/d/1Y44t7CMB2bDnkKQgeXQpmV_-RCVG_Umj/view?usp=drive_link"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-accent-primary/30 text-accent-primary font-body font-semibold
              rounded-xl hover:bg-accent-primary/5 transition-all duration-300 flex items-center gap-2 bg-white/50 backdrop-blur-sm"
            data-cursor-hover
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 bounce-chevron">
        <ChevronDown size={28} className="text-accent-primary/50" />
      </div>
    </section>
  );
};

export default Hero;
