import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCpi-r7vR3H7Vz2Mq2VU5V2hlkAak0tkkk",
  authDomain: "mail-ui-research.firebaseapp.com",
  projectId: "mail-ui-research",
  storageBucket: "mail-ui-research.appspot.com",
  messagingSenderId: "243402115256",
  appId: "1:243402115256:web:92d09789bafe4e95a8cc4d",
  measurementId: "G-Z77L33PYL8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
