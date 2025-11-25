import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Dashboard() {
  useEffect(() => {
    window.electronAPI.resizeWindow(900, 750);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 My Dashboard</h1>
      <p>Select an app to open:</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/finance">
          <button>💰 Finance Tracker</button>
        </Link>
        <Link to="/weather">
          <button>☀️ Weather App</button>
        </Link>
        <Link to="/job">
          <button>👔 Job Tracker</button>
        </Link>
        <div style={{ marginTop: '20px' }}>
          <p>More apps coming soon...</p>
        </div>
        {/* <div style={{ marginTop: '20px' }}>
          <Link to="/"><button>🏠 Back to Home</button></Link>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
