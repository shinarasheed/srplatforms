import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import HeroSection from "../components/Globals/MainHero"
import SEO from "../components/seo"
import "../styles/security.scss"
import { mainService, stats } from "../data/index"

const security = ({ data }) => {
  return (
    <Layout>
      <SEO title="Security" description="this is the security page" />
      <HeroSection
        home="true"
        className="securitybanner"
        img={data.backgroundImg.childImageSharp.fluid}
      >
        <div className="bannerText">
          <div>
            <img src={require("../assets/img/wheel.png")} alt="whell" />
          </div>
          <div className="text">
            <p>Innovative</p>
            <h5>
              Armed Escort Services in <br /> Nigeria
            </h5>
            <p>
              SR Platforms Ltd is one of the leading <br /> private security
              companies providing high <br /> standard and privately contracted{" "}
              <br /> security services.
            </p>
          </div>
        </div>
      </HeroSection>

      <section className="securityFirstSection">
        <div className="title">
          <h5 className="text-center text-uppercase">What We do</h5>
        </div>
        <div className="body">
          <p>
            SR PLATFORMS LIMITED is one of the leading private security
            companies providing high standard privately contracted security
            services. We offer security solutions for vessels sailing in
            high-risk areas around the Indian Ocean Region and West Africa
          </p>
        </div>
      </section>

      <section className="securitySecondSection">
        <div className="title">
          <h5 className="text-center text-uppercase">Services</h5>
        </div>
        <div className="body">
          <div className="securityImg">
            <Img fluid={data.securityImg.childImageSharp.fluid} />
          </div>
          <div className="locations">
            <div>
              <h4>Armed Security Escorts for Merchant vessel</h4>
              <h4>
                Provision of Full Round the clock Marine Security Services
              </h4>
              <h4>
                Security Patrol and Surveillance vessels within the following
                regions:
              </h4>
              <ul>
                <li>Warri</li>
                <li>Bonny</li>
                <li>Calabar</li>
                <li>Qua Iboe</li>
                <li>Forcados</li>
                <li>Escravos</li>
                <li>Lagos</li>
                <li>Koko</li>
                <li>Brass</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="securityThirdSection">
        <div className="title">
          <h5>
            We offer four main services with full operational transparency:
          </h5>
        </div>
        <div className="services">
          {mainService.map((service, index) => (
            <div className="service" key={index}>
              <img src={service.img} alt={service.text} />
              <div className="serviceText">
                <p className="text">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="securityFourthSection">
        <div className="stats">
          <div>
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <img src={stat.img} alt="statistics" />
                <div>
                  <span>{stat.number}</span>
                </div>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="statsImg">
          <Img className="statimg" fluid={data.crewImg.childImageSharp.fluid} />
        </div>
      </section>
      <section className="securityFifthSection">
        <div className="title">
          <h5>WHY WORK WITH SRPLATFORMS</h5>
        </div>
        <div className="text">
          <div className="textImg">
            <Img
              className="textimg"
              fluid={data.workImg.childImageSharp.fluid}
            />
          </div>
          <div className="textStatement">
            <div>
              <p>
                SR PLATFORMS LIMITED provides fully-licensed armed escort
                service for merchant vessels navigating high risk routes off
                Nigeria.
              </p>
              <p>
                We have partnership with the Nigerian Navy, and we also hold all
                neccesary approvals and permits from the Nigerian Government
              </p>
              <p>
                SR PLATFORMS LIMITED has invested heavily in Acquisition of
                six(6) fully Ballistic security vessels to make the Waterways of
                Nigeria safer.
              </p>
              <p>
                We have well trained crew and with the partnership of the
                Nigerian Navy, We guarantee safe sailing within the Gulf of
                Guinea.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="securitySixthSection">
        <div className="title">
          <h5>TESTIMONIALS</h5>
        </div>
        <div className="testimonials">
          <div className="testimonialImg">
            <img
              src={require("../assets/img/Group 13.png")}
              alt="testimonial"
            />
          </div>
          <div className="testimonial">
            <div>
              <h6 className="testimonialText">
                “SR Platforms has always been reliable, conscientious and <br />
                competitive in regards other security vessel providers. <br />{" "}
                They have always had the facility to provide vessels at <br />{" "}
                short notice and ensured that security escorts for the river{" "}
                <br /> and offshore operations are carried out in a safe and{" "}
                <br /> secure manner.”
              </h6>
              <p className="name">Steve Corlin</p>
              <h6 className="client">Offshore Security Coordinator, Saipem</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="securitySeventhSection">
        <div className="partnership">
          <h5 className="title">Partnership</h5>
          <img
            src={require("../assets/img/accreditation1.png")}
            alt="accrediation"
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    workImg: file(relativePath: { eq: "workImg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    # statImg: file(relativePath: { eq: "statImg.png" }) {
    #   childImageSharp {
    #     fluid(quality: 90, maxWidth: 1000) {
    #       ...GatsbyImageSharpFluid_withWebp
    #     }
    #   }
    # }
    crewImg: file(relativePath: { eq: "newcrew.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          src
        }
      }
    }

    securityImg: file(relativePath: { eq: "securityImg.jpg" }) {
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
  }
`

export default security
