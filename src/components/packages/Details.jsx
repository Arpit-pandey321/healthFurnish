import React, { useEffect, useState } from "react";
import "./package.css";
import fat from "../media/images/7-days.jpg";
import fit from "../media/images/30-days.jpg";
import slim from "../media/images/90-days.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";

const Details = () => {
  const [show, setShow] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ title: "", price: "" });
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
  }, []);

  const handleShow = (title, price) => {
    setSelectedPlan({ title, price });
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setFormData({ name: "", email: "", mobile: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_mobile: formData.mobile,
      package_title: selectedPlan.title,
      package_amount: selectedPlan.price,
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID_PACKAGE;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PACKAGE;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_PACKAGE;

    if (!serviceID || !templateID || !publicKey) {
      alert(
        "EmailJS environment variables are missing! Check your .env file and restart the dev server."
      );
      return;
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log(
          "Email sent successfully ✅",
          response.status,
          response.text
        );
        alert(
          `Thank you ${formData.name}! We’ll contact you soon about your ${selectedPlan.title} (${selectedPlan.price}) plan.`
        );
        handleClose();
      },
      (error) => {
        console.error("Email sending failed ❌", error);
        alert(
          "Oops! Something went wrong. Please check the console for details."
        );
      }
    );
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5 d-flex align-align-items-stretch justify-content-evenly">
          {/* 7 Days */}
          <div
            className="col-md-3 col-12 package-content text-center d-flex flex-column"
            data-aos="fade-up"
          >
            <h3 className="mb-3 mt-5">7 days challenge</h3>
            <div className="package-img">
              <img src={fat} alt="" />
              <span
                onClick={() => handleShow("7 Days Challenge", "1500 Rs")}
                style={{ cursor: "pointer" }}
              >
                1500 rs
              </span>
            </div>
            <div className="package-description">
              <ul
                style={{
                  listStyleType: "circle",
                  color: "grey",
                  textAlign: "start",
                  fontFamily: "serif",
                }}
              >
                <li>This is also known as an DETOX WEEK.</li>
                <li>
                  This trial pack allows you to analyze your own body and what
                  is their actual requirement for normal living.
                </li>
                <li>
                  This planner helps you to shred down the toxic water and
                  elements from your system and help you to make ready for
                  further weight loss regime.
                </li>
              </ul>
              <button
                className="primarys-button"
                onClick={() => handleShow("7 Days Challenge", "1500 Rs")}
              >
                {" "}
                SELECT
              </button>
            </div>
          </div>

          {/* 30 Days */}
          <div
            className="col-md-3 col-12 package-content text-center d-flex flex-column"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="mb-3 mt-5">30 days challenge</h3>
            <div className="package-img">
              <img src={fit} alt="" />
              <span onClick={() => handleShow("30 Days Challenge", "3500 Rs")}>
                3500 rs
              </span>
            </div>
            <div className="package-description">
              <ul
                style={{
                  listStyleType: "circle",
                  color: "grey",
                  textAlign: "start",
                  fontFamily: "serif",
                }}
              >
                <li>
                  This package is suitable for a beginner who wants to lose
                  around 3-4 kg in a month.
                </li>
                <li>
                  The Diet plan is prepared after proper consultation with the
                  client about their Lifestyle, eating habits, eating patterns
                  and all other relevant weight-affecting factors.
                </li>
                <li>
                  This package is suitable for Healthy weight loss with proper
                  routine diet.
                </li>
              </ul>
              <button
                className="primarys-button"
                onClick={() => handleShow("30 Days Challenge", "3500 Rs")}
              >
                {" "}
                SELECT
              </button>
            </div>
          </div>

          {/* 90 Days */}
          <div
            className="col-md-3 col-12 package-content text-center d-flex flex-column"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <h3 className="mb-3 mt-5">90 days challenge</h3>
            <div className="package-img">
              <img src={slim} alt="" />
              <span
                onClick={() => handleShow("90 Days Challenge", "8500 Rs")}
                style={{ cursor: "pointer" }}
              >
                8500 rs
              </span>
            </div>
            <div className="package-description">
              <ul
                style={{
                  listStyleType: "circle",
                  color: "grey",
                  textAlign: "start",
                  fontFamily: "serif",
                }}
              >
                <li>
                  This package is appropriate who have a target of losing 8-10
                  kgs for overall transformation.
                </li>
                <li>
                  This is beneficial for clients who want to lose weight
                  naturally and healthily with given substitutes and
                  alternatives for healthy food.
                </li>
                <li>
                  Interesting recipes for Nutritional absorbance and effective
                  results will be given to the client.
                </li>
              </ul>
              <button
                className="primarys-button"
                onClick={() => handleShow("90 Days Challenge", "8500 Rs")}
              >
                {" "}
                SELECT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plain Bootstrap Modal */}
      {show && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div
                className="modal-header text-white"
                style={{ background: "#0a4d3c" }}
              >
                <h5 className="modal-title" style={{ fontFamily: "serif" }}>
                  {selectedPlan.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleClose}
                ></button>
              </div>

              <div className="modal-body p-4 modern-form">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="fw-semibold text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="form-control input-modern"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="fw-semibold text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="form-control input-modern"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="fw-semibold text-white">Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      required
                      className="form-control input-modern"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="fw-semibold text-white">Amount</label>
                    <input
                      type="text"
                      value={selectedPlan.price}
                      readOnly
                      className="form-control input-modern"
                      style={{ backgroundColor: "#f1f1f1" }}
                    />
                  </div>

                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-light me-2"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        background: "linear-gradient(135deg, #00b09b, #96c93d)",
                        border: "none",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
