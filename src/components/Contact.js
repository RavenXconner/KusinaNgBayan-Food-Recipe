import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Contact.css"; // Custom styles
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "./FooterPage"; // Import the Footer component

const ContactPage = () => {
  return (
    <div className="new-container bg-white p-0">
      {/* Navbar Component */}
      

      {/* Contact Form Section */}
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">
              Get In Touch
            </h5>
            <h1 className="new-title">Contact For Any Query</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="new-info-title">Contact Info</h5>
                <p>
                  <i className="fa fa-map-marker-alt me-3"></i>Cagayan de Oro,
                  Misamis Oriental
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3"></i>+012 345 6789
                </p>
                <p>
                  <i className="fa fa-envelope me-3"></i>Kusinangbayan@gmail.com
                </p>
              </div>
            </div>
            <div className="new-col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form>
                  <div className="new-row">
                    <div className="new-col-12">
                      <input
                        type="text"
                        className="new-input w-100"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="new-col-12">
                      <input
                        type="email"
                        className="new-input w-100"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="new-col-12">
                      <input
                        type="text"
                        className="new-input w-100"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="new-col-12">
                      <textarea
                        className="new-textarea w-100"
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="new-col-12">
                      <button className="new-btn w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <Link
        to="#"
        className="new-back-to-top btn-lg btn-primary btn-lg-square"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </Link>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ContactPage;
