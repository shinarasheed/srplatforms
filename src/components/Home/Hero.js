import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import Image from "gatsby-image"

import "../../styles/carousel.scss"

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
    backgroundImg: file(relativePath: { eq: "securitybanner2.jpg" }) {
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
        {/* <Carousel.Item className="carouselBanner">
          <Image
            className="d-block w-100"
            fluid={data.backgroundImg.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption>
            <div>
              <div className="bannerText">
                <img src={require("../../assets/img/wheel.png")} alt="wheel" />

                <div className="securityBannerText">
                  <p>Innovative</p>
                  <h5>
                    Armed Escort Services in <br /> Nigeria
                  </h5>
                  <p>
                    SR Platforms Ltd is one of the leading <br /> private
                    security companies providing high <br /> standard and
                    privately contracted <br /> security services.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
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
                THROUGH <br /> INNOVATIVE IDEAS
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
