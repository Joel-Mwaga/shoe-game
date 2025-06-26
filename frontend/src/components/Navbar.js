import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <h1>
        <span className="netflix-red">SHOE</span>
        <span className="white">GAME</span>
      </h1>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/new">New</Link></li>
      <li><Link to="/popular">Popular</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </ul>
  </nav>
);

export default Navbar;