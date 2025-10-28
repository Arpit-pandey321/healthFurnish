import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./home.css";
import Aos from "aos";
const Program = () => {
  useEffect(() => {
    Aos.init({
      duration: "1000",
    });
  }, []);
  return (
    <div className="container  pt-3 pb-5">
      <div className="row mt-5 diet">
        <h1 className="text-center" data-aos="fade-right">
          We Offer
        </h1>
        <div className="col-lg-4 col-12 mt-5 text-center p-0 d-flex align-items-center gap-2 justify-content-center flex-column diet">
          <h1 data-aos="fade-right">Diet Program</h1>
          <p className="text-muted" data-aos="fade-right">
            We have an easy clean-eating meal plan for you, featuring healthy
            whole foods straight from your kitchen. Nourish your body with our
            delicious and nutritious recipes, carefully crafted to help you feel
            your best.
          </p>
        </div>
        <div
          className="col-lg-8 col-12 mt-5 text-start p-0 d-flex align-items-start"
          data-aos="fade-left"
        >
          <DotLottieReact
            src="https://lottie.host/3c06eebd-4c14-4ba9-ac80-bf8456776ea1/sW3x20oHD0.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="row mt-5">
        <div
          className="col-lg-8 col-12 mt-5 text-start p-0 d-flex align-items-start"
          data-aos="fade-right"
        >
          <DotLottieReact
            src="https://lottie.host/459bc0ac-1818-49c8-ab8e-ce95d072832a/JLYSUgcmwM.lottie"
            loop
            autoplay
            height={"180px"}
          />
        </div>
        <div className="col-lg-4 col-12 mt-5 text-center p-0 d-flex align-items-center gap-2 justify-content-center flex-column rejuvenate" data-aos="fade-left">
          <h1>Rejuvenate </h1>
          <p className="text-muted">
            Purify, Detox, and Rejuvenate Your Body - specifically the liver,
            colon, and stomach, and Mind. Revitalize your overall well-being
            with our holistic approach, designed to cleanse and nourish your
            body's vital organs and calm your mind.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-12 mt-5 text-center p-0 d-flex align-items-center gap-2 justify-content-center flex-column diet" data-aos="fade-right">
          <h1>Body Assessment</h1>
          <p className="text-muted">
            Complete Body and Nutritional Assessment and Evaluation. To provide
            you with your Health Score. Our comprehensive analysis includes
            advanced body composition analysis and in-depth nutritional
            evaluation, giving you a clear picture of your current health
            status.
          </p>
        </div>
        <div className="col-lg-8 col-12 mt-5 text-start p-0 d-flex align-items-start" data-aos="fade-left">
          <DotLottieReact
            src="https://lottie.host/353fa5bb-8179-4998-a465-f807d4e8f6f6/s2c9JyHFKs.lottie"
            loop
            autoplay
            height={"150px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Program;
