import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarZim extends Component {

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/cursos" className="navbar-item">
            Cursos
          </Link>
          <Link to="/sobre" className="navbar-item">
            Sobre
          </Link>
        </div>
      </nav>
    );
  }

}

export default NavbarZim;
