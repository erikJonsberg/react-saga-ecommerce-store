import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import {SignUpContainer} from './sign-up-form.styles'
import { signUpStart } from '../../store/user/user.action';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

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
const dispatch = useDispatch();

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
       if (password !== confirmPassword) {
        alert("Passwords don't match");
        return
    }

    try {
       dispatch(signUpStart(email, password, displayName)) 
        resetFormFields();
    } catch(error) {
        if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already in use')
        } else {
        console.log('Error encountered', error)
        }
    }
}

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;

    setFormFields({...formFields, [name]: value});
}

    return(
        <SignUpContainer>
        <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

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

                <Button 
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    type="submit">
                    Sign Up
                </Button>

            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;