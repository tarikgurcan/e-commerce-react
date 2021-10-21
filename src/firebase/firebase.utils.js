import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyCb2MQFCEjXocF-8bCFIxMViGjGSf7PVzQ",
    authDomain: "e-commerce-new-7128c.firebaseapp.com",
    projectId: "e-commerce-new-7128c",
    storageBucket: "e-commerce-new-7128c.appspot.com",
    messagingSenderId: "161218773387",
    appId: "1:161218773387:web:37cd2ad9487f94fad0ef8e",
    measurementId: "G-FZWY3C1BSB"
  };

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapshot=await userRef.get();

    if(!snapshot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log("error creating user")
      }
    }
    return userRef
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInwithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;