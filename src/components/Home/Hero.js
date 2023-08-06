import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../styles/carousel.scss";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item className="carouselItem">
          <StaticImage
            className="d-block w-100"
            src="../../images/banner3.jpg"
            alt="banner"
            placeholder="none"
            layout="fullWidth"
            height={700}
            width={1350}
          />
          <Carousel.Caption className="carouselCaption">
            <div className="bannerText">
              <div className="bannerImg">
                <StaticImage
                  src="../../images/wheel.png"
                  alt="sailor wheel"
                  placeholder="none"
                />
              </div>

              <div className="securityBannerText">
                <p>Innovative</p>
                <h5>
                  Armed Escort Services in <br /> Nigeria
                </h5>
                <p>
                  SR Platforms Ltd is one of the leading <br /> private security
                  companies providing high <br /> standard and privately
                  contracted <br /> security services.
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StaticImage
            className="d-block w-100"
            src="../../images/banner1.jpg"
            alt="banner"
            placeholder="none"
            layout="fullWidth"
            height={700}
            width={1350}
          />
          <Carousel.Caption>
            <div className="text">
              <h3>SAFETY FIRST</h3>
              <p>
                We conduct a continuous review, <br /> internal audit and
                development of our <br /> SHE-Q policies...
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StaticImage
            className="d-block w-100"
            src="../../images/mediator_ii.jpg"
            alt="banner"
            placeholder="none"
            layout="fullWidth"
            height={700}
            width={1350}
          />
          <Carousel.Caption>
            <div className="text">
              <h3>
                SEASONED <br /> PROFESSIONALS
              </h3>
              <p>
                With Seasoned Customer Ethics, <br /> Customer Control and
                Market Expert
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StaticImage
            className="d-block w-100"
            src="../../images/mediator_iii.jpg"
            alt="banner"
            placeholder="none"
            layout="fullWidth"
            height={700}
            width={1350}
          />
          <Carousel.Caption>
            <div className="text">
              <h3>
                THROUGH <br /> INNOVATIVE IDEAS
              </h3>
              <p>
                We Provide Best in Class <br /> Marine/Offshore Support Services
                for <br /> the Oil and Gas industry
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StaticImage
            className="d-block w-100"
            src="../../images/mediator_iv.jpg"
            alt="banner"
            placeholder="none"
            layout="fullWidth"
            height={700}
            width={1350}
          />
          <Carousel.Caption>
            <div className="text">
              <h3>SAFETY FIRST</h3>
              <p>
                We conduct a continuous review, <br /> internal audit and
                development of our <br /> SHE-Q policies...
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <StaticImage
            className="d-block w-100"
            src="../../images/fcs_4008.jpg"
            alt="banner"
            placeholder="none"
            layout="fullWidth"
            height={700}
            width={1350}
          />
          <Carousel.Caption>
            <div className="text">
              <h3>
                SEASONED <br /> PROFESSIONALS
              </h3>
              <p>
                With Seasoned Customer Ethics, <br /> Customer Control and
                Market Expert
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
