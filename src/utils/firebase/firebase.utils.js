// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsxChzTFQa6dYqoHrOnLUp8kl8njEjh_w",
  authDomain: "crwn-clothing-db-22dc9.firebaseapp.com",
  projectId: "crwn-clothing-db-22dc9",
  storageBucket: "crwn-clothing-db-22dc9.appspot.com",
  messagingSenderId: "809453257030",
  appId: "1:809453257030:web:ed1477b98d1b689bd1a547"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}
