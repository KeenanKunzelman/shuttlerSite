import React from "react";

import "../SideDrawer/DrawerToggleButton";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div>
          <DrawerToggleButton click={props.navClickHandler} />
        </div>
        <div className="navbar_logo">
          <a href="/">Shuttler</a>
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
