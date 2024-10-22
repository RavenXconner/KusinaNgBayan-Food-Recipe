// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./AboutSection";
import MenuPage from "./Menu";
import TeamPage from "./OurTeam";
import ContactPage from "./Contact";
import SignupPage from "./SignUp";
import LoginPage from "./LoginPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import UnderMaintenance from "./Maintenance";
import ProfilePage from "./ProfilePage";
import EmptyUserPage from "./EmptyUser";
import ScrollToTop from "./ScrollToTop";
import PaymentPage from "./PaymentPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    console.log('Initial loggedIn state:', isLoggedIn); // Debug log
    return isLoggedIn;
  });

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
          <Route path="/empty-user" element={<EmptyUserPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
