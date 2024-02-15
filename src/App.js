import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import HomePage from './components/Homepage';
import BusOptions from './components/BusOptions';
import BusBookingForm from './components/BusBookingForm'; // Import the BusBookingForm component

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/busoptions" element={<BusOptions />} />
        {/* Ensure the path matches exactly */}
        <Route path="/bus-booking-form" element={<BusBookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
