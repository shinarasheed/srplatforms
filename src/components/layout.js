import React, { useEffect } from "react"
import PropTypes from "prop-types"
import AOS from "aos"
import "aos/dist/aos.css"

import "../styles/layout.scss"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import Sidebar from "../components/Globals/Sidebar"

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="layout">
      <Navbar toggle={toggle} />
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
