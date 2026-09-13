import { useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AISkills from './components/AISkills';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ===== Floating Light Blue Rectangles (Optimized layer count) ===== */
const floatingRectData = [
  { left: '8%', width: 110, height: 45, duration: 22, delay: 0 },
  { left: '26%', width: 130, height: 50, duration: 26, delay: 5 },
  { left: '48%', width: 85, height: 35, duration: 20, delay: 2 },
  { left: '68%', width: 120, height: 48, duration: 24, delay: 7 },
  { left: '85%', width: 95, height: 38, duration: 21, delay: 3 },
  { left: '55%', width: 100, height: 42, duration: 28, delay: 10 },
];

/* ===== Floating Squares Data ===== */
const floatingSquareData = [
  { left: '12%', size: 30, duration: 16, delay: 0 },
  { left: '32%', size: 45, duration: 22, delay: 4 },
  { left: '52%', size: 25, duration: 18, delay: 2 },
  { left: '72%', size: 40, duration: 24, delay: 6 },
  { left: '88%', size: 35, duration: 20, delay: 1 },
  { left: '42%', size: 28, duration: 19, delay: 8 },
];

const BackgroundEffects = () => {
  return (
    <>
      {/* Aurora Mesh Gradient Blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />

      {/* Static Crisp Grid (0% CPU/GPU overhead) */}
      <div className="square-grid" />

      {/* Floating Violet Squares (Desktop only) */}
      <div className="floating-squares">
        {floatingSquareData.map((sq, i) => (
          <div
            key={i}
            className="square-shape"
            style={{
              left: sq.left,
              width: `${sq.size}px`,
              height: `${sq.size}px`,
              animationDuration: `${sq.duration}s`,
              animationDelay: `${sq.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Flowing Light Blue Rectangular Boxes */}
      <div className="floating-rects">
        {floatingRectData.map((rect, i) => (
          <div
            key={`rect-${i}`}
            className="rect-shape"
            style={{
              left: rect.left,
              width: `${rect.width}px`,
              height: `${rect.height}px`,
              bottom: '-80px',
              animationDuration: `${rect.duration}s`,
              animationDelay: `${rect.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Fade Overlay */}
      <div className="grid-overlay" />

      {/* Noise Grain Texture (Desktop only) */}
      <div className="noise-overlay" />
    </>
  );
};

function App() {
  useEffect(() => {
    // Only enable smooth scrolling on desktop devices with fine pointer (mouse/trackpad).
    // On mobile touch devices, use native 120Hz momentum scrolling to prevent lag and stuttering.
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        {/* Hero has no overlap — it's the first section */}
        <Hero />

        {/* Each section overlaps the previous one like stacking cards */}
        <div className="section-overlap-alt">
          <About />
        </div>

        <div className="section-overlap">
          <Experience />
        </div>

        <div className="section-overlap-alt">
          <Projects />
        </div>

        <div className="section-overlap">
          <AISkills />
        </div>

        <div className="section-overlap-alt">
          <Skills />
        </div>

        <div className="section-overlap">
          <Achievements />
        </div>

        <div className="section-overlap-alt">
          <Certifications />
        </div>

        <div className="section-overlap">
          <Contact />
        </div>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
