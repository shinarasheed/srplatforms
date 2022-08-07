import React from "react"

import SEO from "../components/seo"
import "../styles/contact.scss"
import Layout from "../components/layout"
import HeroSection from "../components/Globals/OtherHero"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import { FiClock } from "react-icons/fi"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const contact = ({ data }) => {
  const { contentfulHeroImages } = data
  const { heroImageContact } = contentfulHeroImages

  const theHeroImage = getImage(heroImageContact)
  const bgImage = convertToBgImage(theHeroImage)
  return (
    <Layout>
      <SEO title="Contact" description="Contact Us" />
      {/*<section className="contactbanner"></section>*/}
      <HeroSection
        className="servicesBanner"
        img={theHeroImage}
        bgImage={bgImage}
      ></HeroSection>
      <section className="contact">
        <section className="contactFirstSection">
          <div className="mb-4 d-flex">
            <div>
              <span>Get </span>
              <div className="line"></div>
            </div>
            <span className="ml-2">inTouch</span>
          </div>
          <div className="text">
            <p>
              You can contact us any way that is convenient for you. We are
              available 24/7 via fax or email. You can also use a quick contact
              form below or visit our office personally. Email us with any
              questions or inquires or use our contact data. We would be happy
              to answer your questions.
            </p>
          </div>
        </section>

        <section className="contactContactForm">
          <h5
            data-aos="fade-down-left"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            Contact Form
          </h5>

          <form action="https://formspree.io/f/xoqydndz" method="POST">
            <div
              data-aos="fade-down-left"
              data-aos-delay="1000"
              data-aos-duration="2000"
              className="userDetails mb-4"
            >
              <input
                className="formControl"
                type="text"
                placeholder="Your First Name"
                name="firstName"
              />
              <input
                className="formControl"
                type="text"
                placeholder="Your Last Name"
                name="lastName"
              />
            </div>
            <div
              data-aos="fade-down-left"
              data-aos-delay="1000"
              data-aos-duration="2000"
              className="mb-4"
            >
              <input
                className="formControl"
                type="text"
                placeholder="Your Need"
                name="need"
              />
            </div>
            <div
              data-aos="fade-down-left"
              data-aos-delay="1000"
              data-aos-duration="2000"
              className="mb-4"
            >
              <textarea
                placeholder="Message"
                className="formControl"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Submit Message</button>
          </form>
        </section>
      </section>

      <section className="bendSection">
        <div className="topbend"></div>
        <section className="contactSecondSection">
          <div
            data-aos="fade-down-left"
            data-aos-delay="1000"
            data-aos-duration="2000"
            className="itemsWrapper"
          >
            <div className="item">
              <div className="iconWrapper">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div className="description">
                <h5>Address</h5>
                <ul>
                  <li>5A2 2nd Street, Osborne</li>
                  <li>Foreshore Estate, Ikoyi Lagos,</li>
                  <li>Nigeria</li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="iconWrapper">
                <FaPhoneAlt className="icon" />
              </div>
              <div className="description">
                <h5>Phones</h5>
                <ul>
                  <li>+234 -1-4531960</li>
                  <li>+2348022998451 (Marine Security )</li>
                  <li>+2348066377819</li>
                  <li>+2348166118109</li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="iconWrapper">
                <FiClock className="icon" />
              </div>
              <div className="description">
                <h5>Opening Hours</h5>
                <ul>
                  <li>24 Hours, 7days a Week</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="bottombend"></div>
      </section>
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    contentfulHeroImages {
      heroImageContact {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`
