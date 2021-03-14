import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import "../styles/csr.scss"
import Layout from "../components/layout"
import { StyledCsr } from "../components/Globals/styledComponents"
import HeroSection from "../components/Globals/MainHero"

const csr = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="CSR"
        description="this is the coorporate social responsibility page"
      />
      <HeroSection
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
      <StyledCsr>
        <div className="text" style={{ background: "#ddd" }}>
          <div>
            <h5>Education</h5>
            <p>
              SR PLATFORMS places premium on the role of education <br /> in
              sustainable development. It therefore encourages the <br />{" "}
              execution of programmes and projects aimed at <br /> providing
              access to quality education.
            </p>
            <p>
              We recognize that a thriving and peaceful environment is <br />{" "}
              critical to our success. Consequently, we have strategic <br />{" "}
              partnerships to help expand educational, economic <br />{" "}
              opportunities and sport activities. To this end, we <br />{" "}
              collaborate with our strategic partners through <br />
              sponsorships, donations and The Soji Aiyenuro <br /> Foundation
            </p>
            <p>
              The huge investments in the education sector has <br />{" "}
              contributed immensely to manpower development. <br /> Hence, the
              Nigerian labour market access quality human <br /> resource
              through the various capacity building initiatives.
            </p>
          </div>
        </div>
        <div className="banner">
          <img src={require("../assets/img/srs1.jpg")} alt="education" />
        </div>
      </StyledCsr>

      <StyledCsr>
        <div className="text" style={{ background: "#292929", color: "#fff" }}>
          <div>
            <h5>Health</h5>
            <p>
              The health and overall well-being of the people in whose <br />{" "}
              area we operate is one of cardinal CSR deliverables.
            </p>
            <p>
              We therefore execute projects that will improve their <br />{" "}
              lifestyles through the provision of health care facilities and{" "}
              <br /> programmes and this include: Construction and <br />{" "}
              equipping of Maternal Referral Centres, Cottage <br /> hospitals,
              Diagnostic Laboratories, HIV/ Malaria/Cancer <br /> Awareness and
              Prevention programmes, Chest Clinics for <br /> the treatment of
              tuberculosis and other chest related <br />
              diseases, provision of drugs and specialized equipment <br /> for
              Hospitals and Free Treatments.
            </p>
          </div>
        </div>
        <div className="banner">
          <img src={require("../assets/img/srs2.jpg")} alt="health" />
        </div>
      </StyledCsr>

      <StyledCsr home="true">
        <div className="text" style={{ background: "#ddd" }}>
          <div>
            <h5>Economic Empowerment and Capacity Building</h5>
            <p>
              We have aggressively embarked on the creation and <br />{" "}
              multiplication of wealth in our host communities through <br />{" "}
              programmes that have contributed to the development of <br />{" "}
              local economies in these areas.
            </p>
            <p>
              These enterprise development programmes have <br /> contributed
              immensely to the elimination of youth <br /> unemployment by
              equipping them with marketable skills, <br /> provide platforms
              for income generating ventures and <br /> build capacity of the
              beneficiaries to enable them meet <br /> their daily needs.
            </p>
          </div>
        </div>
        <div className="banner">
          <img
            src={require("../assets/img/srs3.jpg")}
            alt="economic empowerment"
          />
        </div>
      </StyledCsr>

      <StyledCsr>
        <div className="text" style={{ background: "#292929", color: "#fff" }}>
          <div>
            <h5>Corporate Philantropy</h5>
            <p>
              Apart from our involvement in the provision of <br /> Sustainable
              Community Development projects for the <br /> benefits of our host
              communities, SR PLATFORMS <br /> provide supports and
              contributions to charitable <br /> institutions and the
              underprivileged in the society.
            </p>
            <p>
              Professional bodies whose activities impact our core <br />{" "}
              functions are also supported to realize their objectives for{" "}
              <br /> the ultimate good of the Oil and Gas Industry and the{" "}
              <br />
              nation at large.
            </p>
          </div>
        </div>
        <div className="banner">
          <img src={require("../assets/img/srs4.jpg")} alt="giving" />
        </div>
      </StyledCsr>
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
  }
`

export default csr
