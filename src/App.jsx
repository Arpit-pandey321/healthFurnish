import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import ServicePage from "./components/services/ServicePage";
import PackagesPage from "./components/packages/PackagesPage";
import Blog from "./components/blogs/Blog";
import Privacy from "./components/privacy/Privacy";
import Refund from "./components/refund/Refund";
import Questions from "./components/questions/Questions";
import Preloader from "./components/Preloader";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import PageNotFound from "./components/page/PageNotFound";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);

        const script = document.createElement("script");
        script.src = "//code.jivosite.com/widget/86D1xtBAcy";
        script.async = true;
        document.body.appendChild(script);
      }, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader fadeOut={fadeOut} />
      ) : (
        <div className={`app-content ${fadeOut ? "fade-in" : ""}`}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/package" element={<PackagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
