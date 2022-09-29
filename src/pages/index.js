import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import SEO from "../components/seo"
import "../styles/index.scss"
import Layout from "../components/layout"
import IndexHero from "../components/Home/Hero"
import serviceImg from "../assets/img/circle.jpg"
import CerticateSlide from "../components/slides/index"
import {
  servicesData,
  sellingPoints1,
  sellingPoints2,
  certification,
  //  clients,
  //  gallery,
} from "../data/index"

const index = ({ data }) => {
  const {
    allContentfulHomepageHero,
    contentfulHomeServiceDeliverySection,
    allContentfulGallery,
    allContentfulHomeServicesSection,
    allContentfulCertifications,
    allContentfulClients,
    contentfulSheqPolicy,
    contentfulServicesSectionDescription,
  } = data

  const certificates = allContentfulCertifications.nodes
  const clients = allContentfulClients.nodes

  const { policydescription1, policydescription2, shqImage } =
    contentfulSheqPolicy

  const { title, title2, banner, description } =
    contentfulHomeServiceDeliverySection

  const HomepageHero = allContentfulHomepageHero.nodes

  const serviceDeliveryImage = getImage(banner)
  const ShqImage = getImage(shqImage)
  const { description: servicesDescription } =
    contentfulServicesSectionDescription

  return (
    <Layout>
      <SEO title="Home" description=" Efficiency Through Service Delivery" />
      <IndexHero HomepageHero={HomepageHero} />
      <section className="indexSecondSection">
        <article>
          <h5>{title}</h5>
          <h5>{title2}</h5>
          <p data-aos="fade-up" data-aos-duration="500">
            {renderRichText(description)}
          </p>

          <Link to="/about">Read More</Link>
        </article>
        <article>
          <GatsbyImage image={serviceDeliveryImage} alt="service delivery " />
        </article>
      </section>
      <section className="indexThirdSection">
        <div className="title">
          <h5 data-aos="fade-down">{renderRichText(servicesDescription)}</h5>
        </div>
        <div className="servicesImages">
          {allContentfulHomeServicesSection.nodes.map((service, index) => {
            const { description, image } = service
            const banner = getImage(image)

            return (
              <div key={index} className="service">
                <GatsbyImage image={banner} alt={service.description} />
                <div className="serviceText">
                  <p>{description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="readMore">
          <Link className="text-center" to="/services">
            Read More
          </Link>
        </div>
      </section>
      <section className="indexFourthSection">
        <article className="description">
          <div className="nicheServices">
            <h5 data-aos="fade-up">NICHE SERVICES</h5>
            <p
              data-aos="fade-up-left"
              data-aos-delay="1000"
              data-aos-duration="500"
            >
              At SR Platforms, we provide tools for <br /> professional service
              delivery and operational <br /> excellence that ensures our
              client's satisfaction <br /> and value for our shareholders.
            </p>
          </div>
          <div className="sellingPoints">
            <h5 data-aos="fade-up-right">OUR UNIQUE SELLING POINTS</h5>
            <div className="sellingPointsText">
              <div
                data-aos="fade-up-left"
                data-aos-duration="500"
                className="sellingPointsCol1"
              >
                {sellingPoints1.map((point, index) => (
                  <ul key={index} className="points">
                    <li>
                      <span className="icon">{point.icon}</span>
                      <span className="text">{point.text}</span>
                    </li>
                  </ul>
                ))}
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-duration="500"
                className="sellingPointsCol2"
              >
                {sellingPoints2.map((point, index) => (
                  <ul key={index} className="points">
                    <li>
                      <span className="icon">{point.icon}</span>
                      <span className="text">{point.text}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className="overlay"></article>
      </section>
      <section className="indexFifthSection">
        <h5 className="text-center">Certifications and Licenses</h5>
        <div className="certificates">
          <CerticateSlide slides={certificates} />
        </div>
      </section>

      <section className="indexSixthSection">
        <div data-aos="fade-down-left">
          <h4 className="text-center">SAFETY</h4>
          <h5 className="text-center"> Our SHE-Q Policy</h5>
        </div>
        <article data-aos="fade-down-left" className="safety__policy">
          <div className="safety__policy-text">
            <p>{renderRichText(policydescription1)}</p>
          </div>
          <div className="safety__policy-text">
            <p>{renderRichText(policydescription2)}</p>
          </div>
        </article>
        <div data-aos="fade-down-left" className="safety__section">
          <GatsbyImage image={ShqImage} alt="shqimage" />
          <h5 data-aos="fade-down-left">
            SAFETY FIRST BECAUSE INJURY LASTS!!!.
          </h5>
        </div>
      </section>

      <section data-aos="fade-down-left" className="indexSeventhSection">
        {allContentfulGallery.nodes.map((node, index) => {
          const image = getImage(node.image)

          return (
            <div className="gallery__item" key={index}>
              <GatsbyImage
                image={image}
                alt={node.title}
                imgStyle={{ height: "100%" }}
              />
              <div className="overlay"></div>
            </div>
          )
        })}
      </section>

      <section className="indexEightSection">
        <h5 data-aos="fade-down" className="text-center">
          A Few of our Clients
        </h5>
        <div className="clients">
          <CerticateSlide slides={clients} />
        </div>
      </section>
    </Layout>
  )
}

export default index

export const query = graphql`
  {
    allContentfulHomepageHero {
      nodes {
        heroDesciption1 {
          raw
        }
        heroTitle {
          raw
        }
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }

    contentfulSheqPolicy {
      policydescription1 {
        raw
      }
      policydescription2 {
        raw
      }
      shqImage {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }

    contentfulHomeServiceDeliverySection {
      description {
        raw
      }
      title
      title2
      banner {
        gatsbyImageData(layout: FIXED, formats: [AUTO, WEBP, AVIF])
      }
    }

    allContentfulGallery {
      nodes {
        title
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }

    allContentfulHomeServicesSection {
      nodes {
        description
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }

    allContentfulCertifications {
      nodes {
        title
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }

    allContentfulClients {
      nodes {
        title
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }

    contentfulServicesSectionDescription {
      description {
        raw
      }
    }
  }
`
