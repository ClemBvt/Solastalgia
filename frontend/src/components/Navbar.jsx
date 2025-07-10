import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/protection-oceans" className="nav-link">Protection des océans</Link>
      <Link to="/changement-climatique" className="nav-link">Changement climatique</Link>
    </nav>
  );
}

export default Navbar;
