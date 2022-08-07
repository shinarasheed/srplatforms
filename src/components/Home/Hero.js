import React, { useEffect } from "react"
import { Carousel } from "react-bootstrap"
import AOS from "aos"
import "aos/dist/aos.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import "../../styles/carousel.scss"

const Hero = ({ HomepageHero }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <Carousel indicators={false}>
        {HomepageHero.map((item, index) => {
          const { title, description, heroImage } = item
          const { description: heroDescription } = description
          const image = getImage(heroImage)
          return (
            <Carousel.Item>
              <GatsbyImage image={image} alt={heroDescription} />
              <Carousel.Caption>
                <div className="text">
                  <h3>{title}</h3>
                  <p>{heroDescription}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default Hero
