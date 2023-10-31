// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7N6-ULYth108VW7IJa128RM4nEktOYRk",
  authDomain: "authcar-7650b.firebaseapp.com",
  projectId: "authcar-7650b",
  storageBucket: "authcar-7650b.appspot.com",
  messagingSenderId: "708154696866",
  appId: "1:708154696866:web:6eae295cc14d8c2619e3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db , auth };