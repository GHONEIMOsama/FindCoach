import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT4a9hGBaASIC6wlCj3W1RKToSkeVD-PI",
  authDomain: "findcoach-f472d.firebaseapp.com",
  databaseURL:
    "https://findcoach-f472d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "findcoach-f472d",
  storageBucket: "findcoach-f472d.appspot.com",
  messagingSenderId: "212030205896",
  appId: "1:212030205896:web:88814e2c2def11cfc7dafd",
};

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);
export const auth = getAuth();

export default firebase;
