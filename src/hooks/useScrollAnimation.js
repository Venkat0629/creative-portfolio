import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger animation on scroll into view
 * @param {string} animationClass - The CSS class to add on reveal
 * @param {Array} deps - Dependency array for re-running observe logic
 * @return {object} { ref, visible }
 */
export const useScrollAnimation = (animationClass = 'animate-fade-in', deps = []) => {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleReveal = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleReveal, {
      threshold: 0.18
    });
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, deps);
  return { ref };
};
