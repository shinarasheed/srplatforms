import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import "../styles/security.scss"
import { mainService, stats } from "../data/index"
const security = () => {
  return (
    <Layout>
      <section className="securitybanner">
        <div className="bannerText">
          <p>Innovative</p>
          <h5>
            Armed Escort Services in <br /> Nigeria
          </h5>
          <p>
            SR Platforms Ltd is one of the leading <br /> private security
            companies providing high <br /> standard and privately contracted{" "}
            <br /> security services.
          </p>

          <Link to="/">Learn More</Link>
        </div>
      </section>
      <section className="securityFirstSection">
        <div className="title">
          <h5 className="text-center text-uppercase">What We do</h5>
        </div>
        <div className="body">
          <p>
            SRPlatforms will help to add value to the upstream sector of the{" "}
            <br /> oil and gas industry in Nigeria and beyond through ensuring
            the <br /> safe delivery of petroleum products and services ranging
            from <br /> Completions and Sub-Sea Services to Vessel Chartering
            services
          </p>
        </div>
      </section>

      <section className="securitySecondSection">
        <div className="title">
          <h5 className="text-center text-uppercase">Services</h5>
        </div>
        <div className="body">
          <div className="securityImg">
            <img
              src={require("../assets/img/securityImg.png")}
              alt="security"
            />
          </div>
          <div className="locations">
            <div>
              <h4>Armed Security Escorts for Merchant vessel</h4>
              <h4>
                Provision of Full Round the clock Marine Security Services
              </h4>
              <h4>
                Security Patrol and Surveillance vessels within the following
                regions:
              </h4>
              <ul>
                <li>Lagos</li>
                <li>Wari</li>
                <li>Bony</li>
                <li>Calabar</li>
                <li>Portharcourt</li>
                <li>Brass</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="securityThirdSection">
        <div className="title">
          <h5>
            We offer four main services with full operational transparency:
          </h5>
        </div>
        <div className="services">
          {mainService.map((service, index) => (
            <div className="service" key={index}>
              <img src={service.img} alt={service.text} />
              <div>
                <p className="text">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="securityFourthSection">
        <div className="stats">
          <div>
            {stats.map(stat => (
              <div className="stat">
                <img src={stat.img} alt="statistics" />
                <div>
                  <span>{stat.number}</span>
                </div>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="statsImg">
          <img src={require("../assets/img/statImg.png")} alt="stat" />
        </div>
      </section>
      <section className="securityFifthSection">
        <div className="title">
          <h5>WHY WORK WITH SRTPLATFORMS</h5>
        </div>
        <div className="text">
          <div className="textImg">
            <img src={require("../assets/img/workImg.png")} alt="work" />
          </div>
          <div className="textStatement">
            <div>
              <p>
                SR PLATFORMS LIMITED provides fully-licensed armed escort
                service <br />
                for merchant vessels navigating high risk routes off Nigeria.
              </p>
              <p>
                Our approved partner has signed a Memorandum of Understaing
                (MOU)
                <br />
                with the Nigerian Navy, and we also hold all neccesary approvals
                and <br /> permits from the Nigerian Maritime Security and
                Administrative Agency.{" "}
              </p>
              <p>
                SR PLATFORMS LIMITED has invested heavily in Acquisition of four
                fully <br /> Ballistic security vessels to make the Waterways of
                Nigeria safer.
              </p>
              <p>
                We have well trained crew and with the partnership of the
                Nigerian Navy, <br /> We guarantee safe sailing within the Gulf
                of Guinea.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="securitySixthSection">
        <div className="title">
          <h5>TESTIMONIALS</h5>
        </div>
        <div className="testimonials">
          <div className="testimonialImg">
            <img
              src={require("../assets/img/Group 13.png")}
              alt="testimonial"
            />
          </div>
          <div className="testimonial">
            <div>
              <h6 className="testimonialText">
                “SR Platforms has always been reliable, conscientious and <br />
                competitive in regards other security vessel providers. <br />{" "}
                They have always had the facility to provide vessels at <br />{" "}
                short notice and ensured that security escorts for the river{" "}
                <br /> and offshore operations are carried out in a safe and{" "}
                <br /> secure manner.”
              </h6>
              <p className="name">Steve Corlin</p>
              <h6 className="client">Offshore Security Coordinator, Saipem</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="securitySeventhSection">
        <h5 className="title">Accreditation</h5>
        <div className="accreditation">
          <img
            src={require("../assets/img/accreditation3.png")}
            alt="accrediation"
          />
          <img
            src={require("../assets/img/accreditation2.png")}
            alt="accrediation"
          />
        </div>
        <div className="partnership">
          <h5 className="title">Partnership</h5>
          <img
            src={require("../assets/img/accreditation1.png")}
            alt="accrediation"
          />
        </div>
      </section>
    </Layout>
  )
}

export default security
