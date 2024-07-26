// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9a63cACJFzMhQFaSUHziC5Y5AeuFfKnc",
  authDomain: "auth-website-21de1.firebaseapp.com",
  projectId: "auth-website-21de1",
  storageBucket: "auth-website-21de1.appspot.com",
  messagingSenderId: "1080606289566",
  appId: "1:1080606289566:web:eae263e81ae2c8acbd158f",
  measurementId: "G-8CM9B6441M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);