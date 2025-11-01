import React, { useEffect, useState } from 'react';

const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Education', 'Contact'];

const Navbar = ({ theme, toggleTheme, menuOpen, toggleMenu, profileName }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollSections = sections.map(s => s.toLowerCase());
      const scrollPosition = window.scrollY + 100;
      for (const section of scrollSections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(false);
    setActiveSection(section.toLowerCase());
  };

  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        <button
          className="brand"
          onClick={() => handleNavClick('Home')}
          aria-label="Go to home section"
        >
          {profileName || ''}
        </button>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={menuOpen} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className="nav-main" aria-label="Main navigation">
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="menubar">
            {sections.map((section) => (
              <li key={section} role="none">
                <a
                  href={`#${section.toLowerCase()}`}
                  className={`nav-link${activeSection === section.toLowerCase() ? ' active' : ''}`}
                  onClick={() => handleNavClick(section)}
                  role="menuitem"
                  tabIndex={0}
                  aria-current={activeSection === section.toLowerCase() ? "page" : undefined}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="nav-theme icon-btn" onClick={(e) => { e.stopPropagation(); toggleTheme(); }} aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM3 11H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm15.66 7.66a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41ZM6.46 6.46a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 5.75 4l.71.71a1 1 0 0 1 0 1.41Zm12.2-1.41-.71.71a1 1 0 1 1-1.41-1.41l.71-.71A1 1 0 1 1 18.66 5.05ZM6.46 17.54l-.71.71A1 1 0 0 1 4.34 17l.71-.71a1 1 0 1 1 1.41 1.41Z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;