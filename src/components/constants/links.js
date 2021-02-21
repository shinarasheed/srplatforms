import React from "react"
import { Link } from "gatsby"
import "../../styles/navbar.scss"

const Links = ({ styleClass }) => {
  return (
    <ul className={`${styleClass} nav__list`}>
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
        <Link to="/marinesecurity" className="nav__list-link">
          Marine Security
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav__list-link">
          contact us
        </Link>
      </li>
    </ul>
  )
}

export default Links
