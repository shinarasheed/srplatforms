import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"
import Layout from "../components/layout"
import IndexHero from "../components/Home/Hero"
import serviceImg from "../assets/img/circle.jpg"
import {
  servicesData,
  sellingPoints1,
  sellingPoints2,
  certification,
  clients,
  gallery,
} from "../data/index"

const index = () => {
  return (
    <Layout>
      <IndexHero />
      <section className="indexSecondSection">
        <article>
          <h5>
            Efficiency Through <br /> Service Delivery
          </h5>
          <p>
            SR Platforms Ltd is a wholly owned Nigerian Company, engaged in
            marine and offshore support services.
          </p>
          <p>
            We are the epitome of professionalism in the provision of marine
            vessel services.
          </p>
          <p>
            SR Platforms will help to add value to the upstream sector of the
            oil and gas industry in Nigeria and beyond..
          </p>

          <Link to="/">Read More</Link>
        </article>
        <article>
          <img src={serviceImg} alt="service" />
        </article>
      </section>
      <section className="indexThirdSection">
        <div>
          <h5>
            Foremost Indigenous Company with Expertise in <br /> Marine/Offshore
            Support Services to the oil & Gas <br /> Industry Using Innovative
            service Delivery
          </h5>
        </div>
        <div className="servicesImages">
          {servicesData.map((service, index) => (
            <div key={index} className="service">
              <img src={service.img} alt="service" />
            </div>
          ))}
        </div>
        <Link className="text-center" to="/">
          Read More
        </Link>
      </section>
      <section className="indexFourthSection">
        <article className="description">
          <div className="nicheServices">
            <h5>NICHE SERVICES</h5>
            <p>
              At SR Platforms, we provide tools for <br /> professional services
              delivery and operational <br /> excellence that ensures our client
              satisfaction <br /> and value for our shareholders.
            </p>
          </div>
          <div className="sellingPoints">
            <h5>OUR UNIQUE SELLING POINTS</h5>
            <div className="sellingPointsText">
              <div className="sellingPointsCol1">
                {sellingPoints1.map((point, index) => (
                  <ul key={index} className="points">
                    <li>
                      <span className="icon">{point.icon}</span>
                      <span className="text">{point.text}</span>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="sellingPointsCol2">
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
          {certification.map((certificate, index) => (
            <div key={index}>
              <img src={certificate.certification} alt="certification" />
            </div>
          ))}
        </div>
      </section>

      <section className="indexSixthSection">
        <h4 className="text-center">SAFETY</h4>
        <h5 className="text-center"> Our SHE-Q Policy</h5>
        <article className="safety__policy">
          <div className="safety__policy-text">
            <p>
              Our Safety, Health, Environment and Quality (SHE-Q) culture aims
              for an <br /> incident-free working environment because safety
              management is a priority <br /> to us.
            </p>
            <p>
              We conduct a continuous review, internal audit and development of
              our <br /> SHE-Q policies and procedures to ensure that the
              highest standards are <br /> met at all times.
            </p>
            <p>
              We have implemented several in-house safety policies in line with
              our <br /> Safety Management Systems which includes; our safety
              policy, security <br /> policy, alcohol and drug policy to mention
              a few.
            </p>
            <p>
              Our seasoned in-house safety officers/managers have increased the
              safety <br /> awareness and inculcated a safety culture in all
              staff and contractors of <br /> SR PLATFORMS LIMITED.
            </p>
          </div>
          <div className="safety__policy-text">
            <p>
              Our safety leadership campaigns are based on sound safety values
              and <br />
              rules designed to make people aware of their own responsibilities{" "}
              <br />
              regarding safety.
            </p>
            <p>
              We encourage them to take action if operations appear unsafe and
              to <br />
              approach others if they feel at risk.
            </p>
            <p>
              Health and safety risks differ from project to project and from
              location to <br /> location, so it is essential to have the right
              tools at hand to assess them, <br /> take appropriate measures and
              communicate the solutions to all involved.
            </p>
            <p>
              Our Management Systems set clear standards that emphasize exactly
              what <br /> we expect from our Team with regard to safety, health,
              consideration for <br /> the environment and the quality of what
              we deliver as a team.
            </p>
          </div>
        </article>
        <div className="safety__section">
          <img src={require("../assets/img/safetyimage.png")} alt="safety" />
          <h5>SAFETY FIRST BECAUSE INJURY LASTS!!!.</h5>
        </div>
      </section>

      <section className="indexSeventhSection">
        {gallery.map((item, index) => (
          <div className="gallery__item" key={index}>
            <img src={item.gallery} alt="gallery" />
            <div className="overlay"></div>
          </div>
        ))}
      </section>

      <section className="indexEightSection">
        <h5 className="text-center">A Few of our Clients</h5>
        <div className="clients">
          {clients.map((client, index) => (
            <div key={index}>
              <img src={client.client} alt="client" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default index
