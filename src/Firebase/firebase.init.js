// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfJGHIbChqvTH17ct-esX2M4YFLW4lac4",
  authDomain: "email-auth-d67fe.firebaseapp.com",
  projectId: "email-auth-d67fe",
  storageBucket: "email-auth-d67fe.appspot.com",
  messagingSenderId: "747653118860",
  appId: "1:747653118860:web:00ef974d30b874a174f4a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;