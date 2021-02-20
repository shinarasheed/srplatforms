import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import Image from "gatsby-image"

const getImage = graphql`
  {
    firstSlide: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    secondSlide: file(relativePath: { eq: "banner1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    thirdSlide: file(relativePath: { eq: "banner2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(getImage)

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.firstSlide.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.secondSlide.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.thirdSlide.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Hero
