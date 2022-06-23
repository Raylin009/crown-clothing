// This whole thing ????

import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth'

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1UQyFfUpfpIjdb7axQQgJ-cI4YQBJseU",
  authDomain: "crwn-clothing-db-551c7.firebaseapp.com",
  projectId: "crwn-clothing-db-551c7",
  storageBucket: "crwn-clothing-db-551c7.appspot.com",
  messagingSenderId: "571810030291",
  appId: "1:571810030291:web:d4235cdec3b24f85982a26"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

    }catch(error){
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
}