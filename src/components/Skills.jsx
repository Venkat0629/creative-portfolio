import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="tags" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(skills || []).map((s) => (
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              key={s.name}
            >
              <img
                src={s.badge}
                alt={s.name + ' logo'}
                className="skill-badge"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;