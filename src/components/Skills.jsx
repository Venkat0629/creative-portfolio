import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="tags">
          {(skills || []).map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;