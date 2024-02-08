// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-space-edcac.firebaseapp.com",
  projectId: "blog-space-edcac",
  storageBucket: "blog-space-edcac.appspot.com",
  messagingSenderId: "275986045000",
  appId: "1:275986045000:web:f9db5ffa0662803ef5207d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

