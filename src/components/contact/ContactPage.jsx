import React, { useEffect, useState } from "react";
import "./contact.css";
import map from "../media/video/pRigwzIg7fTjWZug0DWX.mp4";
import Aos from "aos";
import shape11 from "../media/images/shape-11.png";
import emailjs from "emailjs-com";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [sending, setSending] = useState(false);

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID_PACKAGE;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_PACKAGE;

    // Map formData to template variables
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_address: formData.address,
      user_message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send message. Check console for details.");
      })
      .finally(() => setSending(false));
  };

  useEffect(() => {
    Aos.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <div className=" container-fluid contact-intro d-flex align-items-center justify-content-center">
        <h1 className="">Contact us</h1>
      </div>
      <div className="container">
        <div
          className="row"
          style={{ margin: "100px 0px" }}
          data-aos="fade-right"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.2289699221!2d72.71412525687606!3d19.08280670615086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1761285057328!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0", borderRadius: "50px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row mt-5 d-flex align-items-center justify-content-around ">
          <div
            className="col-lg-6 col-12 d-flex align-items-start justify-content-center flex-column"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="p-0">
              <h2
                style={{
                  fontFamily: "cursive",
                  fontWeight: "500",
                  fontSize: "35px",
                  color: "orange",
                }}
              >
                Don't worry!
              </h2>
              <h1
                style={{
                  fontFamily: "serif",
                  fontWeight: "500",
                  fontSize: "45px",
                }}
              >
                If you have any query? <br />
                Contact us.
              </h1>
            </div>
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="w-100 d-flex align-items-center justify-content-between mt-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className=" mt-3 d-flex align-items-center justify-content-between">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                id="message"
                rows={10}
                className="w-100 mt-3"
                style={{ resize: "none", padding: "10px" }}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                className="contact-button"
                disabled={sending}
              >
                {sending ? "Sending..." : "Submit now"}
              </button>
            </form>
          </div>
          <div
            className="col-lg-6 col-12 contact-section position-relative mt-3 "
            style={{ overflow: "hidden" }}
            data-aos="flip-right"
            data-aos-delay="500"
          >
            <img
              src={shape11}
              alt=""
              style={{
                position: "absolute",
                top: "-130px",
                right: "-220px",
                zIndex: "-1",
              }}
            />
            <div>
              <h1>Phone:</h1>
              <span>
                <a href="tel:+91 7021093139" className="anchors">
                  +91 7021093139
                </a>
              </span>
            </div>
            <div>
              <h1>Email:</h1>
              <span>
                <a href="https://gmail.com" className="anchors">
                  healthFurnish@gmail.com
                </a>
              </span>
            </div>
            <div>
              <h1>Address:</h1>
              <span>
                <a
                  href="https://maps.app.goo.gl/VSsmS4j7xDepqyx18"
                  className="anchors"
                >
                  Mumbai , Maharashtra
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="row mt-5 text-center mb-5"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1
            style={{ fontFamily: "serif", fontWeight: "600", fontSize: "50px" }}
          >
            Our Reach
          </h1>
          <div className="mt-4">
            <video
              autoPlay
              loop
              playsInline
              muted
              width={"100%"}
              height={"500px"}
            >
              <source src={map} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
