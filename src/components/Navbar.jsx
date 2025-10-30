import React, { useEffect, useState } from 'react';

const Navbar = ({ theme, toggleTheme, menuOpen, toggleMenu, profileName }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
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
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(false);
  };

  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        <button
          className="brand"
          onClick={() => scrollToSection('home')}
          aria-label="Go to home section"
        >
          {profileName || ''}
        </button>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={menuOpen} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary" onClick={() => toggleMenu(false)}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                scrollToSection(id);
              }}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
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