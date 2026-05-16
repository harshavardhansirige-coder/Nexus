import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwGcmmOmEnSpsV0K42R5zTAPhJfXikBeA",
  authDomain: "nexus-6a95c.firebaseapp.com",
  projectId: "nexus-6a95c",
  storageBucket: "nexus-6a95c.firebasestorage.app",
  messagingSenderId: "745530189922",
  appId: "1:745530189922:web:be15e05ef89f82e220c93b",
  measurementId: "G-YYD7BLD40Q"
};

// Initialize Firebase (SSR friendly)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
