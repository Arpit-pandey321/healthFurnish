import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <div className="container-fluid blog-intro d-flex align-items-center justify-content-center">
        <h1 className="">Blogs</h1>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-9 col-12">
            <div className="text-start mt-5">
              <img
                src="https://cdn.pixabay.com/photo/2016/02/20/21/41/vegetables-1212845_1280.jpg"
                height={"50%"}
                width={"100%"}
                alt=""
                style={{
                  borderEndEndRadius: "100px",
                  borderStartStartRadius: "100px",
                  marginBottom: "10px",
                }}
              />
              <h5>
              By : Ankita Rane

              </h5>
            </div>
            <div className="text-start mt-5">
              <h3>THE MOST COMMONLY MISTAKES FOLLOWED DURING WEIGHT LOSS!!!</h3>
              <p className="p-5 ps-0 pt-2 text-muted">
                Most people know Good Nutrition and Physical Activity can help
                in weight loss regime. But most commonly without proper guidance
                and lack of knowledge we fail to achieve our desirable results.
                We must understand the first basic rule of any program is every
                individual body is different and every individual body
                requirement is different. When you are trying to lose some extra
                pounds, we focus more on bigger changes and ignores the small
                facts but very little changes in your daily routine can make a
                big difference.
              </p>
            </div>
            <div className="text-start mt-1">
              <h3>
                Here let’s focus on small mistakes we tend to do during weight
                loss
              </h3>
              <p className="p-5 ps-0 pt-2 pb-2 text-muted">
                When it comes to weight loss often first thing clicks in mind is
                reducing food intake. But unfortunately reducing food intake is
                always considered as skipping meals for losing weight faster.
                One must never skip meals on very first place when it comes to
                weight loss specially BREAKFAST. The name itself says its all
                about “Breaking the Fast”. After the last meal of previous day
                (Dinner) we have a lot of gap between our next day meal
                (Breakfast). As this long gap has its own scientific mechanism
                and reasons to perform like maintaining the organ functions and
                repairment of tissues and body functions when our body is
                asleep. Hence the BREAKFAST is very important meal to start your
                day with for nourishing the requirement of body after the long
                functional work and further daily requirement of nutrients.
              </p>
              <p className="p-5 ps-0 pt-2 pb-2 text-muted">
                Today everything is available on just one click “INTERNET” where
                you can find an easiest, quickest and simplest answer to our
                question. But what we forget while searching on internet is that
                “WE ARE NOT JUST THE ONE” who is asking but It is “JUST THE ONE”
                answering the same to all of us. Hence, we must.
              </p>
              <p className="p-5 ps-0 pt-2 pb-2 text-muted">
                Every Diet which is advised by the Dietician has specific reason
                and requirements according to the person and that is why it is
                always customised as per the condition to treat and result to
                obtain. There are varieties of Diet Plans available for Weight
                loss, Weight Gain, Muscle Gain, Fat loss like Keto Diet,
                Intermediate Diet, Low card Diet, 0 carb Diet and many more.
                Without knowing the actual function of Diet prescription, it is
                not advisable to follow any diet routine blindly.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="https://cdn.pixabay.com/photo/2022/11/07/03/48/marathon-7575526_1280.jpg"
                alt=""
                width={"49%"}
              />
              <img
                src="https://cdn.pixabay.com/photo/2025/04/15/12/19/woman-9535287_1280.jpg"
                alt=""
                width={"49%"}
              />
            </div>
          </div>
          <div className="col-md-3 col-12 text-center mt-5 text-center">
            <h2 style={{ fontFamily: "serif", color: "green" }}>
              Connect with us
            </h2>
            <div className="d-flex align-items-center justify-content-evenly connect-logo mt-3">
              <span>
                <i class="fa-brands fa-facebook-f"></i>
              </span>
              <span>
                <i class="fa-brands fa-instagram"></i>
              </span>
              <span>
                <i class="fa-brands fa-whatsapp"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
