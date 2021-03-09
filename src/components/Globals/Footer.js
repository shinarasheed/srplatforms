import React from "react"
import { Link } from "gatsby"

import "../../styles/footer.scss"
import logo from "../../assets/img/logo.png"
import { footerSocial } from "../constants/navlinks"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__items">
        <Link to="/" className="footer__logo">
          <img src={logo} alt="srplatforms logo" />
        </Link>
        <div className="footer__links-container">
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
          <ul className="footer__links">
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/csr">CSR</Link>
            </li>
          </ul>
          <div className="footer__address">
            <ul>
              <li>Contact Us</li>
              <li>For further enquiries contact us at:</li>
              <li>Email: info@srplatforms.com</li>
            </ul>

            <ul>
              <li>Main Office</li>
              <li>5A2 2ND Street, Osborne Foreshore</li>
              <li>Estate, Ikoyi Lagos Nigeria</li>
            </ul>

            <ul>
              <li>Tel:+234-1-4531960</li>
              <li>+2348066377819 +2348051492298</li>
            </ul>

            <ul className="footerSocial">
              {footerSocial.map((social, index) => (
                <li key={index}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <p className="footer__copy">
        &copy; {new Date().getFullYear()} SRPLATFORMS. All rights reserved.
        Designed by ECSCORP
      </p>
      <section className="footer__overlay"></section>
    </footer>
  )
}

export default Footer
