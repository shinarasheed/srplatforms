import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

import SEO from "../components/seo"
import "../styles/csr.scss"
import Layout from "../components/layout"
import { StyledCsr } from "../components/Globals/styledComponents"
//import HeroSection from "../components/Globals/MainHero"
import HeroSection from "../components/Globals/OtherHero"

const csr = ({ data }) => {
  const { contentfulHeroImages, allContentfulCompanyCsr } = data
  const { titlecsr, descriptioncsr, heroImagecsr } = contentfulHeroImages

  const theHeroImage = getImage(heroImagecsr)
  const bgImage = convertToBgImage(theHeroImage)

  const CompanyCsr = allContentfulCompanyCsr.nodes

  return (
    <Layout>
      <SEO title="CSR" description="Corporate Social Responsibility" />
      {/*<HeroSection
        className="csrBanner"
        csr="true"
        img={data.backgroundImg.childImageSharp.fluid}
      >
        <div className="csrText">
          <h3>Corporate Social Responsibility</h3>
          <p>
            Contributing to the advancement and development of human kind and
            society through best practices
          </p>
        </div>
      </HeroSection>*/}

      <HeroSection
        className="servicesBanner"
        img={theHeroImage}
        bgImage={bgImage}
      >
        <h5 data-aos="fade-up-right">{titlecsr}</h5>
        <p data-aos="fade-up-right">{descriptioncsr}</p>
      </HeroSection>
      <section className="csrFirstSection">
        <h5>Our Objective</h5>
        <h5>
          SR PLATFORMS delivers its Corporate Social Responsibility <br /> (CSR)
          objectives in line with global best practices.
        </h5>
        <p>
          The Corporation therefore, guided by social, environmental and safety
          standards as obtained <br /> in the Oil and Gas industry, operates
          safely and deals ethically with all our stakeholders.
        </p>
        <p>
          Our Corporate Social Responsibility (CSR) objectives are hinged on
          improving the overall <br /> well-being of our stakeholders and
          members of the host communities, through the <br /> provision of
          sustainable projects and programmes in all spheres of life namely;
          Health, <br /> Education, Economic Empowerment, Sports/Culture and
          Charitable/Professional <br />
          donations. We also engage in CSR activites to support the development
          of the local <br /> economies in all our areas of operation.
        </p>
      </section>

      <section>
        {CompanyCsr.map((item, index) => {
          const {
            description1: { description1 },
            description2: { description2 },
            //description3: { description3 },
            title,
            banner,
          } = item
          const image = getImage(banner)
          return (
            <StyledCsr>
              <div
                className="text"
                style={{
                  background:
                    title === "Education" ||
                    title === "Economic Empowerment and Capacity Building"
                      ? "#0f3057"
                      : "#292929",
                  color: "#fff",
                }}
              >
                <div>
                  <h5>{title}</h5>
                  <p>{description1}</p>
                  <p>{description2}</p>
                </div>
              </div>
              <div className="banner">
                <GatsbyImage image={image} alt={title} />
              </div>
            </StyledCsr>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    backgroundImg: file(relativePath: { eq: "rr.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    contentfulHeroImages {
      titlecsr
      descriptioncsr
      heroImagecsr {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }

    allContentfulCompanyCsr {
      nodes {
        title
        description1 {
          description1
        }
        description2 {
          description2
        }
        description3 {
          description3
        }
        banner {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`

export default csr
