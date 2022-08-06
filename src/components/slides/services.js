import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { otherService } from "../../data/index"

export default class OtherServiceSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          {this.props.otherServices.map((service, index) => {
            const { description, banner } = service
            const image = getImage(banner)
            return (
              <div
                data-aos="fade-right"
                style={{ border: "none" }}
                key={index}
                className="service"
              >
                <GatsbyImage image={image} alt={description} />
                <div style={{ border: "none" }} className="serviceText">
                  <p>{description}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
