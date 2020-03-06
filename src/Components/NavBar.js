import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-gray fixed-top">
      <Link className="navbar-brand" to="/">
        Nylund's Tarkov App
      </Link>
    </nav>
  );
}

export default NavBar;