import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsVLTl7eJt58c8EUzyVnN8XjSev01zr3g",
  authDomain: "mychat-6f894.firebaseapp.com",
  projectId: "mychat-6f894",
  storageBucket: "mychat-6f894.appspot.com",
  messagingSenderId: "697607418020",
  appId: "1:697607418020:web:b9b88ef568b5b08ee63631",
  measurementId: "G-YFHN3ZLTFG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();