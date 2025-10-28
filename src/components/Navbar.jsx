import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "./media/images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-light navbar p-0">
      <div className="container d-flex align-items-center justify-content-between bg-light" style={{ height: "90px" }}>
        {/* Logo */}
        <div className="navLogo">
          <Link to="/">
            <img src={navLogo} alt="logo" height="90px" width="140px" />
          </Link>
        </div>

        {/* Hamburger icon */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav links */}
        <ul className={`nav-links list-unstyled m-0 ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink className="opts" to="/" end onClick={() => setMenuOpen(false)}>
              <span className="btn-text-one">Home</span>
              <span className="btn-text-two">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="opts" to="/about" onClick={() => setMenuOpen(false)}>
              <span className="btn-text-one">About</span>
              <span className="btn-text-two">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="opts" to="/service" onClick={() => setMenuOpen(false)}>
              <span className="btn-text-one">Services</span>
              <span className="btn-text-two">Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="opts" to="/package" onClick={() => setMenuOpen(false)}>
              <span className="btn-text-one">Packages</span>
              <span className="btn-text-two">Packages</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink className="opts" to="/contact" onClick={() => setMenuOpen(false)}>
              <span className="btn-text-one">Contact</span>
              <span className="btn-text-two">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
