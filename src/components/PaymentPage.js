import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/PaymentPage.css";
import Footer from "./FooterPage";
import paymentCard from "./img/payment-logo/atm-card.png";
import paymentGcash from "./img/payment-logo/gcash-seeklogo.png";
import paymentPaypal from "./img/payment-logo/paypal.png";

const PaymentPage = () => {
  const [plan, setPlan] = useState("monthly");
  const [voucher, setVoucher] = useState("");
  const [error, setError] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);
  const navigate = useNavigate();

  const applyVoucher = () => {
    if (voucher === "FREE3DAYS") {
      setVoucherApplied(true);
      setError("");
    } else {
      setError("Invalid voucher code.");
    }
  };

  return (
    <div className="payment-page-container bg-white p-0">
      <div className="container-xxl payment-content-wrapper">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h2 className="text-white mt-4">
              Do you have your own creations to be featured?
            </h2>
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Choose Your Membership Plan
            </h1>
            <p className="text-white">Wanna join our community?</p>
          </div>
        </div>
      </div>

      <div className="payment-plan-options d-flex justify-content-center gap-4 mb-5">
        <div
          className={`payment-plan-card ${plan === "monthly" ? "active-plan" : ""}`}
          onClick={() => setPlan("monthly")}
        >
          <h2>Monthly Plan</h2>
          <p>₱130 / month</p>
        </div>

        <div
          className={`payment-plan-card ${plan === "annual" ? "active-plan" : ""}`}
          onClick={() => setPlan("annual")}
        >
          <h2>Annual Plan</h2>
          <p>₱1500 / year</p>
        </div>
      </div>

      <div className="voucher-section text-center mb-4">
        <input
          type="text"
          className="voucher-input-field"
          placeholder="Enter Voucher Code"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
        />
        <button className="apply-voucher-btn" onClick={applyVoucher}>
          Apply Voucher
        </button>
        {error && <p className="voucher-error-message">{error}</p>}
        {voucherApplied && (
          <p className="voucher-success-message">
            Voucher applied! Enjoy a 3-day free trial.
          </p>
        )}
      </div>

      <div className="payment-methods-header text-center">
        <h3>Select Payment Method</h3>
        <div className="payment-method-icons d-flex justify-content-center gap-4">
          {/* Use Link for Navigation */}
          <Link to="/maintenance" className="payment-icon-link">
            <img src={paymentPaypal} alt="PayPal" className="payment-icon" />
          </Link>

          <Link to="/maintenance" className="payment-icon-link">
            <img src={paymentCard} alt="Credit Card" className="payment-icon" />
          </Link>

          
        </div>
      </div>

      <Link
        to="#"
        className="new-back-to-top btn-lg btn-primary btn-lg-square"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </Link>

      <Footer />
    </div>
  );
};

export default PaymentPage;
