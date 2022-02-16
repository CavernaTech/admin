// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD1n9D3brmqs-sJBUBkr86EsJoYfUk4zm4",

  authDomain: "cavernatech-website.firebaseapp.com",

  databaseURL: "https://cavernatech-website-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "cavernatech-website",

  storageBucket: "cavernatech-website.appspot.com",

  messagingSenderId: "767644680985",

  appId: "1:767644680985:web:acc8851b3b2773ff7bbb88"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;
