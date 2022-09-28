import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export default class AboutSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    }

    const { vison, mission } = this.props.VisionAndMission

    return (
      <div>
        <Slider {...settings}>
          <div className="aboutSlideText vision" data-aos="fade-up-left">
            <h5
              style={{
                textAlign: "center",
              }}
              className="vision"
            >
              OUR VISION
            </h5>
            <p
              style={{
                padding: "0 3rem",
                lineHeight: "1.8",
                marginBottom: "3rem",
              }}
            >
              {renderRichText(vison)}
            </p>
          </div>
          <div data-aos="fade-up-left" className="aboutSlideText">
            <h5 style={{ textAlign: "center", marginBottom: "2rem" }}>
              OUR MISSION
            </h5>
            <p style={{ padding: "0 3rem", lineHeight: "1.8" }}>
              {renderRichText(mission)}
            </p>
          </div>
        </Slider>
      </div>
    )
  }
}
