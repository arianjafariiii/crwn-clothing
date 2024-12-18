import {initializeApp} from 'firebase/app'
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
  setDoc
} from 'firebase/firestore'




const firebaseConfig = {

    apiKey: "AIzaSyDnzfcmo2FQpiWf5RwMCotIyBBIkVbCWWs",
  
    authDomain: "crwn-project-49125.firebaseapp.com",
  
    projectId: "crwn-project-49125",
  
    storageBucket: "crwn-project-49125.firebasestorage.app",
  
    messagingSenderId: "436168001374",
  
    appId: "1:436168001374:web:c5a33f01bcf5cb6a78f1cf"
  
  };
  
  
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider  = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())


    if (!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
          })
      } catch (error) {
        console.log('error creating the user ', error.message);
      }
    }
    return userDocRef;
  }

