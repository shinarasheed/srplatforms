import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import Image from "gatsby-image"
import AOS from "aos"
import "aos/dist/aos.css"

import "../../styles/carousel.scss"

const getImage = graphql`
  {
    secondSlide: file(relativePath: { eq: "banner1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    thirdSlide: file(relativePath: { eq: "fcs_4008.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    backgroundImg: file(relativePath: { eq: "banner3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bannerImg1: file(relativePath: { eq: "mediator_ii.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    bannerImg2: file(relativePath: { eq: "mediator_iii.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    bannerImg3: file(relativePath: { eq: "mediator_iv.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  const data = useStaticQuery(getImage)

  return (
    <>
      <Carousel>
        <Carousel.Item className="carouselItem">
          <Image
            className="d-block w-100"
            fluid={data.backgroundImg.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption className="carouselCaption">
            <div className="bannerText">
              <div className="bannerImg">
                <img src={require("../../assets/img/wheel.png")} alt="wheel" />
              </div>

              <div className="securityBannerText">
                <p>Innovative</p>
                <h5>
                  Armed Escort Services in <br /> Nigeria
                </h5>
                <p>
                  SR Platforms Ltd is one of the leading <br /> private security
                  companies providing high <br /> standard and privately
                  contracted <br /> security services.
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.secondSlide.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption style={{ paddingLeft: "80px" }}>
            <div className="text">
              <h3>SAFETY FIRST</h3>
              <p>
                We conduct a continuous review, <br /> internal audit and
                development of our <br /> SHE-Q policies...
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
          <Carousel.Caption style={{ paddingLeft: "80px" }}>
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
            fluid={data.bannerImg1.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption style={{ paddingLeft: "80px" }}>
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
            fluid={data.bannerImg2.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption style={{ paddingLeft: "80px" }}>
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

        <Carousel.Item>
          <Image
            className="d-block w-100"
            fluid={data.bannerImg3.childImageSharp.fluid}
            alt="banner"
          />
          <Carousel.Caption style={{ paddingLeft: "80px" }}>
            <div className="text">
              <h3>SAFETY FIRST</h3>
              <p>
                We conduct a continuous review, <br /> internal audit and
                development of our <br /> SHE-Q policies...
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Hero
