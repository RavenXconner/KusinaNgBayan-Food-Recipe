import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Footer from "./FooterPage";
import "./css/Login.css"; // Assuming styles are defined in Login.css

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // Update loggedIn state
      navigate("/profile"); // Redirect on success
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("Failed to login. Please check your email and password.");
    } finally {
      setLoading(false); // Stop loading animation
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
                      aria-label="Email"
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
                      aria-label="Password"
                    />
                  </div>
                  <div className="new-col-12">
                    <button
                      className="new-btn w-100 py-3"
                      type="submit"
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                  {errorMessage && (
                    <div className="new-col-12 mt-2">
                      <p className="text-danger" role="alert">{errorMessage}</p>
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
