import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "../styles/services.scss"
import { offers } from "../data/index"
import HeroSection from "../components/Globals/MainHero"
import OtherServiceSlide from "../components/slides/services"

const services = ({ data }) => {
  return (
    <Layout>
      <SEO title="Services" description="this is the services page" />
      <HeroSection
        className="servicesBanner"
        img={data.backgroundImg.childImageSharp.fluid}
      >
        <h5 data-aos="fade-up-right">DYNAMIC RESOURCEFUL CREW</h5>
        <p data-aos="fade-up-right">
          Adding value to the upstream sector of oil and gas and ensuring the
          safe delivery of Petroleum services.
        </p>
      </HeroSection>
      <section className="servicesSecondSection">
        <div className="statement">
          <h5 data-aos="fade-up-right">WHAT WE OFFER</h5>
        </div>
        <div className="offers">
          {offers.map((offer, index) => (
            <div data-aos="fade-right" className="serviceOffer" key={index}>
              <img loading="lazy" src={offer.img} alt="offer" />
              <div className="offerText">
                <p sdata-aos="fade-up-right">{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section data-aos="fade-right" className="servicesThirdSection">
        <h5>We also undertake other services as follows:</h5>
      </section>
      <section className="servicesSlideSection">
        <OtherServiceSlide />
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
                  <h5>SR TRADER</h5>
                  <p>
                    SR PLATFORMS acquired her first vessel, SR TRADER <br /> a
                    bunkers self-propelled barge in February 2007 for <br />{" "}
                    bunkering operations.
                  </p>
                </div>
                <div>
                  <h5 data-aos="fade-right">Marine Assets</h5>
                  <p>
                    We also have several third payment charters of <br />{" "}
                    various marine assets under our operations.
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
                </div>
              </div>
            </div>
          </div>
        </article>
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

export const query = graphql`
  {
    backgroundImg: file(relativePath: { eq: "bg5.png" }) {
      childImageSharp {
        fluid(maxWidth: 3080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default services
