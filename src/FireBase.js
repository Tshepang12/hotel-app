// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmNC2XbkDPUidIicnX0cAcoape5PyK2D8",
  authDomain: "react-firebase-auth-40a09.firebaseapp.com",
  projectId: "react-firebase-auth-40a09",
  storageBucket: "react-firebase-auth-40a09.appspot.com",
  messagingSenderId: "135005269850",
  appId: "1:135005269850:web:bbcc82b7c5f75be3084d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore (app)

export {auth ,db};