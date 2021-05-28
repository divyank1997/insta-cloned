
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCoSLuME2K60wA4ByFxmPzUNX3WslrUZGk",
         authDomain: "assign-insta.firebaseapp.com",
       projectId: "assign-insta",
        storageBucket: "assign-insta.appspot.com",
        messagingSenderId: "356447795158",
        appId: "1:356447795158:web:d1205366451311bf765677",
       measurementId: "G-6NYM2SQ722"
      }
)
const db= firebaseApp.firestore();

