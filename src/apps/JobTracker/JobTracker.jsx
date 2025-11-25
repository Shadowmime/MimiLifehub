import React from 'react';
import { Link } from 'react-router-dom';

function JobTracker() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Tracking App Name here</h1>
      <p>Job Tracking App to be implemented soon...</p>
      <Link to="/"><button>⬅ Back to Dashboard</button></Link>
    </div>
  );
}

export default JobTracker;
