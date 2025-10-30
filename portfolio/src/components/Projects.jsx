import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid cols-3">
          {(projects || []).map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <p className="muted"><strong>Tech:</strong> {p.stack}</p>
              <a className="btn" href={p.link} target="_blank" rel="noopener">View</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;