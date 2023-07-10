import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <h1 className="header">Math Magicians</h1>
    <ul className="links">
      <li>
        <NavLink to="/" className="link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className="link">
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quote" className="link">
          Quote
        </NavLink>
      </li>
    </ul>
  </header>
);
export default Navbar;
