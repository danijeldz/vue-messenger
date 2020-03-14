import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBs5_nmqygeccVy1QIdKle0ApBFXGqwfaQ",
  authDomain: "vue-messenger-ninja.firebaseapp.com",
  databaseURL: "https://vue-messenger-ninja.firebaseio.com",
  projectId: "vue-messenger-ninja",
  storageBucket: "vue-messenger-ninja.appspot.com",
  messagingSenderId: "588979584348",
  appId: "1:588979584348:web:8e74658e957e6d1b09d599"
};

// Initialize Firebase
const ref = firebase.initializeApp(firebaseConfig);

export default ref.firestore();
