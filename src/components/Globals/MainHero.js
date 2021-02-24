import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const MainHero = ({ home, csr, img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(MainHero)`
  min-height: ${props => (props.home ? "85vh" : "70vh")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.csr ? "center" : "flex-start")};
  align-items: ${props => (props.csr ? "center" : "flex-start")};
`
