import React, { useEffect } from "react";
import "./home.css";
import leaf from "../media/images/shape-1.png";
import Aos from "aos";
import model from "../media/images/simple-miranda-kerr-female-model-full-body-034d9ihwlyiu4nn0.jpg";
import nutri from "../media/images/1000_F_139360694_rIjQLWtrrD7l7qc0LLLd4OI5cUG9nqlV-removebg-preview.png";

const HomeSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
  }, []);

  return (
    <div className="container ">
      <div className="row mt-5">
        <div
          className="col-12 col-md-5 d-flex align-items-center justify-content-center mt-5 p-2 position-relative"
          data-aos="fade-right"
        >
          <img
            src={model}
            alt=""
            className="instructor"
            style={{ borderEndEndRadius: "100px" }}
          />
          <div className="rotate-img">
            <img src={nutri} alt="" />
          </div>
        </div>
        <div
          className="col-12 col-md-7 position-relative mt-5  section-data bg-body-tertiary mw-100"
          data-aos="fade-left"
        >
          <div
            className="section-img"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <img src={leaf} alt="" />
          </div>
          <h6 className="hero-headTop p-2 mb-3" data-aos="fade-up">
            12+ years of experience
          </h6>
          <h1
            className="hero-headBigs p-2 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Meet the expert <br />
            instructor
          </h1>
          <p className="text-muted" data-aos="fade-up" data-aos-delay="400">
            Ankita is a Mumbai-based diet & active lifestyle counselor and an
            independent food consultant who strives to take the confusion out of
            healthy eating & provides dietary solutions over medical conditions.
            Having closely worked as a dietitian / Sports & Clinical
            nutritionist with hospitals like Saifee, Fortis & Corporates like
            Aditya Birla Group, SODEXO, HDFC Head Quarter, and ICICI Venture,
            she believes in a philosophy that diets, just like clothes, should
            be tailor-made because every individual is different and there is no
            one-size-fits-all here.
          </p>
          <p className="text-muted " data-aos="fade-up" data-aos-delay="600">
            As a Health & Fitness consultant and freelancer corporate trainer,
            Ankita is a certified Wellness coach as well as a Yoga Trainer. Her
            mission is to inculcate healthy lifestyle habits among people to
            enable them to be the best version of themselves. She works with
            individuals, groups & families to cater their special needs, goals,
            or health conditions & helping them lead a healthy life, free of
            worry and illness. With her, there is always something for everyone.
            Therefore, it doesn’t matter who you are, where you live, or what
            you do, she can pave the way for a healthier and happier you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
