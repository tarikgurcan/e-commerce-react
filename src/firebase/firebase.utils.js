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

export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);

  const SnapShot=await userRef.get();

  if(!SnapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(error){
      console.log("Error: ", error.message())
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;