import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import 'firebase/compat/firestore';

import {initializeFirestore} from 'firebase/firestore';
const firebaseConfig = {

  apiKey: "AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",
  authDomain: "last-3b395.firebaseapp.com",
  projectId: "last-3b395",
  storageBucket: "last-3b395.appspot.com",
  messagingSenderId: "479262466021",
  appId: "1:479262466021:web:2cd50032e15feef041590c"
};

// Initialize Firebase
 let app;
 
// if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth()
// const db = firebase.firestore()

  firebase.firestore().settings({ experimentalForceLongPolling: true });


 export const firestore = firebase.firestore();

export { auth};
