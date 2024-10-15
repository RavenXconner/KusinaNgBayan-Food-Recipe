import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase"; // Import Firebase
import Footer from "./FooterPage";
import "./css/Login.css";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to display login error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // Call onLogin to update the loggedIn state in the parent component
      navigate("/profile"); // Redirect to profile page on successful login
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("Failed to login. Please check your email and password.");
    }
  };

  return (
    <div className="new-container bg-white p-0">
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Login</h5>
            <h1 className="new-title">Sign In To Your Account</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              <form onSubmit={handleLogin}>
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
                    <input
                      type="password"
                      className="new-input w-100"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="new-col-12">
                    <button className="new-btn w-100 py-3" type="submit">
                      Login
                    </button>
                  </div>
                  {errorMessage && (
                    <div className="new-col-12 mt-2">
                      <p className="text-danger">{errorMessage}</p> {/* Display error message */}
                    </div>
                  )}
                  <div className="new-col-12">
                    <p className="mt-3">
                      Forgot your password? <Link to="/forgot-password">Reset here</Link>
                    </p>
                    <p>
                      Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
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

export default LoginPage;
