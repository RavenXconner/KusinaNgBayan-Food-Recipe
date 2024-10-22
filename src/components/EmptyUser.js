import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./FooterPage"; // Reuse the same Footer component
import "./css/ProfilePage.css"; // Reuse ProfilePage styles for consistency

const EmptyUser = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <div className="title-container">
          <h5 className="welcome-section-title">Welcome</h5>
          <h1 className="profile-title">No User Logged In</h1>
        </div>
        <div className="user-info">
          <p className="user-email">
            <i className="fa fa-exclamation-circle"></i> You are not logged in.
          </p>
          <p className="user-date-joined">
            <i className="fa fa-info-circle"></i> Please log in to access your profile and features.
          </p>
        </div>
        <button className="primary-button" onClick={handleLoginRedirect}>
          Login
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default EmptyUser;
