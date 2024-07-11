// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy9GIfWK3SYJmh1E3MVt8IKDKhzKARhDY",
  authDomain: "sgeaadcbmipjet.firebaseapp.com",
  projectId: "sgeaadcbmipjet",
  storageBucket: "sgeaadcbmipjet.appspot.com",
  messagingSenderId: "10753632444",
  appId: "1:10753632444:web:a244090cc04ef3481e08b9",
  measurementId: "G-QZZERDM97C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);