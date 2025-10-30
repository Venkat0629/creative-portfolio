import React, { useState } from 'react';

const EducationItem = ({ ed }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="edu-item">
      <div className="edu-dot" aria-hidden="true"></div>
      <div className="edu-row">
        <img className="edu-logo" src={ed.logo} alt="" role="presentation" />
        <div>
          <div className="edu-title">{ed.title} — {ed.institution}</div>
          <div className="edu-meta">{ed.location ? `${ed.location} • ` : ''}{ed.year}</div>
        </div>
        <div className="edu-actions">
          <div className="edu-badges" aria-label="Badges">
            {(ed.badges || []).map((b) => <span className="edu-badge" key={b}>{b}</span>)}
          </div>
          <button className="btn" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? 'Hide' : 'Details'}
          </button>
          {ed.certificateUrl ? <a className="btn" href={ed.certificateUrl} target="_blank" rel="noopener">Certificate</a> : null}
          {ed.shareUrl ? <a className="btn" href={ed.shareUrl} target="_blank" rel="noopener">Share</a> : null}
        </div>
      </div>
      <div className={`edu-details ${open ? 'open' : ''}`}>
        <div className="inner">
          <div>{ed.details}</div>
          <div className="edu-skills" aria-label="Skills acquired">
            {(ed.skills || []).map((s) => <span className="edu-skill" key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = ({ education, educationItems }) => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        {(educationItems && educationItems.length > 0) ? (
          <div className="grid cols-2">
            {educationItems.map((ed) => (
              <article className="card" key={ed.id}>
                <div className="edu-card-header">
                  <img className="edu-logo" src={ed.logo} alt="" role="presentation" />
                  <div>
                    <h3 className="edu-title">{ed.title}</h3>
                    <p className="edu-meta">{ed.institution}{ed.location ? ` • ${ed.location}` : ''}</p>
                  </div>
                </div>
                <div className="edu-fields">
                  <div className="row"><span className="label">Level</span><span className="value">{ed.level || '—'}</span></div>
                  <div className="row"><span className="label">Grade</span><span className="value">{ed.grade || education?.cgpa || '—'}</span></div>
                  <div className="row"><span className="label">Year</span><span className="value">{ed.year || education?.year || '—'}</span></div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <article className="card">
            <div className="edu-card-header">
              <img className="edu-logo" src="/logos/college.png" alt="" role="presentation" />
              <div>
                <h3 className="edu-title">{education?.degree}</h3>
                <p className="edu-meta">{education?.college}{education?.location ? ` • ${education?.location}` : ''}</p>
              </div>
            </div>
            <div className="edu-fields">
              <div className="row"><span className="label">Level</span><span className="value">Graduation</span></div>
              <div className="row"><span className="label">Grade</span><span className="value">{education?.cgpa || '—'}</span></div>
              <div className="row"><span className="label">Year</span><span className="value">{education?.year || '—'}</span></div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Education;
export { EducationItem };