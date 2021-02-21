import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.scss"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import Sidebar from "../components/Globals/Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="layout">
      <Navbar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
