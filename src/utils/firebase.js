// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg71KQbBjgyxikxUhookB272buBSg-Uv0",
  authDomain: "netflix-d0166.firebaseapp.com",
  projectId: "netflix-d0166",
  storageBucket: "netflix-d0166.firebasestorage.app",
  messagingSenderId: "77653445126",
  appId: "1:77653445126:web:008548fef604c995fed187",
  measurementId: "G-PLYW55M420",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
