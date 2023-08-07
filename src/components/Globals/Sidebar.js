import React from "react"
import Links from "../constants/links"
import { IoMdClose } from "react-icons/io"

import "../../styles/navbar.scss"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links" />
      </div>
    </aside>
  )
}

export default Sidebar