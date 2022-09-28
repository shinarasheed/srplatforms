import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "../styles/about.scss"
import { valuesData, valuesData2 } from "../data/index"
import HeroSection from "../components/Globals/OtherHero"
import AboutSlide from "../components/slides/about"
import ManagementSlides from "../components/slides/managementSlides"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const about = ({ data }) => {
  const {
    allContentfulManagementTeam,
    contentfulPartnership,
    contentfulVisionAndMission,
    contentfulOurCompany,
    contentfulHeroImages: {
      titleaboutpage,
      descriptionaboutpage,
      heroImageaboutpage,
    },
  } = data
  const managementTeam = allContentfulManagementTeam.nodes
  const { companyDescription } = contentfulOurCompany

  const { membership1, membership3, partnership2 } = contentfulPartnership
  const partnershipImage = getImage(partnership2)
  const membershipImage1 = getImage(membership1)
  const membershipImage2 = getImage(membership3)

  const theHeroImage = getImage(heroImageaboutpage)
  const bgImage = convertToBgImage(theHeroImage)

  return (
    <Layout>
      <SEO
        title="About Us"
        description="Epitome
        of professionalism"
      />

      <HeroSection
        className="servicesBanner"
        img={theHeroImage}
        bgImage={bgImage}
      >
        <h5 data-aos="fade-up-right">{titleaboutpage}</h5>
        <p data-aos="fade-up-right">{descriptionaboutpage}</p>
      </HeroSection>
      <section id="aboutFirstSection" className="aboutFirstSection">
        <div className="aboutSlide">
          <div className="slides">
            <AboutSlide VisionAndMission={contentfulVisionAndMission} />
          </div>
        </div>
        <div className="text">
          <div>
            <h5 className="text-center">OUR COMPANY</h5>
            <div data-aos="fade-up-left">
              <p>{renderRichText(companyDescription)}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSecondSection">
        <div className="mb-5">
          <h4 className="text-center">Values</h4>
          <div data-aos="fade-up-left">
            <h5 className="text-center">Corporate Culture</h5>
            <p>
              We believe that everyone is important as such, there is mutual
              respect for all and <br /> freedom to express oneself and
              contribute to the growth of the group and the <br /> individuals.
              And our standards are as such:
            </p>
          </div>
        </div>
        <div className="values">
          <ul className="d-flex flex-column">
            {valuesData.map((data, index) => (
              <li key={index} className="d-flex align-items-center">
                <img src={data.icon} alt={data.text} /> <span>{data.text}</span>{" "}
              </li>
            ))}
          </ul>

          <ul>
            {valuesData2.map((data, index) => (
              <li key={index} className="d-flex align-items-center">
                <img src={data.icon} alt={data.text} /> <span>{data.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-aos="fade-up-left" className="aboutSixthSection">
        <h6>THE MANAGEMENT TEAM</h6>
        <div className="slides">
          <ManagementSlides managementTeam={managementTeam} />
        </div>
      </section>

      <section data-aos="fade-up-left" className="aboutFourthSection">
        <div className="partners">
          <h5>Partners</h5>
          <p>SR Platforms is affiliated to other partners such as :</p>

          <GatsbyImage image={partnershipImage} alt="partnerships" />
        </div>
        <div className="membership">
          <h5>Membership</h5>
          <p>We are members of bodies such as:</p>
          <div className="members">
            <GatsbyImage image={membershipImage1} alt="membership" />
            <GatsbyImage image={membershipImage2} alt="membership" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    backgroundImg: file(relativePath: { eq: "bg4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    allContentfulManagementTeam {
      nodes {
        name
        title
        biography {
          biography
        }
      }
    }

    contentfulPartnership {
      membership1 {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
      membership3 {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
      partnership2 {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }

    contentfulHeroImages {
      titleaboutpage
      descriptionaboutpage
      heroImageaboutpage {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }

    contentfulVisionAndMission {
      vison {
        raw
      }
      mission {
        raw
      }
    }

    contentfulOurCompany {
      companyDescription {
        raw
      }
    }
  }
`

export default about
