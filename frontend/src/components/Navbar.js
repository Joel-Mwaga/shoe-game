import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span className="netflix-red">SHOEGAME</span>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><a href="#new">New</a></li>
      <li><a href="#popular">Popular</a></li>
      <li><Link to="/cart">Cart</Link></li>
    </ul>
  </nav>
);

export default Navbar;