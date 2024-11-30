// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQsI7X2UJpzQCad9FUStlYLfEqZxXlM4",
  authDomain: "real-time-docs-f5b0a.firebaseapp.com",
  projectId: "real-time-docs-f5b0a",
  storageBucket: "real-time-docs-f5b0a.firebasestorage.app",
  messagingSenderId: "658334364061",
  appId: "1:658334364061:web:e557f1353e47a31e24ff74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app); // This initializes Firestore

// Export the Firestore database so it can be used in other parts of your app
export { db };
