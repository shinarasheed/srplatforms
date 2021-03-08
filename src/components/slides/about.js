import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class AboutSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    }
    return (
      <div>
        <Slider {...settings}>
          <div data-aos="fade-up-left" style={{ color: "white" }}>
            <h5 style={{ textAlign: "center", marginBottom: "2rem" }}>
              OUR MISSION
            </h5>
            <p
              style={{
                padding: "0 3rem",
                lineHeight: "1.8",
                marginBottom: "3rem",
              }}
            >
              To be the leading provider of World <br /> Class Marine/Offshore
              Support <br /> Services to the Oil and Gas Industry <br /> through
              innovative ideas
            </p>
            <p style={{ padding: "0 3rem", lineHeight: "1.8" }}>
              Quality services, optimum <br /> utilization of resources with the{" "}
              <br /> highest standards of business <br /> ethics, loyalty to the
              law, <br /> corporate governance and <br /> Industry best pratices
            </p>
          </div>
          <div data-aos="fade-up-left" style={{ color: "white" }}>
            <h5 style={{ textAlign: "center", marginBottom: "2rem" }}>
              OUR MISSION
            </h5>
            <p style={{ padding: "0 3rem", lineHeight: "1.8" }}>
              Our mission is to provide work tools for professional service
              delivery and operational excellence that ensures our client
              satisfaction and value for our shareholders.
            </p>
          </div>
        </Slider>
      </div>
    )
  }
}
