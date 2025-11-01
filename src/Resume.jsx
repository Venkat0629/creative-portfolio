import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

export default function Resume({ theme }) {
  const resumeUrl = '/src/assets/Resume 25.pdf';
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <button
          className="back-portfolio-btn"
          onClick={() => navigate('/')}
          aria-label="Back to Portfolio"
        >
          <span className="icon-wrapper">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" stroke="#1976d2" strokeWidth="4" fill="#fff" />
              <path d="M20 24L28 24" stroke="#1976d2" strokeWidth="3" strokeLinecap="round" />
              <path d="M24 20L20 24L24 28" stroke="#1976d2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="btn-text">Back to Portfolio</span>
        </button>
      </div>
      <iframe
        src={resumeUrl}
        title="Resume"
        width="80%"
        height="800px"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>
  );
}