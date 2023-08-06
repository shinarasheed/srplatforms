import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const OtherHero = ({ home, csr, img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(OtherHero)`
  min-height: ${props => (props.home ? "85vh" : "70vh")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.csr ? "center" : "flex-start")};

  @media (max-width: 425px) {
    min-height: 30vh;
    justify-content: flex-start;
  }
`
