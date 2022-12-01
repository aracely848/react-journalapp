// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx8duBkDHduR5ioFJgkgKxhWlP6xnFpNI",
  authDomain: "react-f5ec7.firebaseapp.com",
  projectId: "react-f5ec7",
  storageBucket: "react-f5ec7.appspot.com",
  messagingSenderId: "754285051767",
  appId: "1:754285051767:web:0b266e9a04b8ada1276b72"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );