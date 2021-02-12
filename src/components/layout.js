import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.scss"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
