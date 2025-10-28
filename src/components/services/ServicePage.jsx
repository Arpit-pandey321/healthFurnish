import React, { useEffect } from "react";
import "./service.css";
import heart from "../media/images/Gemini_Generated_Image_25bysc25bysc25by-removebg-preview.png";
import Aos from "aos";
import "aos/dist/aos.css";

import service1 from "../media/images/service1.webp";
import service2 from "../media/images/service2.webp";
import service3 from "../media/images/service3.webp";
import service4 from "../media/images/service4.webp";
import service5 from "../media/images/service5.webp";
import service6 from "../media/images/service2.webp";

const ServicePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className=" container-fluid service-intro d-flex align-items-center justify-content-center">
        <h1 className="">Services</h1>
      </div>
      <div className="container " style={{ overflow: "hidden" }}>
        <div className="row " style={{ marginTop: "200px" }}>
          <div
            className="col-lg-4 col-12 text-center p-1 service position-relative d-flex align-items-center justify-content-center flex-column"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="imgs">
              <img
                src={service1}
                alt=""
                // height={"300px"}
                style={{ zIndex: "1" }}
              />
            </div>
            <div className="text-center service-content rounded-4">
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                Fitness & Nutrition
              </h4>
              <p className="mt-2 fs-5" style={{ fontFamily: "initial" }}>
                Unlock your dream body with the right diet, workouts & hard work
              </p>
              <button className="buttons"> Click here</button>
            </div>
          </div>
          <div
            className="col-lg-4 col-12 text-center p-1 service position-relative d-flex align-items-center justify-content-center flex-column card-green"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="imgs">
              <img
                src={service2}
                alt=""
                // height={"300px"}
                style={{ zIndex: "1" }}
              />
            </div>
            <div
              className="text-center service-content rounded-4"
              style={{
                background: "linear-gradient(to bottom, pink, white 50%)",
              }}
            >
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                Online Personal Training
              </h4>
              <p className="mt-2 fs-5" style={{ fontFamily: "initial" }}>
                1-on-1 online sessions for Yoga, Zumba & more!
              </p>
              <button className="buttons"> Click here</button>
            </div>
          </div>

          <div
            className="col-lg-4 col-12 text-center p-1 service position-relative d-flex align-items-center justify-content-center flex-column"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <div className="imgs">
              <img
                src={service5}
                alt=""
                // height={"300px"}
                style={{ zIndex: "1" }}
              />
            </div>
            <div
              className="text-center service-content rounded-4"
              style={{
                background: "linear-gradient(to bottom, lightBlue, white 60%)",
              }}
            >
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                Diabetes Management
              </h4>
              <p className="mt-2 fs-5" style={{ fontFamily: "initial" }}>
                Manage diabetes & explore reversal under qualified & experienced
                coaches
              </p>
              <button className="buttons"> Click here</button>
            </div>
          </div>
        </div>
        <div className="row " style={{ marginTop: "100px" }}>
          <div
            className="col-lg-4 col-12 text-center p-1 service position-relative d-flex align-items-center justify-content-center flex-column card-green"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="imgs">
              <img
                src={service4}
                alt=""
                // height={"300px"}
                style={{ zIndex: "1" }}
              />
            </div>
            <div
              className="text-center service-content rounded-4"
              style={{
                background: "linear-gradient(to bottom, pink, white 50%)",
              }}
            >
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                Fit kids
              </h4>
              <p className="mt-2 fs-5" style={{ fontFamily: "initial" }}>
                Gift your kids a healthier, happier and strong future
              </p>
              <button className="buttons"> Click here</button>
            </div>
          </div>
          <div
            className="col-lg-4 col-12 text-center p-1 service position-relative d-flex align-items-center justify-content-center flex-column"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="imgs">
              <img
                src={heart}
                alt=""
                // height={"300px"}
                style={{ zIndex: "1" }}
              />
            </div>
            <div className="text-center service-content rounded-4">
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                Heart Management
              </h4>
              <p className="mt-2 fs-5" style={{ fontFamily: "initial" }}>
                Upgrade your heart's potential with the right love and care.
              </p>
              <button className="buttons"> Click here</button>
            </div>
          </div>

          <div
            className="col-lg-4 col-12 text-center p-1 service position-relative d-flex align-items-center justify-content-center flex-column"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <div className="imgs">
              <img
                src={service3}
                alt=""
                // height={"300px"}
                style={{ zIndex: "1" }}
              />
            </div>
            <div
              className="text-center service-content rounded-4"
              style={{
                background: "linear-gradient(to bottom, lightBlue, white 60%)",
              }}
            >
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                Injury Rehabilitation
              </h4>
              <p className="mt-2 fs-5" style={{ fontFamily: "initial" }}>
                Bid pain goodbye with our expert physiotherapists
              </p>
              <button className="buttons"> Click here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
