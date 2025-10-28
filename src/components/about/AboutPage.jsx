import React from "react";
import AboutIntro from "./AboutIntro";
import Featured from "./Featured";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Works from "./Works";

const AboutPage = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <AboutIntro />
      <Team/>
      <Featured />
      <Works/>
      <Testimonial/>
    </div>
  );
};

export default AboutPage;
