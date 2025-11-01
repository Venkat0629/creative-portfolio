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
            <div className="profile-image-wrapper">
              <svg
                className="profile-image"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="false"
                role="img"
                focusable="false"
              >
                <title>Profile avatar</title>
                <desc>Placeholder avatar image for the portfolio owner</desc>
                <circle cx="50" cy="50" r="48" fill="#e0e0e0" stroke="#bdbdbd" strokeWidth="2" />
                <ellipse cx="50" cy="40" rx="18" ry="15" fill="#fff" />
                <ellipse cx="50" cy="70" rx="25" ry="18" fill="#bdbdbd" />
                <circle cx="50" cy="45" r="8" fill="#90caf9" />
              </svg>
            </div>
            <p className="muted">{profile?.location}</p>
            <h1>{profile?.name}</h1>
            <p className="subtitle">{profile?.title}</p>
          </>
        )}
        <div className="cta" role="group" aria-label="Primary actions">
          <a className="btn primary view-resume-btn" href="/resume" aria-label="Open Resume">
            <span className="icon-wrapper">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M9 5v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="btn-text">View Resume</span>
          </a>
        </div>
        <SocialLinks email={links?.email} github={links?.github} linkedin={links?.linkedin} />
      </div>
    </section>
  );
};

export default Hero;