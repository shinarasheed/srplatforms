import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import Links from "../constants/links"

import "../../styles/navbar.scss"
import logo from "../../assets/img/SRLogo.png"

const Navbar = ({ toggle }) => {
  return (
    <nav className="nav">
      <div className="nav-header">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="srplatforms logo" />
        </Link>
        <button className="toggle-btn" onClick={toggle}>
          <FaBars />
        </button>
      </div>
      <Links styleClass="nav-links" />
    </nav>
  )
}

export default Navbar
