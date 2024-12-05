import React from 'react'

import {
  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
  } from "../../utils/firebase.utils.js"

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
function SignIn() {
    // useEffect(async () => { 
    //   const response = await getRedirectResult(auth);
    //   console.log(response);

    // }, [])
    const logGoogleUser = async () => { 
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    
  return (
    <div>
      <h1>  
        Sign In
      </h1>
      <button onClick={logGoogleUser}>
        signin with google popup
      </button>
      <SignUpForm/>
    </div>
  )
}

export default SignIn
