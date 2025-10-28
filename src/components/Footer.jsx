import React, { useState } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import shape9 from "./media/images/shape-9 (1).png";
import shape10 from "./media/images/shape-9.png";
import emailjs from "emailjs-com";

const Footer = () => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("❌ Please enter your email.");
      return;
    }

    setSending(true);
    setMessage("");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_email: email, // must match your EmailJS template variable {{user_email}}
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setMessage("✅ Subscribed successfully! Check your inbox.");
        setEmail("");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setMessage("❌ Failed to send. Please try again later.");
      })
      .finally(() => setSending(false));
  };

  return (
    <div
      className="container-fluid foot-container position-relative p-1"
      style={{ overflow: "hidden" }}
    >
      <img src={shape9} alt="" className="foot-leaf" />
      <img src={shape10} alt="" className="foot-leafs" />

      <div className="container" style={{ zIndex: "1" }}>
        <div className="row d-flex align-items-center justify-content-center">
          {/* ===== Subscribe Section ===== */}
          <div className="col-12 col-md-4 mt-5">
            <h3 style={{ fontFamily: "cursive", color: "orange" }}>Subscribe us</h3>
            <div className="mt-4 d-flex align-items-start justify-content-center flex-column gap-3">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="user_email"
                  className="foot-input mb-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <button
                  className="cssbuttons-io-button"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Subscribe"}
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </form>
              {message && <p style={{ color: "white" }}>{message}</p>}
            </div>
          </div>

          {/* ===== Help Links ===== */}
          <div className="col-12 col-md-4 d-flex align-items-start justify-content-center flex-column mt-5">
            <h3 className="mb-4" style={{ fontFamily: "cursive", color: "orange" }}>
              Help links
            </h3>
            <ul className="d-flex align-items-start justify-content-center flex-column p-0 gap-3 list-unstyled">
              <li>
                <NavLink to={"/blog"} className="foot-links">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="foot-links">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/privacy"} className="foot-links">
                  Privacy policy
                </NavLink>
              </li>
              <li>
                <NavLink to={"/refund"} className="foot-links">
                  Refund
                </NavLink>
              </li>
              <li>
                <NavLink to={"/questions"} className="foot-links">
                  Course FAQ's
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ===== Hours + Location ===== */}
          <div className="col-12 col-md-4 mt-5">
            <h3 style={{ color: "orange", fontFamily: "cursive" }}>Opening Hours</h3>
            <ul className="mt-4 d-flex align-items-start justify-content-center flex-column gap-3 p-0">
              <li className="foot-links">Mon-Fri: 9 AM – 6 PM</li>
              <li className="foot-links">Saturday: 9 AM – 4 PM</li>
              <li className="foot-links">Sunday: Closed</li>
            </ul>
            <div>
              <h3
                className="mt-5"
                style={{ color: "orange", fontFamily: "cursive" }}
              >
                Location
              </h3>
              <p className="foot-links">Mumbai, Maharashtra.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="row text-center d-flex align-items-center justify-content-center mt-5">
        <p
          className="text-light m-0 p-3 fs-5"
          style={{ background: "#094435", width: "100vw" }}
        >
          © 2025{" "}
          <span className="ps-2 pe-2" style={{ color: "orange" }}>
            HealthFurnish
          </span>{" "}
          Made by{" "}
          <span className="heart" style={{ color: "orange", display: "inline-block" }}>
            🧡
          </span>{" "}
          OS Infotech
        </p>
      </div>
    </div>
  );
};

export default Footer;