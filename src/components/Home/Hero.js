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
            <div className="text">
              <h3>SAFETY FIRST</h3>
              <p>
                We conduct a continous review, <br /> internal audit and
                development of our <br /> SHE-Q policies...
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.secondSlide.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption>
            <div className="text">
              <h3>
                SEASONED <br /> PROFESSIONALS
              </h3>
              <p>
                With Seasoned Customer Ethics, <br /> Customer Control and
                Market Expert
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.thirdSlide.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption>
            <div className="text">
              <h3>
                THROUGH INNOVATIVE <br /> IDEAS
              </h3>
              <p>
                We Provide Best in Class <br /> Marine/Offshore Support Services
                for <br /> the Oil and Gas industry
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Hero
