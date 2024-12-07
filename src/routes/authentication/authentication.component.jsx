import React from 'react'
import './authentication.styles.scss'
import {
  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
  } from "../../utils/firebase.utils.js"

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
const Authentication = () => {
    // useEffect(async () => { 
    //   const response = await getRedirectResult(auth);
    //   console.log(response);

    // }, [])
    
    
  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication;
