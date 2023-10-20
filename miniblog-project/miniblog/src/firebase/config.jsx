// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhWcbx3BXAo2IIPxBwdTNFlS8Vv16Yv0",
  authDomain: "miniblog-edecf.firebaseapp.com",
  projectId: "miniblog-edecf",
  storageBucket: "miniblog-edecf.appspot.com",
  messagingSenderId: "53651032573",
  appId: "1:53651032573:web:e40e5af3133a6caccbb194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize + export db firestore
const db = getFirestore(app)

export { db }