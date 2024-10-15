import React, { useState, useEffect } from "react";
import { auth, database } from "./firebase/firebase";
import { ref, onValue } from "firebase/database";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "./FooterPage";
import "./css/ProfilePage.css";

const ProfilePage = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = ref(database, "users/" + user.uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setUserData(data);
          setLoading(false);
        });
      } else {
        setLoading(false); // No user logged in
        navigate("/empty-user"); // Optional: Redirect if not logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        await signOut(auth);
        setUserData(null);
        onLogout();
        navigate("/empty-user");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <div className="title-container">
          <h5 className="welcome-section-title">Welcome</h5>
          <h1 className="profile-title">Your Profile</h1>
        </div>
        <h2 className="user-profile-name">
          Name: {userData?.firstName} {userData?.lastName}
        </h2>
        <div className="user-info">
          <p className="user-email">
            <i className="fa fa-envelope"></i> {userData?.email}
          </p>
          <p className="user-date-joined">
            <i className="fa fa-calendar"></i> Joined:{" "}
            {new Date(userData?.dateJoined).toLocaleDateString()}
          </p>
        </div>
        <button className="primary-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
