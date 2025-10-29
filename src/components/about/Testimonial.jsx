import React, { useEffect } from "react";
import "./about.css";
import sanjay from "../media/images/rajan_richa_2432607a34.webp";
import neha from "../media/images/shipa_mehta_9dc5897212.webp";
import siddhesh from "../media/images/dr_anirudh_deepak_3db513af2d.webp";
import Aos from "aos";
import "aos/dist/aos.css";


const Testimonial = () => {
  useEffect(() => {
  
  setTimeout(() => {
    Aos.refresh();
  }, 300);
}, []);

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-around mt-5">
        <h1
          className="text-center mt-5 team-head mb-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Client Testimonial
        </h1>

        <div
          className="col-md-3 col-12 client-one d-flex align-items-center justify-content-center flex-column gap-3"
          data-aos="zoom-out"
        >
          <div>
            <h3>Sanjay & Rekha</h3>
            <p className="text-center">
              As busy doctors with kids, HealthFurnish easy-to-follow plans were
              a blessing!
            </p>
          </div>
          <img src={sanjay} alt="" />
        </div>
        <div
          className="col-md-3 col-12 client-one d-flex align-items-center justify-content-center flex-column gap-3"
          data-aos="zoom-out" data-aos-delay="500"
        >
          <div>
            <h3>Neha shah</h3>
            <p className="text-center text-muted">
              Healthfurnish inspired me to defeat low energy & body pain and get
              shredded!
            </p>
          </div>
          <img src={neha} alt="" />
        </div>
        <div
          className="col-md-3 col-12 client-one d-flex align-items-center justify-content-center flex-column gap-3"
          data-aos="zoom-out" data-aos-delay="1000"
        >
          <div>
            <h3>Dr Siddhesh</h3>
            <p className="text-center text-muted">
              At 194 kg, I felt like a ticking time bomb... but Healthfurnish
              gave me a new life!
            </p>
          </div>
          <img src={siddhesh} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
