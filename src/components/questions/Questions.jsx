import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState } from "react";
import "./faq.css";
import back from "../media/images/banner-1.jpg"

const Questions = () => {
  let [answer, setAnswer] = useState(true);
  let [answerTwo, setAnswerTwo] = useState(false);
  let [answerThree, setAnswerThree] = useState(false);
  let [answerFour, setAnswerFour] = useState(false);
  let [answerFive, setAnswerFive] = useState(false);

  return (
    <>
      <div
        className=" container-fluid about-intro d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: { back },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
        <h1 className="">Privacy policy</h1>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-6 col-12">
            <div className="questions-para">
              <p
                onClick={() => setAnswer(!answer)}
                className="d-flex align-items-center justify-content-between"
                style={{
                  color: answer ? "orange" : "black",
                  transition: "all 0.5s",
                }}
              >
                Do you offer custom plans?{" "}
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    style={{
                      rotate: answer ? "180deg" : "0deg",
                      transition: "all 0.5s ",
                      color: answer ? "orange" : "black",
                    }}
                  ></i>
                </span>
              </p>

              <div
                style={{
                  maxHeight: answer ? "500px" : "0",
                  overflow: "hidden",
                  transition: "all 1s",
                }}
              >
                <p
                  className="text-muted fs-5"
                  style={{
                    borderTop: "2px solid white",
                    borderRadius: "0px",
                  }}
                >
                  Yes, We offer custom diet plans keeping in mind your metabolic
                  health, fat composition, muscle composition, lifestyle, habit,
                  food preference, and other factors.
                </p>
              </div>
            </div>
            <div className="questions-para">
              <p
                onClick={() => setAnswerTwo(!answerTwo)}
                className="d-flex align-items-center justify-content-between"
                style={{
                  color: answerTwo ? "orange" : "black",
                  transition: "all 0.5s",
                }}
              >
                What phytochemicals inhibit mineral absorption?{" "}
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    style={{
                      rotate: answerTwo ? "180deg" : "0deg",
                      transition: "all 0.5s ",
                      color: answerTwo ? "orange" : "black",
                    }}
                  ></i>
                </span>
              </p>

              <div
                style={{
                  maxHeight: answerTwo ? "500px" : "0",
                  overflow: "hidden",
                  transition: "all 1s",
                }}
              >
                <p
                  className="text-muted fs-5"
                  style={{
                    borderTop: "2px solid white",
                    borderRadius: "0px",
                  }}
                >
                  Oxalic and phytic acid are phytochemicals considered to be
                  anti-nutritional factors as they are predominantly found as
                  oxalates and phytates bound to minerals like calcium and
                  potassium.
                </p>
              </div>
            </div>
            <div className="questions-para">
              <p
                onClick={() => setAnswerThree(!answerThree)}
                className="d-flex align-items-center justify-content-between"
                style={{
                  color: answerThree ? "orange" : "black",
                  transition: "all 0.5s",
                }}
              >
                How much weight loss i can expect in 3 months?{" "}
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    style={{
                      rotate: answerThree ? "180deg" : "0deg",
                      transition: "all 0.5s ",
                      color: answerThree ? "orange" : "black",
                    }}
                  ></i>
                </span>
              </p>

              <div
                style={{
                  maxHeight: answerThree ? "500px" : "0",
                  overflow: "hidden",
                  transition: "all 1s",
                }}
              >
                <p
                  className="text-muted fs-5"
                  style={{
                    borderTop: "2px solid white",
                    borderRadius: "0px",
                  }}
                >
                  Weight loss may differ from individual to individual, but as a
                  thumb rule, I have seen people do lose 10% of their body
                  weight i.e. if you are 100kg person, you can expect 10kg loss
                  in three months.
                </p>
              </div>
            </div>
            <div className="questions-para">
              <p
                onClick={() => setAnswerFour(!answerFour)}
                className="d-flex align-items-center justify-content-between"
                style={{
                  color: answerFour ? "orange" : "black",
                  transition: "all 0.5s",
                }}
              >
                How much water should I drink daily?{" "}
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    style={{
                      rotate: answerFour ? "180deg" : "0deg",
                      transition: "all 0.5s ",
                      color: answerFour ? "orange" : "black",
                    }}
                  ></i>
                </span>
              </p>

              <div
                style={{
                  maxHeight: answerFour ? "500px" : "0",
                  overflow: "hidden",
                  transition: "all 1s",
                }}
              >
                <p
                  className="text-muted fs-5"
                  style={{
                    borderTop: "2px solid white",
                    borderRadius: "0px",
                  }}
                >
                  The amount of water you should drink daily varies depending on
                  your age, sex, weight, and activity level. Generally, aiming
                  for 8-10 glasses of water per day can help support overall
                  health.
                </p>
              </div>
            </div>
            <div className="questions-para">
              <p
                onClick={() => setAnswerFive(!answerFive)}
                className="d-flex align-items-center justify-content-between"
                style={{
                  color: answerFive ? "orange" : "black",
                  transition: "all 0.5s",
                }}
              >
                Can I get enough protein on a vegan diet?{" "}
                <span>
                  <i
                    className="fa-solid fa-angle-down"
                    style={{
                      rotate: answerFive ? "180deg" : "0deg",
                      transition: "all 0.5s ",
                      color: answerFive ? "orange" : "black",
                    }}
                  ></i>
                </span>
              </p>

              <div
                style={{
                  maxHeight: answerFive ? "500px" : "0",
                  overflow: "hidden",
                  transition: "all 1s",
                }}
              >
                <p
                  className="text-muted fs-5"
                  style={{
                    borderTop: "2px solid white",
                    borderRadius: "0px",
                  }}
                >
                  Yes, it's possible to get enough protein on a vegan diet by
                  including plant-based sources like legumes, beans, lentils,
                  tofu, and tempeh.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-12 d-flex align-items-center justify-content-center position-relative"
            style={{ overflow: "hidden" }}
          >
            <DotLottieReact
              src="https://lottie.host/313d2d9c-a68d-4720-8298-b8dcc7ac0a39/grl4xmrooK.lottie"
              loop
              autoplay
              className="lottie"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
