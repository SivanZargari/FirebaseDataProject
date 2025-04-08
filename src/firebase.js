// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9GQIE-BklSI3kGManAK9Kh6se3EJcuV4",
  authDomain: "fir-data-project-3448d.firebaseapp.com",
  projectId: "fir-data-project-3448d",
  storageBucket: "fir-data-project-3448d.firebasestorage.app",
  messagingSenderId: "675311150358",
  appId: "1:675311150358:web:d8e04ac8e8c3f552615c37",
  measurementId: "G-ZYSZ4CD6J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);