'use client';

import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let Lenis: any;
    let lenis: any;

    try {
      Lenis = require('lenis').default;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      const raf = (time: number) => {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      };

      requestAnimationFrame(raf);
    } catch (error) {
      // Lenis not available, use default scroll
      console.warn('Lenis not available, using default scroll');
    }

    return () => {
      if (lenis) {
        try {
          lenis.destroy();
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  return <>{children}</>;
}
