// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo1JsaisKGhYsP7xv7J35DBGrYLn_tMv8",
    authDomain: "socialmediacard-test.firebaseapp.com",
    projectId: "socialmediacard-test",
    storageBucket: "socialmediacard-test.firebasestorage.app",
    messagingSenderId: "501494578125",
    appId: "1:501494578125:web:73127a83dc14bae889a284",
    measurementId: "G-N92F4KCZS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth, app }