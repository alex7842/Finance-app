// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCaP-IaCbru_ivZ2doNA8hKmyQMBg68SOE",
  authDomain: "finance-f47fc.firebaseapp.com",
  projectId: "finance-f47fc",
  storageBucket: "finance-f47fc.appspot.com",
  messagingSenderId: "54120797561",
  appId: "1:54120797561:web:6a941c2013c2c4ffdacba8",
  measurementId: "G-9H33J97YCT"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();