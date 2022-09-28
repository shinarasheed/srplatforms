import React, { useState } from "react"
import { graphql } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Tab from "../components/Tab"
import Layout from "../components/layout"
//import HeroSection from "../components/Globals/MainHero"
import HeroSection from "../components/Globals/OtherHero"
import SEO from "../components/seo"

//import tabs from "../data/tab"
import "../styles/complaince.scss"

const Compliance = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0)

  const {
    contentfulHeroImages,
    allContentfulPolicyAndProcedure,
    allContentfulPolicyStatements,
  } = data
  const policiesAndProcedures = allContentfulPolicyAndProcedure.nodes
  const tabs = allContentfulPolicyStatements.nodes

  const { titleCompliance, descriptionCompliance, heroImageCompliance } =
    contentfulHeroImages

  const theHeroImage = getImage(heroImageCompliance)
  const bgImage = convertToBgImage(theHeroImage)

  const tabImage = getImage(tabs[activeTab].banner)
  return (
    <Layout>
      <SEO title="Complaince" description="Nigerian Marine security company" />
      <HeroSection
        csr="true"
        img={data.compliance.childImageSharp.fluid}
      ></HeroSection>

      <HeroSection
        className="servicesBanner"
        img={theHeroImage}
        bgImage={bgImage}
      >
        <div className="compliancebanner-title">
          <h5 className="text-center" data-aos="fade-up-right">
            {titleCompliance}
          </h5>
          <p className="text-center" data-aos="fade-up-right">
            {renderRichText(descriptionCompliance)}
          </p>
        </div>
      </HeroSection>

      <section className="complianceFirstSection">
        <div className="compliance-title">
          <h1>Policy and </h1>
          <h1>Procedure</h1>
          <div className="line"></div>
        </div>
        <div className="compliance-statement">
          <h5>Compliance</h5>
          <p>
            We actively ensure all our company policies and procedures are
            compliant with all relevant government authority requirements and
            industry Codes of Practice including:
          </p>
          <ul data-aos="fade-left" data-aos-duration="1000">
            {policiesAndProcedures.map((policy, index) => {
              const { item } = policy
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </section>
      <section className="complianceSecondSection">
        <article className="compliancetabs">
          {tabs.map((tab, index) => {
            const { title, banner, description } = tab
            return (
              <Tab
                key={index}
                index={index}
                tab={tab}
                setActiveTab={setActiveTab}
              />
            )
          })}
        </article>
        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="tab-content"
        >
          <div className="content-img">
            <GatsbyImage image={tabImage} alt={tabs[activeTab].title} />
          </div>
          <div className="content-text">
            <h1 className="text-uppercase title">{tabs[activeTab].title}</h1>

            <div className="line"></div>
            <div className="description">
              <p> {renderRichText(tabs[activeTab]?.description)}</p>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Compliance

export const query = graphql`
  {
    compliance: file(relativePath: { eq: "compliance2.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }

    contentfulHeroImages {
      titleCompliance
      descriptionCompliance {
        raw
      }
      heroImageCompliance {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
      }
    }

    allContentfulPolicyAndProcedure {
      nodes {
        item
      }
    }

    allContentfulPolicyStatements {
      nodes {
        title
        banner {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF])
        }
        description {
          raw
        }
      }
    }
  }
`
