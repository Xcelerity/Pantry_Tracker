// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDORiOdd29CoMgKcCDTFy9j3Ri6SBImmcw",
  authDomain: "pantrytracker-5375d.firebaseapp.com",
  projectId: "pantrytracker-5375d",
  storageBucket: "pantrytracker-5375d.appspot.com",
  messagingSenderId: "507705047919",
  appId: "1:507705047919:web:0dc1e708ce27a27f6f069a",
  measurementId: "G-DHWLR1SDH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app,firebaseConfig, firestore}