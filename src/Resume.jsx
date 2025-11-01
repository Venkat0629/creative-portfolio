import React from 'react';

const resumeUrl = '/src/assets/Resume 25.pdf';

export default function Resume() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      {/* <h2>Resume</h2> */}
      <iframe
        src={resumeUrl}
        title="Resume"
        width="80%"
        height="800px"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      />
      <br />
      <button
        style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: '6px', border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer' }}
        onClick={() => window.location.href = '/'}
      >
        Return to Portfolio
      </button>
    </div>
  );
}