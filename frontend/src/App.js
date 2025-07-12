import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProtectionOceans from './pages/ProtectionOceans';
import ChangementClimatique from './pages/ChangementClimatique';
import EspecesMenacees from './pages/EspecesMenacees';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protection-oceans" element={<ProtectionOceans />} />
        <Route path="/changement-climatique" element={<ChangementClimatique />} />
        <Route path="/especes-menacees" element={<EspecesMenacees />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;



