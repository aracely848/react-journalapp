// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnvironments();
//console.log(env);

//console.log( import.meta.env );
//console.log(process.env)

// Your web app's Firebase configuration
// DEV / PROD
// const firebaseConfig = {
//   apiKey: "AIzaSyBx8duBkDHduR5ioFJgkgKxhWlP6xnFpNI",
//   authDomain: "react-f5ec7.firebaseapp.com",
//   projectId: "react-f5ec7",
//   storageBucket: "react-f5ec7.appspot.com",
//   messagingSenderId: "754285051767",
//   appId: "1:754285051767:web:0b266e9a04b8ada1276b72"
// };

// TESTING
// const firebaseConfig = {
//   apiKey: "AIzaSyDKecbVDKJhj0kEIe_BokHyNMhEBaET05U",
//   authDomain: "pruebas-8c931.firebaseapp.com",
//   projectId: "pruebas-8c931",
//   storageBucket: "pruebas-8c931.appspot.com",
//   messagingSenderId: "208825014696",
//   appId: "1:208825014696:web:295a767e6fcb99f4e6e59d"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};

//console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );