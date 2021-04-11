import React, { useState } from "react"
import { graphql } from "gatsby"

import Tab from "../components/Tab"
import Layout from "../components/layout"
import HeroSection from "../components/Globals/MainHero"
import SEO from "../components/seo"

import tabs from "../data/tab"
import "../styles/complaince.scss"

const Compliance = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <Layout>
      <SEO title="Complaince" description="Nigerian Marine security company" />
      <HeroSection csr="true" img={data.compliance.childImageSharp.fluid}>
        <div className="compliancebanner-title">
          <h1>COMPLIANCE</h1>
          <p>
            SRPLATFORMS is a fully licensed, accredited, insured and registered
            Nigerian security company; with a
          </p>
          <p>successful operational background since 2015</p>
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
            <li>Memorandum of Understanding (MOU) with Nigerian Navy</li>
            <li>Civil Defence (CD) license for security services in Nigeria</li>
            <li>
              Nigerian Maritime Administration and Safety Agency (NIMASA)
              registered
            </li>
            <li>DPR certificates (Department of Petroleum Resources)</li>
            <li>
              International Code of Conduct Association for Private Security
              Service Providers (ICoCA) – Member Company of ICoCA
            </li>
            <li>NipeX (Nigerian Petroleum Exchange) member</li>
            <li>Maritime Industry Guidance from the IMO</li>
            <li> Npa - Nigerian Port Authority </li>
            <li> Bv - Bureau Veritas</li>
            <li>
              Local content - Nigerian Content Developement and Monitoring Board
            </li>
            <li>
              Flag State and Port / Government Authority Requirements (ISPS)
            </li>
            <li>BIMCO Guardcon and Rules for the Use of Force</li>
            <li>
              Liability Insurances in accordance with BIMCO GUARDCON contract
            </li>
          </ul>
        </div>
      </section>
      <section className="complianceSecondSection">
        <article className="compliancetabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              index={index}
              tab={tab}
              setActiveTab={setActiveTab}
            />
          ))}
        </article>
        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="tab-content"
        >
          <div className="content-img">
            <img src={tabs[activeTab].banner} alt="banner" />
          </div>
          <div className="content-text">
            <h1 className="text-uppercase title">{tabs[activeTab].title}</h1>

            <div className="line"></div>
            <p className="description">{tabs[activeTab].description}</p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    compliance: file(relativePath: { eq: "compliance2.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default Compliance
