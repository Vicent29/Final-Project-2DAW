import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_VITE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_VITE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_VITE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_VITE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_VITE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_VITE_APPID,
};

//Inicializar firebase

const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const providerGithub = new GithubAuthProvider();


export { auth, providerGoogle, providerFacebook, providerTwitter, providerGithub };