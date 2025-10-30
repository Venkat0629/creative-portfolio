import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="grid cols-3">
          {(experience || []).map((e) => (
            <article className="card" key={e.company}>
              <h3>{e.role} — {e.company}</h3>
              <p className="muted">{e.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;