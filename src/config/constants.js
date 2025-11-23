// Configuration constants for the portfolio app

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = 'light';

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const SOCIAL_LINKS = {
  email: 'mailto:',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/in/',
  portfolio: 'https://www.crio.do/learn/portfolio/venkatsaimane'
};

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

export const BREAKPOINTS = {
  mobile: 799,
  tablet: 1024,
  desktop: 1200
};

export const CONTACT_FORM_STATES = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error'
};
