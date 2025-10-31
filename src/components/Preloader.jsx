import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../App.css";

const Preloader = ({ fadeOut }) => {
  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <DotLottieReact
          src="https://lottie.host/7c332cd6-79bc-4607-b087-c697fdfab61f/3LkH9r8QbU.lottie"
          autoplay
        />
      </div>
    </div>
  );
};

export default Preloader;
