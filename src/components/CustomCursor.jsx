import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch screens (smartphones, tablets) to save CPU/GPU cycles
    const touch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouch(touch);
    if (touch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Use GPU transform instead of layout-triggering top/left
      dot.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const handleMouseEnterInteractive = () => {
      dot.classList.add('hover');
      ring.classList.add('hover');
    };

    const handleMouseLeaveInteractive = () => {
      dot.classList.remove('hover');
      ring.classList.remove('hover');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    // Add hover detection on interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="cursor-dot fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block" 
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={ringRef} 
        className="cursor-ring fixed top-0 left-0 pointer-events-none z-[99998] hidden md:block" 
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
