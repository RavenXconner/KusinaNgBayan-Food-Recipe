import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "./firebase/firebase";
import { Link } from "react-router-dom";
import Footer from "./FooterPage";
import "./css/Signup.css";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data in Firebase Realtime Database
      await set(ref(database, "users/" + user.uid), {
        firstName,
        lastName,
        email,
        dateJoined: new Date().toISOString(),
      });

      // Set success message
      setSuccessMessage("Account created successfully!");

      // Navigate to the maintenance page after 2 seconds
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already in use. Please try logging in.");
      } else {
        setErrorMessage("Error signing up: " + error.message);
      }
    }
  };

  return (
    <div className="new-container bg-white p-0">
      
      <div className="new-container py-5 d-flex justify-content-center align-items-center">
        <div className="new-container text-center">
          <div className="new-text-center">
            <h5 className="new-section-title ff-secondary new-text-primary fw-normal">Join Us</h5>
            <h1 className="new-title">Create Your Account</h1>
          </div>
          <div className="new-row justify-content-center">
            <div className="new-col-md-6">
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSignup}>
                <div className="new-row">
                  <div className="new-col-6">
                    <input
                      type="text"
                      className="new-input w-100"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="new-col-6">
                    <input
                      type="text"
                      className="new-input w-100"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
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
                    <button className="new-btn w-100 py-3" type="submit">Sign Up</button>
                  </div>
                  <div className="new-col-12">
                    <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
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

export default SignupPage;
