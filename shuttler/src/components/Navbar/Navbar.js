import React from "react";
import "./Navbar.css";

const navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div />
        <div className="navbar_logo">
          <a href="/">The Logo</a>
        </div>
        <div className="spacer" />
        <div className="navbar_items">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
