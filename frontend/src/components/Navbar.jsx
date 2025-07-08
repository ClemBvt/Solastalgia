import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/temperatures" className="nav-link">Températures</Link>
      <Link to="/oceans" className="nav-link">Niveaux océans</Link>
      <Link to="/especes-menacees" className="nav-link">Espèces menacées</Link>
      <Link to="/animaux-menaces" className="nav-link">Animaux menacés</Link>
    </nav>
  );
}

export default Navbar;
