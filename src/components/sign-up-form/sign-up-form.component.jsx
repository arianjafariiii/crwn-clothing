import {  useState } from "react"
import {createUserAuthWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase.utils.js'
import FormInput from '../../components/form-input/form-input.component'
import Button from "../button/button.component.jsx"
import './sign-up-form.styles.scss'
import { UserContext } from "../../contexts/user.context.jsx"
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    
    const handleSubmit = async(event) => {
        event.preventDefault()

        if(password !== confirmPassword){
            alert("passwords do not match");
            return;

        }

        try {
            const {user} = await createUserAuthWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch (error) {
            console.log('user creation encounter an error', error);
        }
    }
    const handleChange = (event) => {
        setFormFields({...formFields, [event.target.name]:event.target.value})
    }
    return(
        <div className="sign-up-container">
            <h2>Sign Up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label={"display name"} type="text" required onChange={handleChange} name="displayName"/>
                <FormInput label={"email"} type="email" required onChange={handleChange} name="email"/>
                <FormInput label={"Password"} type="password" required onChange={handleChange} name="password"/>
                <FormInput label={"Confirm Password"} type="password" required onChange={handleChange} name="confirmPassword"/>
                <Button type = 'submit'>Sign Up</Button>
            </form>
        </div>

    )
}

export default SignUpForm;