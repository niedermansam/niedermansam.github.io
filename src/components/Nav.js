import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav() {
  const style = {color: "white", textDecoration: 'none'}
  return (
    <nav>
      <h1 id="header-logo">S</h1>
      <ul className="nav-links">
        <NavLink style={style} exact={true} to="/">
          <li className="link">About</li>
        </NavLink>
        <NavLink style={style} to="/resume">
          <li className="link">Resume</li>
        </NavLink>
        <NavLink style={style} to="/projects">
          <li className="link">Projects</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
