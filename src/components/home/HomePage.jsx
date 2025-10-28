import React from "react";
import HomeHero from "./HomeHero";
import HomeSection from "./HomeSection";
import Client from "./Client";
import Result from "./Result";
import Provide from "./Provide";
import Surround from "./Surround";
import Program from "./Program";

const HomePage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HomeHero />
      <HomeSection />
      <Result />
      <Provide/>
      <Client />
      <Program/>  
      <Surround/>
     </div>
  );
};

export default HomePage;
