import { useState, useEffect } from 'react';
import { getInitialTheme, toggleTheme as toggleThemeUtil, applyTheme } from '../utils';

/**
 * Custom hook to manage theme state
 * @returns {Object} { theme, toggleTheme }
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => toggleThemeUtil(prevTheme));
  };

  return { theme, toggleTheme };
};
