import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    // Only run if device has a fine pointer (mouse/trackpad)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        ring.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      ring.style.opacity = '0';
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const handleMouseEnterInteractive = () => {
      ring.classList.add('hover');
    };

    const handleMouseLeaveInteractive = () => {
      ring.classList.remove('hover');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(animateRing);

    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <div 
      ref={ringRef} 
      className="cursor-ring fixed top-0 left-0 pointer-events-none z-[99998] opacity-0 transition-opacity duration-300 hidden md:block" 
      style={{ willChange: 'transform' }}
    />
  );
};

export default CustomCursor;
