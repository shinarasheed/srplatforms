import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const MainHero = ({ home, csr, img, className, children }) => {
  return (
    <BackgroundImage className={className} home={home} {...img}>
      {children}
    </BackgroundImage>
  )
}

export default styled(MainHero)`
  min-height: ${props => (props.csr ? "75vh" : "100vh")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.csr ? "center" : "flex-end")};
  align-items: flex-start;
  margin-top: ${props => (props.csr ? "-5px" : 0)};

  @media (max-width: 425px) {
    min-height: 20vh;
    align-items: ${props => (props.home ? "center" : "flex-start")};
  }
`
