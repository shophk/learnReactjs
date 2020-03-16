import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav-warpper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke App</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            {/* NavLink generates a class name 'active' in the actual html file, how this works require further study. */}
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
