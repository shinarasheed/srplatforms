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
import { renderRichText } from "gatsby-source-contentful/rich-text"

const csr = ({ data }) => {
  const {
    contentfulHeroImages,
    allContentfulCompanyCsr,
    contentfulCsrobjective,
  } = data
  const { titlecsr, descriptioncsr, heroImagecsr } = contentfulHeroImages

  const theHeroImage = getImage(heroImagecsr)
  const bgImage = convertToBgImage(theHeroImage)

  const CompanyCsr = allContentfulCompanyCsr.nodes

  const { objectiveTitle, objectiveDescription, objectiveBody } =
    contentfulCsrobjective

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
        <h5>{objectiveTitle}</h5>
        <h5>{renderRichText(objectiveDescription)}</h5>
        <p>{renderRichText(objectiveBody)}</p>
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

    contentfulCsrobjective {
      objectiveTitle
      objectiveDescription {
        raw
      }
      objectiveBody {
        raw
      }
    }
  }
`

export default csr
