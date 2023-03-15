import React from "react";
import dew from "/src/dew.jpg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={dew} className="icon" />
        <h4>A NavBar</h4>
        <ul className="nav-list">
          <li>About</li>
          <li>Contact</li>
          <li>Problems?</li>
        </ul>
      </nav>
    </header>
  );
}
