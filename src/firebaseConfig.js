// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBmvMTi6I_Ne0Y0lW3kcHg8yNe506GNHvc",
  authDomain: "asoliddemo.firebaseapp.com",
  projectId: "asoliddemo",
  storageBucket: "asoliddemo.appspot.com",
  messagingSenderId: "678537557634",
  appId: "1:678537557634:web:18143a7e99c567ace5a69b",
  measurementId: "G-ZDJ9KY4SGR",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const functions = getFunctions(app);

export default app;
