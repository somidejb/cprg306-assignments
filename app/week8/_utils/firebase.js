// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw-vtXdqfZBteIEJ8B90YOo09Yua3iKec",
  authDomain: "cprg306-a0bc8.firebaseapp.com",
  projectId: "cprg306-a0bc8",
  storageBucket: "cprg306-a0bc8.appspot.com",
  messagingSenderId: "939095547234",
  appId: "1:939095547234:web:452c6bf20f68bfa899a03b",
  measurementId: "G-YD3Q5EFJWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);