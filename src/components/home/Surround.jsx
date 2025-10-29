import React, { useEffect } from "react";
import community from "../media/images/Gemini_Generated_Image_3nylj3nylj3nylj3.png";
import "./home.css";
import Aos from "aos";

const Surround = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
  }, []);

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div
          className="col-md-6 col-12 d-flex align-items-start justify-content-center flex-column"
          data-aos="fade-up"
        >
          <h1 className="surround-head">
            Surround <br />
            yourself with <br /> the right people
          </h1>

          <div
            className="button-borders mt-5"
            data-aos="fade-up"
            data-aos-delay="200 "
          >
            <button
              className="primary-button"
              onClick={() => navigate("/service")}
            >
              {" "}
              Join our community
            </button>
          </div>
        </div>
        <div
          className="col-md-6 col-12 mt-5 text-center  "
          data-aos="fade-left"
        >
          <img
            src={community}
            alt=""
            style={{
              borderTopLeftRadius: "100px",
              // borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "100px",
            }}
            className="comm-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Surround;
