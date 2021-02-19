import React from "react"
import { Link } from "gatsby"

import "../../styles/navbar.scss"
import logo from "../../assets/img/SRLogo.png"

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        <img src={logo} alt="srplatforms logo" />
      </Link>

      <ul className="nav__list">
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
          <Link to="/security" className="nav__list-link">
            Security
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav__list-link">
            contact us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
