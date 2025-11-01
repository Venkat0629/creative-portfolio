import React from 'react';

const Certifications = ({ accomplishments, certifications }) => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>Accomplishments & Certifications</h2>
        <div className="grid cols-2">
          <article className="card" tabIndex={0} aria-label="Accomplishments">
            <h3>Accomplishments</h3>
            <div className="tags">
              {(accomplishments || []).map((a) => <span className="tag" key={a}>{a}</span>)}
            </div>
          </article>
          <article className="card" tabIndex={0} aria-label="Certifications">
            <h3>Certifications</h3>
            <div className="tags">
              {(certifications || []).map((c) => <span className="tag" key={c}>{c}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certifications;