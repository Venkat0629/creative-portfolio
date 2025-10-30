import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer>
      <div className="container">© {new Date().getFullYear()} {name || ''}</div>
    </footer>
  );
};

export default Footer;