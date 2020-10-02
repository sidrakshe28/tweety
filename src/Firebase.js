
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKTslAF09jg7pNgUvLd9_Bg5wjVw8bGhA",
    authDomain: "tweety-9bbc0.firebaseapp.com",
    databaseURL: "https://tweety-9bbc0.firebaseio.com",
    projectId: "tweety-9bbc0",
    storageBucket: "tweety-9bbc0.appspot.com",
    messagingSenderId: "103348824518",
    appId: "1:103348824518:web:172fbd98cd1100322f2ac7",
    measurementId: "G-FBB1BH9YTW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;