// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIRPZ2LoB0_CzN-pVEjok13-i409Ht6IE",
  authDomain: "pantry-tracker-ee871.firebaseapp.com",
  projectId: "pantry-tracker-ee871",
  storageBucket: "pantry-tracker-ee871.appspot.com",
  messagingSenderId: "854821885310",
  appId: "1:854821885310:web:e85c3177ab89ce10c50f2f",
  measurementId: "G-9HVNJP8Q3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}