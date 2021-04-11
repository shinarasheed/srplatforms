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
      <SEO
        title="Marine Security"
        description="Innovative Armed Escort Services in Nigeria"
      />
      <HeroSection
        home="true"
        className="securitybanner"
        img={data.backgroundImg.childImageSharp.fluid}
      >
        <div className="securitybannerText">
          <div>
            <img
              className="w-100"
              src={require("../assets/img/wheel.png")}
              alt="wheel"
            />
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
          <p data-aos="fade-down" data-aos-duration="1000">
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
            <div data-aos="fade-left" data-aos-duration="1000">
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
          <div data-aos="fade-right" data-aos-duration="1000">
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
            <img src={require("../assets/img/lgs.jpeg")} alt="testimonial" />
          </div>
          <div className="testimonial">
            <div data-aos="fade-left" data-aos-duration="1000">
              <h6 className="testimonialText">
                “Service was carried out in a very professional manner <br />{" "}
                while also being efficient and punctual. Good communication{" "}
                <br /> and timely delivery. I am very happy with the service
                provided.{" "}
              </h6>
              <p className="name">Rob McMahon</p>
              <h6 className="client">LGS Global</h6>
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

    crewImg: file(relativePath: { eq: "newcrew.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
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
