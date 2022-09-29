import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "../styles/services.scss"
import { offers } from "../data/index"
import HeroSection from "../components/Globals/OtherHero"
import OtherServiceSlide from "../components/slides/services"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const services = ({ data }) => {
  const {
    contentfulHeroImages: {
      titleServicePage,
      descriptionServicepage,
      heroImageservice,
    },
    allContentfulServiceOffers,
    contentfulServiceBanner: { image: serviceBanner },
    allContentfulOtherServices,
    contentfulProjections,
    allContentfulMarineAssets,
    allContentfulMarineVessels,
  } = data

  const servicePageBanner = getImage(serviceBanner)

  const otherServices = allContentfulOtherServices.nodes
  const marineAssets = allContentfulMarineAssets.nodes
  const marineVessels = allContentfulMarineVessels.nodes

  const theHeroImage = getImage(heroImageservice)
  const bgImage = convertToBgImage(theHeroImage)

  const { projection1, projection2, projection3 } = contentfulProjections

  return (
    <Layout>
      <SEO title="Services" description="Value Adding Services" />
      <HeroSection
        className="servicesBanner"
        img={theHeroImage}
        bgImage={bgImage}
      >
        <h5 data-aos="fade-up-right">{renderRichText(titleServicePage)}</h5>
        <p data-aos="fade-up-right">{renderRichText(descriptionServicepage)}</p>
      </HeroSection>

      <section className="servicesSecondSection">
        <div className="statement">
          <h5 data-aos="fade-up-right">WHAT WE OFFER</h5>
        </div>
        <div className="offers">
          {allContentfulServiceOffers.nodes.map((offer, index) => {
            const {
              title: { title },
              description,
              image,
            } = offer

            const banner = getImage(image)
            return (
              <div data-aos="fade-right" className="serviceOffer" key={index}>
                <GatsbyImage image={banner} alt={description} />
                <div className="offerText">
                  <p data-aos="fade-up-right">{title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section data-aos="fade-right" className="servicesThirdSection">
        <h5>We also undertake other services as follows:</h5>
      </section>
      <section className="servicesSlideSection">
        <OtherServiceSlide otherServices={otherServices} />
      </section>
      <section className="servicesFourthSection">
        <article>
          <div data-aos="fade-right" className="title">
            <h5>MILESTONE</h5>
          </div>
          <div className="milestones">
            <div className="left">
              <div className="text">
                <div>
                  <h5 data-aos="fade-right">
                    "Well-structured <br /> operational base"
                  </h5>
                </div>
                <div>
                  <p data-aos="fade-right">
                    At SR PLATFORMS, We continue the quest of <br /> building
                    our own world class fleet of vessel and <br /> ensure our
                    Customer base increased steadily and <br /> progressively.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="upperRight">
                {marineAssets.map(asset => {
                  const { title, assetDescription } = asset
                  return (
                    <div data-aos="fade-right">
                      <h5>{title}</h5>
                      <p>{renderRichText(assetDescription)}</p>
                    </div>
                  )
                })}
              </div>
              <div className="downRight">
                <p>In 2019, SR PLATFORMS added to her fleet;</p>
                <div className="vessels">
                  {marineVessels.map(vessel => {
                    const {
                      vesselTitle,
                      vesselDescription: { vesselDescription },
                    } = vessel
                    return (
                      <div data-aos="fade-left">
                        <h5>{vesselTitle}</h5>
                        <h6>{vesselDescription}</h6>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section
        className="damenblog"
        style={{ marginBottom: "4rem", marginTop: "4rem" }}
      >
        {/*<Img fluid={data.damenImg.childImageSharp.fluid} />*/}
        <GatsbyImage image={servicePageBanner} />
      </section>
      <section className="servicesFifthSection">
        <div className="projection">
          <h5>PROJECTION</h5>
        </div>
        <div className="text">
          <div className="overlay"></div>
          <div className="textContent">
            <div className="leftContent">
              <h6 data-aos="fade-left">{renderRichText(projection1)}</h6>
            </div>

            <div className="middleContent">
              <h6 data-aos="fade-left">{renderRichText(projection1)}</h6>
            </div>

            <div className="rightContent">
              <h6 data-aos="fade-left">{renderRichText(projection3)}</h6>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default services

export const query = graphql`
  {
    backgroundImg: file(relativePath: { eq: "bg5.png" }) {
      childImageSharp {
        fluid(maxWidth: 3080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    damenImg: file(relativePath: { eq: "damenImg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    contentfulHeroImages {
      titleServicePage {
        raw
      }
      descriptionServicepage {
        raw
      }
      heroImageservice {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }

    allContentfulServiceOffers {
      nodes {
        title {
          title
        }
        description
        image {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }

    contentfulServiceBanner {
      image {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    allContentfulOtherServices {
      nodes {
        description
        banner {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }

    contentfulProjections {
      projection1 {
        raw
      }
      projection2 {
        raw
      }
      projection3 {
        raw
      }
    }

    allContentfulMarineAssets {
      nodes {
        title
        assetDescription {
          raw
        }
      }
    }

    allContentfulMarineVessels {
      nodes {
        vesselTitle
        vesselDescription {
          vesselDescription
        }
      }
    }
  }
`
