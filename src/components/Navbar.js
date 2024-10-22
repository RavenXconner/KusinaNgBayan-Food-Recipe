import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate("/profile");
    } else {
      navigate("/empty-user");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Kusina Ng Bayan
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/menu" className="nav-item nav-link">Menu</Link>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</Link>
            <div className="dropdown-menu m-0">
              <span className="dropdown-item" onClick={handleProfileClick}>Profile</span>
              <Link to="/team" className="dropdown-item">Our Team</Link>
              <Link to="/payment" className="dropdown-item">Subscription</Link>
            </div>
          </div>
        </div>
        {!loggedIn && (
          <Link to="/signup" className="btn btn-primary py-2 px-4">Sign up</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
