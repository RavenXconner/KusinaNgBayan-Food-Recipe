import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase/firebase"; // Import Firebase
import { Link } from "react-router-dom"; // Add this line
import Footer from "./FooterPage";
import "./css/ForgotPassword.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent! Check your email.");
    } catch (error) {
      console.error("Error resetting password:", error.message);
    }
  };

  return (
    <div className="new-container bg-white p-0">
      
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Forgot Password</h5>
            <h1 className="new-title">Reset Your Password</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <form onSubmit={handlePasswordReset}>
                <div className="new-row">
                  <div className="new-col-12">
                    <input
                      type="email"
                      className="new-input w-100"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <button className="new-btn w-100 py-3" type="submit">Send Reset Link</button>
                  </div>
                  <div className="new-col-12">
                    <p className="mt-3">Remember your password? <Link to="/login">Login</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
