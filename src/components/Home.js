import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Footer from "./FooterPage";
import newHeroImage from "./img/hero-replacement.png"; // Ensure the path is correct
import about1 from "./img/about-1.jpg";
import about2 from "./img/about-2.jpg";
import about3 from "./img/about-3.jpg";
import about4 from "./img/about-4.jpg";

const Home = () => {
  const aboutImages = [about1, about2, about3, about4];

  return (
    <div className="container-xxl bg-white p-0">
      {/* Hero Section */}
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">
                  Savor the <br /> Flavors of Home
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  At Kusina ng Bayan, we bring you the rich and authentic taste
                  of Filipino cuisine. Each dish is crafted with love, blending
                  traditional recipes with fresh, local ingredients. From hearty
                  meals to delightful desserts, experience the warmth and
                  comfort of our kitchen, where every bite feels like home.
                </p>
                <Link className="btn btn-primary py-3 px-5 mt-2" to="/menu">
                  Explore Our Menu
                </Link>
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img
                  className="img-fluid"
                  src={newHeroImage}
                  alt="Hero"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                {aboutImages.map((img, index) => (
                  <div
                    key={index}
                    className={`col-${index % 2 === 0 ? "6" : "6"} ${
                      index % 2 === 0 ? "text-start" : "text-end"
                    }`}
                  >
                    <img
                      className={`img-fluid rounded ${
                        index % 2 === 0 ? "w-100" : "w-75"
                      } wow zoomIn`}
                      data-wow-delay={`${0.1 * (index + 1)}s`}
                      src={img}
                      alt={`About ${index + 1}`}
                      loading="lazy"
                      style={index === 1 ? { marginTop: "25%" } : {}}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to{" "}
                <i className="fa fa-utensils text-primary me-2"></i> Kusina Ng
                Bayan
              </h1>
              <p className="mb-4">
                At Kusina ng Bayan, we are dedicated to sharing the authentic
                flavors and traditions of Filipino cuisine. Our mission is to
                bring people together through the love of food, serving up
                dishes that remind you of home.
              </p>
              <p className="mb-4">
                With 3 years of culinary expertise, we offer over 50 popular
                Filipino dishes. Join us for a flavorful journey that celebrates
                tradition, community, and the joy of eating together.
              </p>
              <div className="row g-4 mb-4">
                {[
                  { number: 3, label: "Years of Experience" },
                  { number: 50, label: "Popular Filipino Dishes" },
                ].map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0"
                        data-toggle="counter-up"
                      >
                        {item.number}
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">
                          {index === 0 ? "Years of" : "Popular"}
                        </p>
                        <h6 className="text-uppercase mb-0">{item.label}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Link
        to="#"
        aria-label="Back to Top"
        className="new-back-to-top btn-lg btn-primary btn-lg-square"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
