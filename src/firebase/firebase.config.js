// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVP2Ndi9uzEwvnhgWY1ZEA1SttRbY0io",
  authDomain: "toys-verse.firebaseapp.com",
  projectId: "toys-verse",
  storageBucket: "toys-verse.appspot.com",
  messagingSenderId: "698349470807",
  appId: "1:698349470807:web:e1af91a6f8c1620a884f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;