import firebase from 'firebase';
require('@firebase/firestore');

export const firebaseConfig = {
  apiKey: "AIzaSyAVxmGp8-sNNihhs46KKulg9CcKnCINoZk",
  authDomain: "spectagram-app-34d75.firebaseapp.com",
  projectId: "spectagram-app-34d75",
  storageBucket: "spectagram-app-34d75.appspot.com",
  messagingSenderId: "629449746226",
  appId: "1:629449746226:web:dba386973343d783e5592b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore;