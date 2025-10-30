import React from 'react';
import SocialLinks from './SocialLinks';

const Hero = ({ loading, profile, links }) => {
  return (
    <section id="home" className="section">
      <div className="container hero">
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '40px', height: '40px', border: '4px solid #e5e7eb', borderTop: '4px solid #2563eb', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }}></div>
            <p className="muted">Loading...</p>
          </div>
        ) : (
          <>
            <p className="muted">{profile?.location}</p>
            <h1>{profile?.name}</h1>
            <p className="subtitle">{profile?.title}</p>
          </>
        )}
        <div className="cta" role="group" aria-label="Primary actions">
          <a className="btn primary" href={links?.resume || './resume.pdf'} target="_blank" rel="noopener" aria-label="Open Resume">View Resume</a>
        </div>
        <SocialLinks email={links?.email} github={links?.github} linkedin={links?.linkedin} />
      </div>
    </section>
  );
};

export default Hero;