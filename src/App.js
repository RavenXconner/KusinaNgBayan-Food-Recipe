// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutSection";
import MenuPage from "./components/Menu";
import TeamPage from "./components/OurTeam";
import ContactPage from "./components/Contact";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import UnderMaintenance from "./components/Maintenance";
import ProfilePage from "./components/ProfilePage";
import EmptyUserPage from "./components/EmptyUser";
import ScrollToTop from "./components/ScrollToTop";
import PaymentPage from "./components/PaymentPage";


function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
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
