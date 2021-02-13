import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"
import Layout from "../components/layout"
import IndexHero from "../components/Home/Hero"
import serviceImg from "../assets/img/circle.jpg"
import { servicesData } from "../data/index"

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
            SR Platforms Ltd is a wholly owned Nigerian Company, <br /> engaged
            in marine and offshore support services.
          </p>
          <p>
            We are the epitome of professionalism in the provision <br /> of
            marine vessel services.
          </p>
          <p>
            SR Platforms will help to add value to the upstream <br /> sector of
            the oil and gas industry in Nigeria <br /> and beyond..
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
          {servicesData.map(service => (
            <div className="service">
              <img src={service.img} alt="service" />
            </div>
          ))}
        </div>
      </section>
      <section className="indexFourthSection">
        <div>
          <h5>NICHE SERVICES</h5>
          <p>
            At SR Platforms, we provide tools for <br /> professional services
            delivery and operational <br /> excellence that ensures our client
            satisfaction <br /> and value for our shareholders.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default index
