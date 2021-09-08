 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCxdGoOSDQq9WLI_A64nPrCfCIFDjYwsNE",
   authDomain: "movie-serach-engine.firebaseapp.com",
   projectId: "movie-serach-engine",
   storageBucket: "movie-serach-engine.appspot.com",
   messagingSenderId: "846389335365",
   appId: "1:846389335365:web:e8e50d094d697d5e6c5a2c",
   measurementId: "G-WZJT2P53L3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
