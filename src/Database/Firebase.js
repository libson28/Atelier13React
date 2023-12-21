// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOJaayxbLHCRzc9kB3KVH9tuTGTeXTzcg",
  authDomain: "recherchememoire-343cd.firebaseapp.com",
  projectId: "recherchememoire-343cd",
  storageBucket: "recherchememoire-343cd.appspot.com",
  messagingSenderId: "131458755473",
  appId: "1:131458755473:web:9a66f150ef4dd08f554830",
  measurementId: "G-QTFH0SQFT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);