import React, { useEffect } from "react"
import { Link } from "gatsby"

import SeoComponent from "../components/seo"
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
  clients,
  gallery,
  gallery_new,
} from "../data/index"
import SafetyImage from "../assets/img/safetyimage.png"

const Hse = () => {
  useEffect(() => {
    const anchor = document.querySelector("#safety")
    anchor.scrollIntoView({ behavior: "smooth", block: "center" })
  })
  return (
    <Layout>
      <SeoComponent
        title="HSE"
        description="Efficiency Through Service Delivery"
      />
      <IndexHero />
      <section className="indexSecondSection">
        <article>
          <h5>
            Efficiency Through <br /> Service Delivery
          </h5>
          <p data-aos="fade-up">
            SR Platforms Ltd is a wholly owned Nigerian Company, engaged in
            marine and offshore support services.
          </p>
          <p data-aos="fade-up">
            We are the epitome of professionalism in the provision of marine
            vessel services.
          </p>
          <p data-aos="fade-up">
            SR Platforms helps to add value to the upstream sector of the oil
            and gas industry in Nigeria and beyond..
          </p>

          <Link to="/about">Read More</Link>
        </article>
        <article>
          <img src={serviceImg} alt="service" />
        </article>
      </section>
      <section className="indexThirdSection">
        <div className="title">
          <h5 data-aos="fade-down">
            Foremost Indigenous Company with Expertise in Marine/Offshore
            Support Services to the oil & Gas Industry Using Innovative service
            Delivery
          </h5>
        </div>
        <div className="servicesImages">
          {servicesData.map((service, index) => (
            <div key={index} className="service">
              <img src={service.img} alt="service" />
              <div className="serviceText">
                <p>{service.text}</p>
              </div>
            </div>
          ))}
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
              data-aos-duration="2000"
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
                data-aos-delay="1000"
                data-aos-duration="2000"
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
                data-aos-delay="1000"
                data-aos-duration="2000"
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
          <CerticateSlide slides={certification} />
        </div>
      </section>

      <section id="safety" className="indexSixthSection">
        <div data-aos="fade-down-left">
          <h4 className="text-center">SAFETY</h4>
          <h5 className="text-center"> Our SHE-Q Policy</h5>
        </div>
        <article data-aos="fade-down-left" className="safety__policy">
          <div className="safety__policy-text">
            <p>
              Our Safety, Health, Environment and Quality (SHE-Q) culture aims
              for an incident-free working environment because safety management
              is a priority to us.
            </p>
            <p>
              We conduct a continuous review, internal audit and development of
              our SHE-Q policies and procedures to ensure that the highest
              standards are met at all times.
            </p>
            <p>
              We have implemented several in-house safety policies in line with
              our Safety Management Systems which includes; our safety policy,
              security policy, alcohol and drug policy to mention a few.
            </p>
            <p>
              Our seasoned in-house safety officers/managers have increased the
              safety awareness and inculcated a safety culture in all staff and
              contractors of SR PLATFORMS LIMITED.
            </p>
          </div>
          <div className="safety__policy-text">
            <p>
              Our safety leadership campaigns are based on sound safety values
              and rules designed to make people aware of their own
              responsibilities regarding safety.
            </p>
            <p>
              We encourage them to take action if operations appear unsafe and
              to approach others if they feel at risk.
            </p>
            <p>
              Health and safety risks differ from project to project and from
              location to location, so it is essential to have the right tools
              at hand to assess them, take appropriate measures and communicate
              the solutions to all involved.
            </p>
            <p>
              Our Management Systems set clear standards that emphasize exactly
              what we expect from our Team with regard to safety, health,
              consideration for the environment and the quality of what we
              deliver as a team.
            </p>
          </div>
        </article>
        <div data-aos="fade-down-left" className="safety__section">
          <img src={SafetyImage} alt="safety" />
          <h5 data-aos="fade-down-left">
            SAFETY FIRST BECAUSE INJURY LASTS!!!.
          </h5>
        </div>
      </section>

      <section data-aos="fade-down-left" className="indexSeventhSection">
        {gallery.map((item, index) => (
          <div className="gallery__item" key={index}>
            <img src={item.gallery} alt="gallery" />
            <div className="overlay"></div>
          </div>
        ))}
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

export default Hse
