import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = props => {
  console.log(props);

  //THIS IS using higher order component, refer to the line at bottom with export
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000);
  return (
    <nav className="nav-warpper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Poke App
        </Link>
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

//this is called "higher order component"
export default withRouter(Navbar);
