import { THEMES, STORAGE_KEYS } from '../constants';

/**
 * Get the initial theme from localStorage or default to light
 * @returns {string} The theme value ('light' or 'dark')
 */
export const getInitialTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEYS.THEME);
  return saved === THEMES.DARK || saved === THEMES.LIGHT ? saved : THEMES.LIGHT;
};

/**
 * Toggle between light and dark theme
 * @param {string} currentTheme - The current theme
 * @returns {string} The new theme
 */
export const toggleTheme = (currentTheme) => {
  return currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
};

/**
 * Apply theme to document and save to localStorage
 * @param {string} theme - The theme to apply
 */
export const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
};
