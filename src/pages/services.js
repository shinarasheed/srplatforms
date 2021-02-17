import React from "react"
import Layout from "../components/layout"

import "../styles/services.scss"
import { offers } from "../data/index"
const services = () => {
  return (
    <Layout>
      <section className="services__banner">
        <h5>DYNAMIC RESOURCEFUL CREW</h5>
        <p>
          Adding value to the upstream sector of oil and <br /> gas and ensuring
          the safe delivery of Petroleum services.
        </p>
      </section>
      <section className="servicesSecondSection">
        <div className="statement">
          <h5>WHAT WE OFFER</h5>
        </div>
        <div className="offers">
          {offers.map((offer, index) => (
            <div key={index}>
              <img src={offer.img} alt="offer" />
            </div>
          ))}
        </div>
      </section>
      <section className="servicesThirdSection">
        <h5>We also undertake other services as follows:</h5>
      </section>
      <section className="servicesFourthSection">
        <article>
          <h5>MILESTONE</h5>
          <div className="milestones">
            <div className="left"></div>
            <div className="right">
              <div>
                <div>
                  <h5>SR TRADER</h5>
                  <p>
                    SR PLATFORMS acquired her first vessel, SR TRADER <br /> a
                    bunkers self-propelled barge in February 2007 for <br />{" "}
                    bunkering operations.
                  </p>
                </div>
                <div>
                  <h5>Marine Assets</h5>
                  <p>
                    We also have several third payment charters of <br />{" "}
                    various marine assets under our operations.
                  </p>
                </div>
                <div>
                  <h5>MT Royal Priesthood</h5>
                  <p>
                    MT ROYAL PRIESTHOOD a 12,450DWT tanker vessel <br /> was
                    procured in November 2007. It was used for <br /> coastal
                    operations.
                  </p>
                </div>
                <div>
                  <h5>MV Mediator</h5>
                  <p>
                    In 2015, SR PLATFORMS took delivery of MV <br /> MEDIATOR, a
                    DAMEN FCS 3307 security vessel <br /> built from keel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default services
