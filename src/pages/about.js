import React from "react"
import Layout from "../components/layout"

import "../styles/about.scss"
import { valuesData, valuesData2 } from "../data/index"
const about = () => {
  return (
    <Layout>
      <section className="about__banner">
        <h5>ECOLOGICAL FRIENDLY ENVIRONMENT</h5>
        <p>
          To Conduct our business with the highest standard of ethics <br />{" "}
          adherance to the law, Corporate governance and Industry <br /> best
          pratices
        </p>
      </section>
      <section className="aboutFirstSection d-flex justify-content-between">
        <div className="aboutSlide"></div>
        <div>
          <h5 className="text-center">OUR COMPANY</h5>
          <p>
            SR Platforms Ltd is a wholly owned Nigerian Company, engaged in
            marine and <br /> offshore support services. We are the epitome of
            professionalism in the provision <br /> of marine vessel services.
            SR Platforms will help to add value to the upstream <br /> sector of
            the oil and gas industry in Nigeria and beyond through ensuring the
            safe <br />
            delivery of petroleum products and services ranging from Completions
            and Sub-Sea <br /> Services to Vessel Chartering services.
          </p>
          <p>
            As we continue the quest of building our own world class fleet of
            vessels, we offer <br /> a variety of vessels for shallow and deep
            water operations such as Security Vessels, <br /> Offshore Support
            Vessels Supply Vessels, Multi-Purpose Construction Vessels, <br />{" "}
            Anchor Handling Tugs.
          </p>
          <p>
            We also provide manpower services including Naval Architecture, Sea
            Fastening <br /> Design, Installation and Wreck Removal.
          </p>
        </div>
      </section>
      <section className="aboutSecondSection">
        <div className="mb-5">
          <h4 className="text-center">Values</h4>
          <h5 className="text-center">
            We believe that everyone is important as such, there is mutual
            respect for all and <br /> freedom to express oneself and contribute
            to the growth of the group and the <br /> individuals. And our
            standards are as such:
          </h5>
        </div>
        <div className="values d-flex justify-content-between">
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
      <section className="section aboutThirdSection"></section>
      <section className="aboutFourthSection d-flex justify-content-between">
        <div>
          <h5 className="text-center">Partners</h5>
          <p className="text-center">
            SR Platforms is affiliated to other partners such as :
          </p>
          <img src={require("../assets/img/partner1.jpeg")} alt="partner" />
        </div>
        <div>
          <h5 className="text-center">Membership</h5>
          <p className="text-center">We are members of bodies such as:</p>
          <div className="d-flex">
            <img
              className="mr-5"
              src={require("../assets/img/member1.png")}
              alt="member"
            />
            <img
              loading="lazy"
              src={require("../assets/img/member2.png")}
              alt="member"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default about
