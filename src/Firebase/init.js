// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyAkRy1FrAlzeArBGgoII4xQ4aulHUtn5aI",
  // authDomain: "car-repair-e1852.firebaseapp.com",
  // projectId: "car-repair-e1852",
  // storageBucket: "car-repair-e1852.appspot.com",
  // messagingSenderId: "810357174111",
  // appId: "1:810357174111:web:6bde8c1e8acf6a451250ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
