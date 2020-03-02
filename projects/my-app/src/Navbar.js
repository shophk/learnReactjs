import React, { Component } from 'react';
import logo from './logo.svg';

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top py-2"
        id="main-nav"
      >
        <div className="container animated animatedFadeInUp fadeInUp">
          <a href="#home" className="navbar-brand">
            <img src={logo} width={50} height={50} alt="" />
            <h3 className="d-inline align-middle">Mizuxe</h3>
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#authors" className="nav-link">
                  Meet The Authors
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
