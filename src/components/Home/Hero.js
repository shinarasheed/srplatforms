import React, { useEffect } from "react"
import { Carousel } from "react-bootstrap"
import AOS from "aos"
import "aos/dist/aos.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
          const {
            heroTitle: title,
            heroDesciption1: heroDescription,
            heroImage,
          } = item
          const image = getImage(heroImage)
          return (
            <Carousel.Item>
              <GatsbyImage image={image} alt={heroDescription} />
              <Carousel.Caption>
                <div className="text">
                  <h3 className="carousel-caption-text">
                    {renderRichText(title)}
                  </h3>
                  <p>{renderRichText(heroDescription)}</p>
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
