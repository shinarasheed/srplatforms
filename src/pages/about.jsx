import React from "react";

import SeoComponent from "../components/SeoComponent";
import Layout from "../components/layout";
import "../styles/about.scss";
import { valuesData, valuesData2 } from "../data/index";
import AboutSlide from "../components/slides/about";
import ManagementSlides from "../components/slides/managementSlides";
import PartnerI from "../assets/img/partner1.jpeg";
import MemberI from "../assets/img/member1.png";
import MemberII from "../assets/img/member2.png";

const about = ({ data }) => {
  return (
    <Layout>
      <SeoComponent
        title="About Us"
        description="Epitome
                of professionalism"
      />

      <section className="aboutHero">
        <div data-aos="fade-up-left">
          <h5>ECOLOGICAL FRIENDLY ENVIRONMENT</h5>
          <p>
            To Conduct our business with the highest standard of ethics <br />{" "}
            adherance to the law, Corporate governance and Industry <br /> best
            pratices
          </p>
        </div>
      </section>
      <section id="aboutFirstSection" className="aboutFirstSection">
        <div className="aboutSlide">
          <div className="slides">
            <AboutSlide />
          </div>
        </div>
        <div className="text">
          <div>
            <h5 className="text-center">OUR COMPANY</h5>
            <div data-aos="fade-up-left">
              <p>
                SR Platforms Ltd is a wholly owned Nigerian Company, engaged in
                marine and <br /> offshore support services. We are the epitome
                of professionalism in the provision <br /> of marine vessel
                services. SR Platforms will help to add value to the upstream{" "}
                <br /> sector of the oil and gas industry in Nigeria and beyond
                through ensuring the safe <br />
                delivery of petroleum products and services ranging from
                Completions and Sub-Sea <br /> Services to Vessel Chartering
                services.
              </p>
              <p>
                As we continue the quest of building our own world class fleet
                of vessels, we offer <br /> a variety of vessels for shallow and
                deep water operations such as Security Vessels, <br /> Offshore
                Support Vessels Supply Vessels, Multi-Purpose Construction
                Vessels, <br /> Anchor Handling Tugs.
              </p>
              <p>
                We also provide manpower services including Naval Architecture,
                Sea Fastening <br /> Design, Installation and Wreck Removal.
              </p>
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
          <ManagementSlides />
        </div>
      </section>

      <section data-aos="fade-up-left" className="aboutFourthSection">
        <div className="partners">
          <h5>Partners</h5>
          <p>SR Platforms is affiliated to other partners such as :</p>
          <img src={PartnerI} alt="partner" />
        </div>
        <div className="membership">
          <h5>Membership</h5>
          <p>We are members of bodies such as:</p>
          <div className="members">
            <img src={MemberI} alt="member" />
            <img loading="lazy" src={MemberII} alt="member" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
