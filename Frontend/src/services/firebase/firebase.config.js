import firebase from "firebase/app";
import { initializeApp, auth } from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrUjYVSxnVwclEqOmiMV093tRBM-c6cgU",
  authDomain: "bicycle-rental-5da54.firebaseapp.com",
  projectId: "bicycle-rental-5da54",
  storageBucket: "bicycle-rental-5da54.appspot.com",
  messagingSenderId: "57515908039",
  appId: "1:57515908039:web:140995ecdab185561617e2",
};

//Inicializar firebase

const app = firebase.initializeApp(firebaseConfig);
const authFirebase = app.auth();
const google = new authFirebase.GoogleAuthProvider();

export { authFirebase, google };
