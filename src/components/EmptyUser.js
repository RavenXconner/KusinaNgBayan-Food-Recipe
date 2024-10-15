import React from "react";
import { useNavigate } from "react-router-dom"; 
import Footer from "./FooterPage"; 
import "./css/EmptyUser.css"; 

const EmptyUserPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="empty-user-wrapper">
    

      <div className="empty-user-content py-5 d-flex justify-content-center align-items-center">
        <div className="empty-user-text text-center">
          <h5 className="user-section-title user-text-primary ff-secondary">
            User Credentials
          </h5>
          <h1 className="user-title">Your Credentials</h1>

          <div className="user-profile-card">
            <h2 className="user-profile-name">
              Name: ㅤㅤN/Aㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            </h2>
            <p className="user-profile-email">
              <i className="fa fa-envelope user-icon"></i> Email: [user@gmail.com]
            </p>
            <p className="user-profile-date">
              <i className="fa fa-calendar user-icon"></i> Date Joined: [Date]
            </p>
            <button 
              className="user-btn" 
              onClick={() => navigate('/login')} 
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmptyUserPage;
