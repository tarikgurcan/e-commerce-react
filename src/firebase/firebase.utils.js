import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABaUfeRoVQYEg9Rx_Gs5E1SRUGqXPaKUM",
  authDomain: "e-commerce-db-71a23.firebaseapp.com",
  projectId: "e-commerce-db-71a23",
  storageBucket: "e-commerce-db-71a23.appspot.com",
  messagingSenderId: "800751110129",
  appId: "1:800751110129:web:1ec170d5e31563d1492650",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;