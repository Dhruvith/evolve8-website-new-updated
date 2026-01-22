'use client';

import { useEffect, useRef } from 'react';

let gsap: any;
let ScrollTrigger: any;

if (typeof window !== 'undefined') {
  gsap = require('gsap');
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
}

export function GSAPScrollAnimations() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger) return;

    const sections = document.querySelectorAll('[data-gsap-section]');
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    sectionsRef.current.forEach((section, index) => {
      const elements = section.querySelectorAll('[data-gsap-element]');
      
      elements.forEach((element, elIndex) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
            delay: elIndex * 0.1,
          }
        );
      });

      // Parallax effect for images
      const images = section.querySelectorAll('[data-gsap-parallax]');
      images.forEach((image) => {
        gsap.to(image, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Text reveal animation
      const textElements = section.querySelectorAll('[data-gsap-text]');
      textElements.forEach((text) => {
        gsap.fromTo(
          text,
          {
            clipPath: 'inset(100% 0 0 0)',
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return null;
}

