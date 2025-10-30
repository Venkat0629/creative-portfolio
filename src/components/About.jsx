import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p className="subtitle">{about}</p>
      </div>
    </section>
  );
};

export default About;