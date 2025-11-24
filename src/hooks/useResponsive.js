import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';
import { debounce } from '../utils';

/**
 * Custom hook to detect viewport size and responsiveness
 * @returns {Object} { isMobile, isTablet, isDesktop, width }
 */
export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth < BREAKPOINTS.TABLET,
    isTablet: windowWidth >= BREAKPOINTS.TABLET && windowWidth < BREAKPOINTS.DESKTOP,
    isDesktop: windowWidth >= BREAKPOINTS.DESKTOP,
    width: windowWidth,
  };
};
