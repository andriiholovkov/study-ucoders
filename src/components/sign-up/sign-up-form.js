import React, { useState } from 'react';
import './sign-up-form.scss';
import ButtonPrimary from "../button-primary/button-primary";
import Input from '../Input';
import { Link } from 'react-router-dom';
import { SIGN_IN } from "../../assets/path";

const SignUpForm = () => {
    const [inputValue, setInputValue] = useState('');
    console.log('inputValue>>>', inputValue);

    const handleSubmitForm = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
        console.log(inputValue);
    }

    return (
        <form className='signUpForm'>
            <p className="signUpForm__heading">Sign Up</p>
            <div className="signUpForm__input-wrapper">
                <Input
                    onChange={handleChange}
                    type={'text'}
                    name={'first name'}
                    placeholder={'First Name'}
                />
                <Input
                    type={'text'}
                    name={'last name'}
                    placeholder={'Last Name'}
                />
                <Input
                    type={'text'}
                    name={'username'}
                    placeholder={'Username*'} isNecessary
                />
                <Input
                    type={'email'}
                    name={'email'}
                    placeholder={'Email address*'}
                    reuired={true}
                />
                <Input
                    type={'password'}
                    name={'password'}
                    placeholder={'Create password*'}
                    reuired={true}
                />
                <Input
                    type={'password'}
                    name={'confirm password'}
                    placeholder={'Confirm password*'}
                    reuired={true}
                />
            </div>
            <ButtonPrimary
                onClick={handleSubmitForm}
                type={'submit'}
                className={'loginForm__btn'}
                title={'Sign Up'}
            />
            <span className="signUpForm__link-singIn">Have an account? <Link to={SIGN_IN}>Sign In</Link></span>
        </form>
    );
};

export default SignUpForm;