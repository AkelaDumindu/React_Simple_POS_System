// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAcAtUPBNoy7ci8N0mUuIXjRcjRwdUQwLA",
    authDomain: "react-pos-4f0a6.firebaseapp.com",
    projectId: "react-pos-4f0a6",
    storageBucket: "react-pos-4f0a6.appspot.com",
    messagingSenderId: "429671599067",
    appId: "1:429671599067:web:bdca8128298793d83f35fe",
    measurementId: "G-ZK85XPX7C7"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  