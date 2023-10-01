
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5NYlPvAWeq5ZxouI7RiHBWWSkyHCg72Q",
  authDomain: "donation-campaign-17854.firebaseapp.com",
  projectId: "donation-campaign-17854",
  storageBucket: "donation-campaign-17854.appspot.com",
  messagingSenderId: "457303242719",
  appId: "1:457303242719:web:7bddaa799bc909e574366a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;