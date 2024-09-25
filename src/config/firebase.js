// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6PbGF7NZSeeIN1aBMLH8-HmzedVUAfhI",
  authDomain: "kofee-a0348.firebaseapp.com",
  projectId: "kofee-a0348",
  storageBucket: "kofee-a0348.appspot.com",
  messagingSenderId: "491795643744",
  appId: "1:491795643744:web:14068ae992054f88a6b205",
  measurementId: "G-BBXTK802PD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
