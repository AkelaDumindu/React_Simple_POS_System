// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import firebase from 'firebase/app';
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAcAtUPBNoy7ci8N0mUuIXjRcjRwdUQwLA",
  authDomain: "react-pos-4f0a6.firebaseapp.com",
  projectId: "react-pos-4f0a6",
  storageBucket: "react-pos-4f0a6.appspot.com",
  messagingSenderId: "429671599067",
  appId: "1:429671599067:web:bdca8128298793d83f35fe",
  measurementId: "G-ZK85XPX7C7"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


const storage = firebase.storage();

export { storage, firebase as default };
  