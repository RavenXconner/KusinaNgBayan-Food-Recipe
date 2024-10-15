import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"; 
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1TOnqphkAwqQYOqVLKl149FyzcGmXNq4",
  authDomain: "kusinangbayan-2e5b1.firebaseapp.com",
  projectId: "kusinangbayan-2e5b1",
  storageBucket: "kusinangbayan-2e5b1.appspot.com",
  messagingSenderId: "611698230714",
  appId: "1:611698230714:web:3b2685a85fb47526790983",
  measurementId: "G-69M2P4V7BE",
  databaseURL: "https://kusinangbayan-2e5b1-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth and Database
const auth = getAuth(app);
const database = getDatabase(app);

// Set local persistence to keep the user logged in after refresh
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, database };
