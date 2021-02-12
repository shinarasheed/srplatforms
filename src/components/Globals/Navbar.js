import React from "react"
import { Link } from "gatsby"

import "../../styles/navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav">
      <Link>
        <img src="" alt="srplatforms logo" />
      </Link>

      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__list-link">home</Link>
        </li>
        <li className="nav__list">
          <Link className="nav__list-link">services</Link>
        </li>
        <li className="nav__list">
          <Link className="nav__list-link">about us</Link>
        </li>
        <li className="nav__list">
          <Link className="nav__list-link">csr</Link>
        </li>
        <li className="nav__list">
          <Link className="nav__list-link">hse</Link>
        </li>
        <li className="nav__list">
          <Link className="nav__list-link">contact us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
