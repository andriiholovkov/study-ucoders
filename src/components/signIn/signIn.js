import React from 'react';
import './signIn.scss';
import ButtonMedium from "../button-medium/btnMedium";

const SignIn = () => {
    return (
        <div className="container">
            <form className="loginForm">
                <p className="loginForm__heading">Sign in to your account</p>
                <input className="loginForm__email" name="email" type="email" placeholder="Email"/>
                <input className="loginForm__password" name="password" type="password" placeholder="Password"/>
                <a className="loginForm__link" href="http://htmlbook.ru/html/a">Forgot password?</a>
                <ButtonMedium />
                <p className="loginForm__link-singUp">Don't have an account? <a href="https://www.google.com/">Sign Up</a></p>
            </form>
        </div>
    );
};

export default SignIn;