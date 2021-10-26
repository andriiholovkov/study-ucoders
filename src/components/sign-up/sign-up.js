import React from 'react';
import './sign-up.scss';
import ButtonMedium from "../button-medium/btnMedium";

const SignUp = () => {
    return (
        <from className='signUpForm'>
            <p className="signUpForm__heading">Sign Up</p>
            <div className="signUpForm__input-wrapper">
                <input className="signUpForm__first-name" name="first name" type="text" placeholder="First Name"/>
                <input className="signUpForm__last-name" name="last name" type="text" placeholder="Last Name"/>
                <input className="signUpForm__username" name="username" type="text" placeholder="Username*" required/>
                <input className="signUpForm__email" name="email" type="email" placeholder="Email address*" required/>
                <input className="signUpForm__password" name="password" type="password" placeholder="Create password*" required/>
                <input className="signUpForm__password" name="password" type="password" placeholder="Confirm password*" required/>
            </div>
            <ButtonMedium />
            <span className="signUpForm__link-singIn">Have an account? <a href="">Sign In</a></span>

        </from>
    );
};

export default SignUp;