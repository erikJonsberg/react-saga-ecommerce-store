import { useState } from 'react';
import{ createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    required: true
}

const SignUpForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword} = formFields;

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

const handleSubmit = async (event) => {
    event.preventDefault();
    //const response = await createAuthUserWithEmailAndPassword(displayName, email, password);
       if (password !== confirmPassword) {
        alert("Passwords don't match");
        return
    }

    try {
    const {user} = await createAuthUserWithEmailAndPassword(email, password);
    await createUserDocumentFromAuth(user, {displayName});
    resetFormFields();
} catch(error) {
    if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
    } else {
        console.log('Error encountered', error)
    }
}
}

const handleChange = (event) => {
    const {name,value} = event.target;

    setFormFields({...formFields, [name]: value});
}

    return(
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={()=>{}}>

                <FormInput
                    label="Display Name"
                    type = "text" 
                    onChange = {handleChange} 
                    name = "displayName"
                    value = {displayName}
                    required
                />

                <FormInput
                label = "Email"
                type = "email"  
                onChange = {handleChange} 
                name = "email" 
                value = {email}
                required
                />

                <FormInput
                label = "Password"
                type = "password"  
                onChange = {handleChange}
                name = "password" 
                value = {password}
                required
                />

                <FormInput
                label = "Conform Password"
                type = "password" 
                onChange = {handleChange} 
                name = "confirmPassword"
                value = {confirmPassword}
                required
                />

                <Button buttonType="default" type="submit" onClick={handleSubmit}>Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;