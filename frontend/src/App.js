import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProtectionOceans from './pages/ProtectionOceans';
import ChangementClimatique from './pages/ChangementClimatique';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protection-oceans" element={<ProtectionOceans />} />
        <Route path="/changement-climatique" element={<ChangementClimatique />} />
      </Routes>
    </Router>
  );
}

export default App;