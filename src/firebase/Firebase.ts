// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuYo27tXBqiPEgOGyvTPNXb3XqQ7oUFpg",
  authDomain: "lendsqr-f7c11.firebaseapp.com",
  projectId: "lendsqr-f7c11",
  storageBucket: "lendsqr-f7c11.firebasestorage.app",
  messagingSenderId: "368545476778",
  appId: "1:368545476778:web:380d627b5b23052493e0d3",
  measurementId: "G-S73T9K21XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {app, auth}