import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import community_img from "../media/images/fittr_community_judgement_free_c2ff664eb3.webp";

const Result = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
  }, []);

  return (
    <div className="container position-relative">
      <h1 className="results" data-aos="fade-right">
        A judgement-free <br />
        space for everyone
      </h1>
      <img
        src={community_img}
        alt=""
        style={{ zIndex: "0", width: "100%" }}
        data-aos="fade-left"
      />
    </div>
  );
};

export default Result;
