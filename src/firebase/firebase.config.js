// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4slk_Ldcpr0XkP0sIDqCWu9onMHmp8Bo",
  authDomain: "fir-androidapp-c4f98.firebaseapp.com",
  databaseURL: "https://fir-androidapp-c4f98.firebaseio.com",
  projectId: "fir-androidapp-c4f98",
  storageBucket: "fir-androidapp-c4f98.firebasestorage.app",
  messagingSenderId: "1002374396343",
  appId: "1:1002374396343:web:aa7a2afc4ca230d8639032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;