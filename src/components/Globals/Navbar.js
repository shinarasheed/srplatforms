import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

import "../../styles/navbar.scss";
import logo from "../../assets/img/SRLogocroped.png";

const Navbar = ({ toggle }) => {
  return (
    <nav className="nav_bar">
      <div className="nav-header">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="srplatforms logo" />
        </Link>
      </div>
      <button className="toggle-btn" onClick={toggle}>
        <FaBars />
      </button>
      {/* <Links styleClass="nav-links" /> */}
      <ul className="nav-links nav__list">
        <li className="nav__list-item">
          <Link to="/" className="nav__list-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav__list-link">
            services
          </Link>
        </li>
        <li>
          <Link to="/marinesecurity" className="nav__list-link">
            Marine Security
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav__list-link">
            about us
          </Link>
        </li>
        <li>
          <Link to="/csr" className="nav__list-link">
            CSR
          </Link>
        </li>
        <li>
          <Link to="/hse" className="nav__list-link">
            HSE
          </Link>
        </li>
        <li>
          <Link to="/compliance" className="nav__list-link">
            compliance
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav__list-link">
            contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
