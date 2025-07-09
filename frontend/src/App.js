import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Temperatures from './pages/Temperatures';
import EspecesMenacees from './pages/EspecesMenacees';
import AnimauxMenaces from './pages/AnimauxMenaces';
import ProtectionOceans from './pages/ProtectionOceans';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperatures" element={<Temperatures />} />
        <Route path="/protection-oceans" element={<ProtectionOceans />} />
        <Route path="/especes-menacees" element={<EspecesMenacees />} />
        <Route path="/animaux-menaces" element={<AnimauxMenaces />} />
      </Routes>
    </Router>
  );
}

export default App;
