import { useState } from "react"
import {signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
    } from '../../utils/firebase.utils.js'
import FormInput from '../../components/form-input/form-input.component'
import Button from "../button/button.component.jsx"
import './sign-in-form.styles.scss'



const defaultFormFields = {
    email: '',
    password: '',
}




const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    
    console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => { 
        await signInWithGooglePopup();
        
        
    }
    const handleSubmit1 = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields()
        } catch (error) {
            switch(error.code) {     
                case 'auth/wrong-password':
                    alert('oncorrect password and email');
                    break;

                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
            console.error('Error during sign-in:', error.message); // Log the error
        }
    };
    
    const handleChange = (event) => {
        setFormFields({...formFields, [event.target.name]:event.target.value})
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <form onSubmit={handleSubmit1}>
                <FormInput label={"email"} type="email" required onChange={handleChange} name="email"/>
                <FormInput label={"Password"} type="password" required onChange={handleChange} name="password"/>
                <div className="buttons-container">
                    <Button type = 'submit'>Sign In</Button>
                    <Button type = 'button' buttonType={'google'} onClick={signInWithGoogle} >Google sign in</Button>
                </div>
                
            </form>
        </div>

    )
}

export default SignInForm;