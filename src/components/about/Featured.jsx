import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import media from "../media/images/medianews-4u.webp";
import money from "../media/images/money-control.webp";
import abp from "../media/images/abp-news.webp";
import news from "../media/images/news-18-hindi.webp";
import indian from "../media/images/indian-retailer.webp";
import world from "../media/images/bwdisrupt-businessworld@2x.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
  }, []);

  return (
    <div
      className="container feature text-center"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <h1>We're featured in</h1>
      <Marquee speed={80} className="mt-5" gradient>
        <div className="ms-3 me-3">
          <img src={abp} alt="" />
        </div>
        <div className="ms-3 me-3">
          <img src={media} alt="" />
        </div>
        <div className="ms-3 me-3">
          <img src={money} alt="" />
        </div>
        <div className="ms-3 me-3">
          <img src={news} alt="" />
        </div>
        <div className="ms-3 me-3">
          <img src={indian} alt="" />
        </div>
        <div className="ms-3 me-3">
          <img src={world} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Featured;
