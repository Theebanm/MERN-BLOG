// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-theeban.firebaseapp.com",
  projectId: "mern-blog-theeban",
  storageBucket: "mern-blog-theeban.appspot.com",
  messagingSenderId: "785351382873",
  appId: "1:785351382873:web:a3e547ab16f23ed349de48",
  measurementId: "G-RM5CDVE9VC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
