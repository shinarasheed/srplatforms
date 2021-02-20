import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const MainHero = ({ home, img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(MainHero)`
  min-height: ${props => (props.home ? "100vh" : "50vh")};
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
