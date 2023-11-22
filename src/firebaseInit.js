// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAceYMjCcBhGcpAgLboE6aJPYozjXuLdA",
  authDomain: "buybusy2-554d5.firebaseapp.com",
  projectId: "buybusy2-554d5",
  storageBucket: "buybusy2-554d5.appspot.com",
  messagingSenderId: "224587511144",
  appId: "1:224587511144:web:9a6a2dfe63021b3efd92dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);