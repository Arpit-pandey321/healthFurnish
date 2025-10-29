import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  let navigate = useNavigate();

  return (
    <Carousel
      controls={false}
      indicators={false}
      pause={false}
      slide={true}
      interval={3000}
    >
      <Carousel.Item>
        <div className="bannerTwo">
          <div className="container">
            <div className="row">
              <div className="col-12 hero-col">
                <h6
                  className="hero-headTop p-2 mb-3"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  FITNESS & NUTRITION
                </h6>
                <h1
                  className="hero-headBig p-2 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  This lifestyle for <br /> your fitness, not <br /> only diet.
                </h1>
                <p
                  className="p-2 hero-para mb-5"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  "It has crossed generations and still leads the way."
                </p>
                <div
                  className="button-borders"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                >
                  <button
                    className="primary-button"
                    onClick={() => navigate("/service")}
                  >
                    {" "}
                    SERVICES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bannerOne">
          <div className="container">
            <div className="row">
              <div className="col-12 hero-col">
                <h6 className="hero-headTop p-2 mb-3" data-aos="fade-up">
                  TRAINING & DIET
                </h6>
                <h1
                  className="hero-headBig p-2 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Fuel your body, <br /> energize your life, <br /> embrace the
                  journey.
                </h1>
                <p
                  className="p-2 hero-para mb-5"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  "It has stood the ages and shaped countless lives."
                </p>
                <div
                  className="button-borders"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <button
                    className="primary-button"
                    onClick={() => navigate("/service")}
                  >
                    {" "}
                    SERVICES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bannerThree">
          <div className="container">
            <div className="row">
              <div className="col-12 hero-col">
                <h6 className="hero-headTop p-2 mb-3" data-aos="fade-up">
                  FIT & STRONG
                </h6>
                <h1
                  className="hero-headBig p-2 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Move better, <br /> eat cleaner, <br /> feel unstoppable.
                </h1>
                <p
                  className="p-2 hero-para mb-5"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  "It has defied time and still sets the standard."
                </p>
                <div
                  className="button-borders"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <button
                    className="primary-button"
                    onClick={() => navigate("/service")}
                  >
                    {" "}
                    SERVICES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeHero;
