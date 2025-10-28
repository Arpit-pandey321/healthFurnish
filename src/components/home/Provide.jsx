import Aos from "aos";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import leaf from "../media/images/leaf.png";
import "aos/dist/aos.css";


const Provide = () => {
  useEffect(() => {
    Aos.init({
      duration:"1000"
    });
  }, []);
  let navigate = useNavigate();
  return (
    <div className="container-fluid bg-body-tertiary contents">
      <div className="container mt-5">
        <h1
          className="text-center p-2 mt-3"
          style={{ fontFamily: "initial", fontSize: "50px", fontWeight: "600" }}
          data-aos="fade-right"
        >
          Right plan for your health
        </h1>
        <div className="row d-flex align-items-center justify-content-center gap-1 mb-0 mt-5">
          <div
            className="col-md-5 col-12 shadow provide-para position-relative "
            data-aos="flip-right"
            style={{ overflow: "hidden", borderBottomRightRadius: "0px" }}
          >
            <img
              src={leaf}
              alt=""
              style={{
                position: "absolute",
                bottom: "-100px",
                right: "-255px",
                zIndex: "-1",
                transform: "rotate(-3deg)",
              }}
            />
            <h4 className="">Fitness and Nutrition Coaching ⭐</h4>
            <ul className="list-unstyled">
              <li>
                <span style={{ marginRight: "5px" }}>✔️</span>{" "}
                <span>Internationally certified coaches</span>
              </li>
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>
                  Personalised diet and workout plans suited for your lifestyle,
                  goals, medical conditions and food preferences
                </span>
              </li>
              <li className="d-flex">
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>
                  Weekly monitoring with coach to understand your progress
                </span>
              </li>
              <li className="d-flex">
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>Regular plan update as per your progress and needs.</span>
              </li>

              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>
                  Continuous support - Coach is just a phone call or message
                  away
                </span>
              </li>
            </ul>
          </div>
          <div
            className="col-md-5 col-12 shadow provide-para position-relative"
            data-aos="flip-right"
            data-aos-delay="500"
            style={{ overflow: "hidden", borderBottomLeftRadius: "0px" }}
            // style={{
            //   background: "linear-gradient(to bottom, lightBlue, white 60%)",
            // }}
          >
            <img
              src={leaf}
              alt=""
              style={{
                position: "absolute",
                bottom: "-100px",
                left: "-245px",
                zIndex: "-1",
                transform: "rotate(-3deg)",
              }}
            />
            <h4>Online Personal Training 💻</h4>
            <ul className="list-unstyled">
              <li>✔️ Online 1-on-1 personal workout training</li>
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>Certified and experienced professionals</span>
              </li>
              <li>✔️ Complete workout guidance & customised plans</li>
              <li>✔️ Live personal training for your schedule and lifestyle</li>
            </ul>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center gap-1 mb-5 mt-1 ">
          <div
            className="col-md-5 col-12 shadow provide-para position-relative"
            data-aos="flip-right"
            style={{ overflow: "hidden", borderTopRightRadius: "0px" }}

            // style={{ background: "linear-gradient(to bottom, lightGreen, white 60%)" }}
          >
            <img
              src={leaf}
              alt=""
              style={{
                position: "absolute",
                top: "-150px",
                right: "-245px",
                zIndex: "-1",
                transform: "rotate(180deg)",
              }}
            />
            <h4 className="">Injury Rehabilitation</h4>
            <ul className="list-unstyled">
              <li>
                <span style={{ marginRight: "5px" }}>✔️</span>{" "}
                <span>Online 1-on-1 personal training recovery program</span>
              </li>
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>Qualified and certified physiotherapists</span>
              </li>
              <li className="d-flex">
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>Complete recovery program from pain to relief</span>
              </li>
              <li className="d-flex">
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>5 sessions a week. 45 minutes each.</span>
              </li>
            </ul>
          </div>
          <div
            className="col-md-5 col-12 shadow provide-para position-relative"
            data-aos="flip-right"
            data-aos-delay="500"
            style={{ overflow: "hidden", borderTopLeftRadius: "0px" }}
            // style={{ background: "linear-gradient(to bottom, pink, white 60%)" }}
          >
            <img
              src={leaf}
              alt=""
              style={{
                position: "absolute",
                top: "-150px",
                left: "-255px",
                zIndex: "-1",
                transform: "rotate(180deg)",
              }}
            />
            <h4>FIT Kids</h4>
            <ul className="list-unstyled">
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>Online 1-on-1 personal training sessions</span>
              </li>
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>
                  Certified professionals specialising in fitness for kids
                </span>
              </li>
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>
                  Fitness and nutrition activities made interesting for kids
                </span>
              </li>
              <li className="text" style={{ display: "flex" }}>
                <span style={{ marginRight: "5px" }}>✔️</span>
                <span>
                  Live personal training for your schedule and lifestyle
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h3
            className="mt-4 mb-2"
            style={{ fontFamily: "serif" }}
            data-aos="fade-up"
          >
            Still have a questions?
          </h3>
          <p data-aos="fade-up" data-aos-delay="200">
            Please help us understand your doubts and we’ll get back to you
          </p>
          <div
            className="button-borders mt-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button
              className="primary-button"
              onClick={() => navigate("/contact")}
            >
              {" "}
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
