// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbrFWDAXdQHJjZHcR6BSQpCju9ItroHP8",
  authDomain: "roommate-finder-bef1f.firebaseapp.com",
  projectId: "roommate-finder-bef1f",
  storageBucket: "roommate-finder-bef1f.firebasestorage.app",
  messagingSenderId: "313895109792",
  appId: "1:313895109792:web:15df12176e25c4c4c7f5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;