import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  const style = {color: "white", textDecoration: 'none'}
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link style={style} to="/">
          <li className="link">About</li>
        </Link>
        <Link style={style} to="/resume">
          <li className="link">Resume</li>
        </Link>
        <Link style={style} to="/projects">
          <li className="link">Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
