import React, { useEffect, useState } from "react";
import "./welcome.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    Aos.init();
  }, []);
  return (
    <>
      <div className=" container-fluid package-intro d-flex align-items-center justify-content-center">
        <h1 className="">Packages</h1>
      </div>

      <section className="image-collage-section">
        <div className="container-fluid">
          <div className="row mt-5" data-aos="fade-right" data-aos-delay="200">
            <div className="col-12">
              <div className={`quote-text ${isVisible ? "visible" : ""}`}>
                <span className="quote-mark">"</span>
                Nourish your
                <img
                  src="https://cdn.pixabay.com/photo/2023/10/11/14/56/waist-8308829_1280.jpg"
                  className="inline-image img-1"
                />
                body with
                <img
                  src="https://cdn.pixabay.com/photo/2025/04/25/03/00/ai-generated-9557233_1280.jpg"
                  className="inline-image img-2"
                />
                balance,
                <img
                  src="https://cdn.pixabay.com/photo/2015/03/28/10/21/diet-695723_1280.jpg"
                  className="inline-image img-3"
                />
                strength
                <img
                  src="https://cdn.pixabay.com/photo/2023/06/22/07/13/soil-8080788_1280.jpg"
                  className="inline-image img-4"
                />
                and vitality.<span className="quote-mark">"</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
