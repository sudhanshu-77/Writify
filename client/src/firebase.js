// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "writify-f1d86.firebaseapp.com",
  projectId: "writify-f1d86",
  storageBucket: "writify-f1d86.appspot.com",
  messagingSenderId: "458570794637",
  appId: "1:458570794637:web:1f726e9b85366ca7b704c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//commit