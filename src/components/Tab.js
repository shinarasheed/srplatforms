import React from "react"

const Tab = ({ tab, setActiveTab, index }) => {
  return (
    <h2 style={{ cursor: "pointer" }} onClick={() => setActiveTab(index)}>
      {tab.title}
    </h2>
  )
}

export default Tab
