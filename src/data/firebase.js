
import firebase from "firebase";
/*
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-r0QlGMYVyTkF2vJpqs8TxVzyccPvJN4",
  authDomain: "youth-arts-movement.firebaseapp.com",
  databaseURL: "https://youth-arts-movement.firebaseio.com",
  projectId: "youth-arts-movement",
  storageBucket: "youth-arts-movement.appspot.com",
  messagingSenderId: "952789697940",
  appId: "1:952789697940:web:20d4a2031bd1ef20a27b81",
  measurementId: "G-NTYBFQJY7K",
});

const db = firebaseApp.firestore();

export { db };
*/



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKmCbU4r71AzEvN2oi4J1Ranls9sqdSbI",
  authDomain: "yam-emails.firebaseapp.com",
  projectId: "yam-emails",
  storageBucket: "yam-emails.appspot.com",
  messagingSenderId: "940835312717",
  appId: "1:940835312717:web:5f46b37b71f509cd3a3804",
  measurementId: "G-9LPZJ29JD2"
});

const db = firebaseApp.firestore();

export { db };

