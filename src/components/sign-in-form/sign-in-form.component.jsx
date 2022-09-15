import { useState } from 'react';
import{ signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import {SignInContainer, ButtonsContainer} from './sign-in-form.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
    required: true
}

const SignInForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const {email, password} = formFields;

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

 const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    await signInAuthUserWithEmailAndPassword(email, password);
    resetFormFields();
} catch(error) {
    switch (error.code) {
        case 'auth/wrong-password':
            alert('Incorrect password for email');
            break;
        case 'auth/user-not-found':
            alert('User not found');
            break;
            default:
                console.log(error);
    }
}
};

const handleChange = (event) => {
    const {name,value} = event.target;

    setFormFields({...formFields, [name]: value});
}

    return(
        <SignInContainer>
        <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={()=>{}}>

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
                <ButtonsContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.default} type="submit" onClick={handleSubmit}>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;