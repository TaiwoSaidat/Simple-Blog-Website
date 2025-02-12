import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAocvEt7e1TKGTKLP2v2w5mdkW4x-7HX1o",
  authDomain: "fir-blog-8ad51.firebaseapp.com",
  projectId: "fir-blog-8ad51",
  storageBucket: "fir-blog-8ad51.firebasestorage.app",
  messagingSenderId: "765683045194",
  appId: "1:765683045194:web:5105f8b74d8bbe92fea7b3",
  measurementId: "G-P7KWSKMMFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
