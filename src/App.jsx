import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './apps/Dashboard/Dashboard';
import FinanceTracker from './apps/FinanceTracker/FinanceTracker';
import WeatherApp from './apps/WeatherApp/WeatherApp';
import JobTracker from './apps/JobTracker/JobTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/finance" element={<FinanceTracker />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/job" element={<JobTracker />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
