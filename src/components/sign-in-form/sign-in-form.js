import React from 'react';
import './sign-in-form.scss';
import ButtonPrimary from "../button-primary/button-primary";
import Input from "../Input";
import { Link } from 'react-router-dom';
import { SIGN_UP, RESET_PASSWORD } from "../../assets/path";

const SignInForm = () => {

    const handleSubmitForm = (event) => {
        event.preventDefault();
    }

    return (
        <div className="container">
            <form className="loginForm">
                <p className="loginForm__heading">Sign in to your account</p>
                <Input
                    type={'email'}
                    name={'email'}
                    placeholder={'Email'}
                    reuired={true}
                />
                <Input
                    type={'password'}
                    name={'password'}
                    placeholder={'Password'}
                    reuired={true}
                />
                <Link className="loginForm__link" to={RESET_PASSWORD}>Forgot password?</Link>
                <ButtonPrimary
                    type={'submit'}
                    onClick={handleSubmitForm}
                    className={'loginForm__btn'}
                    title={'Sign In'}
                />
                <p className="loginForm__link-singUp">Don't have an account? <Link to={SIGN_UP}>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default SignInForm;