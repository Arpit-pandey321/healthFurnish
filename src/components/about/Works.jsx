import React, { useEffect } from "react";
import "./about.css";
import bowlOne from "../media/images/bowlOne.avif";
import bowlTwo from "../media/images/bowlTwo.avif";
import bowlThree from "../media/images/bowelThree.avif";
import Aos from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
  setTimeout(() => {
    Aos.refresh();
  }, 300);
}, []);

  return (
    <div className="container-fluid work-container">
      <div
        className="row mt-5 d-flex align-items-center justify-content-center position-relative"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div>
          <img
            src="https://framerusercontent.com/images/mjYRRzyrAWOCqloTlkbnVa7s70.png"
            alt=""
            className="first-half"
          />
        </div>
        <div>
          <img
            src="https://framerusercontent.com/images/rsQuDjgS7yKJN3BzXzInPQMg8U.png"
            alt=""
            className="second-half"
          />
        </div>
        <div className="col-10 text-center">
          <div className="mt-5">
            <h1 className="food-head">Why it works</h1>
            <img
              src="https://framerusercontent.com/images/9oxFeuStMFTUkdFNeLY2BDHYUQ.png"
              alt=""
              className="tab mt-5"
            />
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex align-items-center justify-content-center">
        <div
          className="col-md-3 col-12 text-center p-1 d-flex align-items-center justify-content-center flex-column"
          data-aos="zoom-out"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={bowlOne} alt="" className="food1" />

          <p className="mt-2 fs-5 food-paras">
            Nourish your body with wholesome foods and watch it transforms.
          </p>
        </div>
        <div
          className="col-md-3 col-12 text-center p-1 d-flex align-items-center justify-content-center flex-column"
          data-aos="zoom-out"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={bowlTwo} alt="" className="food1" />

          <p className="mt-2 fs-5 food-paras">
            Eat to thrive! Focus on incorporating lean proteins and healthy
            fats.
          </p>
        </div>
        <div
          className="col-md-3 col-12 text-center p-1 d-flex align-items-center justify-content-center flex-column"
          data-aos="zoom-out"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <img src={bowlThree} alt="" className="food1" />

          <p className="mt-2 fs-5 food-paras">
            Ditch the processed foods and focus on whole, nutrient-dense foods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
