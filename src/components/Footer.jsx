import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" tabIndex={0} aria-label="Footer copyright information">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;