import { useState, useCallback } from 'react';

/**
 * Custom hook for toggle state management
 * @param {boolean} initialValue - Initial toggle state
 * @returns {Array} [isOpen, toggle, setIsOpen]
 */
export const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, toggle, setIsOpen];
};
