import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

import group from "../media/images/group.png";

const AboutIntro = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
  }, []);

  return (
    <div>
      <div className=" container-fluid about-intro d-flex align-items-center justify-content-center">
        <h1 className="">About us</h1>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 p-2 col-12 d-flex align-items-end justify-content-center gap-3 mb-5">
            <img
              src={group}
              alt=""
              className="imgOne"
              data-aos="zoom-out"
              data-aos-duration="1000"
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg"
              alt=""
              className="imgTwo"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
          </div>
          <div
            className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center who-content mb-5"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h1>Who we are</h1>
            <p className="">
              We’re a bunch of regular people who came together with one
              purpose: to help others discover how amazing life can be when your
              own body is no longer an obstacle but a gift!
            </p>
            <p>
              It all started when we helped friends and family get fit. And
              today, we’re helping people all over the world live their best
              lives.
            </p>
            <p>
              What holds FIT together is a passion for fitness and a desire to
              see people at their best. And we’re just getting started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
