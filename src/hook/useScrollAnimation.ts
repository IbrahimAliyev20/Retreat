"use client";
import { useEffect } from 'react';

const useScrollAnimation = (ref: React.RefObject<HTMLElement | null>, delay: number = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.animationDelay = `${delay}s`;
            el.classList.add('animate-slide-up');
            observer.unobserve(el); 
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, delay]);
};

export default useScrollAnimation;
