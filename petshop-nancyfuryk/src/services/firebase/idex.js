// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbsGdwyOPL1DqvMKvyA9_ZYt-__hUcgow",
  authDomain: "petshop31145.firebaseapp.com",
  projectId: "petshop31145",
  storageBucket: "petshop31145.appspot.com",
  messagingSenderId: "416243139537",
  appId: "1:416243139537:web:93f44ab087574d98a5d6f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)