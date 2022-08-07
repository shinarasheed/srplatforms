import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
      titleservicepage,
      descriptionservicepage,
      heroImageservice,
    },
    allContentfulServiceOffers,
    contentfulServiceBanner: { image: serviceBanner },
    allContentfulOtherServices,
  } = data

  const servicePageBanner = getImage(serviceBanner)

  const otherServices = allContentfulOtherServices.nodes

  const theHeroImage = getImage(heroImageservice)
  const bgImage = convertToBgImage(theHeroImage)

  return (
    <Layout>
      <SEO title="Services" description="Value Adding Services" />
      <HeroSection
        className="servicesBanner"
        img={theHeroImage}
        bgImage={bgImage}
      >
        <h5 data-aos="fade-up-right">{titleservicepage}</h5>
        <p data-aos="fade-up-right">{descriptionservicepage}</p>
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
                <div data-aos="fade-right">
                  <h5>MT SR Trader</h5>
                  <p>
                    SR PLATFORMS acquired her first vessel, Bunkerine Vessel (MT
                    SR Trader) a bunkers self-propelled barge in February 2007{" "}
                    for bunkering operations.
                  </p>
                </div>
                <div>
                  <h5 data-aos="fade-right">Marine Assets</h5>
                  <p>
                    We also have several third party charters of <br /> various
                    marine assets under our operations.
                  </p>
                </div>
                <div data-aos="fade-left">
                  <h5>MT Royal Priesthood</h5>
                  <p>
                    MT ROYAL PRIESTHOOD a 12,450DWT tanker vessel <br /> was
                    procured in November 2007. It was used for <br /> coastal
                    operations.
                  </p>
                </div>
                <div data-aos="fade-left">
                  <h5>MV Mediator</h5>
                  <p>
                    In 2015, SR PLATFORMS took delivery of MV <br /> MEDIATOR, a
                    DAMEN FCS 3307 security vessel <br /> built from keel.
                  </p>
                </div>
              </div>
              <div className="downRight">
                <p>In 2019, SR PLATFORMS added to her fleet;</p>
                <div className="vessels">
                  <div data-aos="fade-left">
                    <h5>Mediator II</h5>
                    <h6>A DAMEN FCS 3307 security vessel built from keel.</h6>
                  </div>
                  <div data-aos="fade-left">
                    <h5>Mediator IV</h5>
                    <h6>A DAMEN FCS 4008 security vessel.</h6>
                  </div>
                  <div data-aos="fade-left">
                    <h5>Mediator III</h5>
                    <h6>A DAMEN FCS 4008 security vessel.</h6>
                  </div>
                  <div data-aos="fade-left">
                    <h5>Mediator V and Mediator VI</h5>
                    <h6>New Addition</h6>
                  </div>
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
              <h6 data-aos="fade-left">
                To own a world class dry-dock facility <br /> for ship repair ,
                maintenance and <br /> spares fabrication in Nigeria.
              </h6>
            </div>

            <div className="middleContent">
              <h6 data-aos="fade-left">
                To build our own world class fleet of <br /> Vessels comprising
                of Support vessels & <br /> Supply Vessels, Multi purpose
                vessels and <br /> Main Installation vessels.
              </h6>
            </div>

            <div className="rightContent">
              <h6 data-aos="fade-left">
                To enable true local content development <br /> in the Nigerian
                oil and Gas Sector, through <br /> technology transfer, training
                and tutelage.
              </h6>
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
      titleservicepage
      descriptionservicepage
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
  }
`
