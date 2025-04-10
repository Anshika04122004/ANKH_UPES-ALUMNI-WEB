// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getauth, createUserWithUsernameAndPassword} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhw62KEnk58k9hKYJyTt3PISePNSGfGSc",
  authDomain: "ankh-56044.firebaseapp.com",
  projectId: "ankh-56044",
  storageBucket: "ankh-56044.firebasestorage.app",
  messagingSenderId: "83063873485",
  appId: "1:83063873485:web:da4ab6792dae479b5b6e84",
  measurementId: "G-7B2L06NB1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//inputs
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

const login = document.getElementById('login');
login.addEventListener("click" , function (event){
  event.preventDefault()
  alert(5)
})