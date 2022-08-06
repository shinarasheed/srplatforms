import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export default class CerticateSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 4,
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
          {this.props.slides.map((item, index) => {
            const { title, image } = item
            const certificate = getImage(image)
            return (
              <div className="item" key={index}>
                <GatsbyImage
                  image={certificate}
                  alt={title}
                  style={{ margin: " 0 auto" }}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
