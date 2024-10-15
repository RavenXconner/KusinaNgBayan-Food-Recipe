// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getDatabase } from "firebase/database"; // Import Firebase Realtime Database
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1TOnqphkAwqQYOqVLKl149FyzcGmXNq4",
  authDomain: "kusinangbayan-2e5b1.firebaseapp.com",
  projectId: "kusinangbayan-2e5b1",
  storageBucket: "kusinangbayan-2e5b1.appspot.com",
  messagingSenderId: "611698230714",
  appId: "1:611698230714:web:3b2685a85fb47526790983",
  measurementId: "G-69M2P4V7BE",
  databaseURL: "https://kusinangbayan-2e5b1-default-rtdb.asia-southeast1.firebasedatabase.app", // Add your database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Database
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
