
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXFzDjbJanVONhSwj61FwXGEFBVdGZuEk",
  authDomain: "e-commerce-b81fa.firebaseapp.com",
  projectId: "e-commerce-b81fa",
  storageBucket: "e-commerce-b81fa.appspot.com",
  messagingSenderId: "47384369307",
  appId: "1:47384369307:web:3b95ad187785b9e5430e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export{auth, db};