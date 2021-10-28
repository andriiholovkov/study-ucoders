import React, {useEffect, useState} from 'react';
import './sign-up-form.scss';
import ButtonPrimary from "../button-primary/button-primary";
import Input from '../Input';
import { Link } from 'react-router-dom';
import { SIGN_IN } from "../../assets/path";
import postFormData from './registration';

const SignUpForm = () => {
    const url = 'http://186a-213-110-115-132.ngrok.io/api/v1/auth/register/';

     const [formState, setFormState] = useState({
         firstName: '',
         lastName: '',
         userName: '',
         email: '',
         password: '',
         password2: '',
    })

    // const [formStateError, setFormStateError] = useState({
    //     firstName: '',
    //     lastName: '',
    //     userName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // });

    //const [validForm, setValidForm] = useState(false);
    const disabled = !formState.userName || !formState.email || !formState.password || !formState.confirmPassword;

    useEffect((event) => {

    }, [formState])

    const handleSubmitForm = (event) => {
        event.preventDefault();

        postFormData(url, formState)
            .then((data) => {
            console.log(data);
        });
        // if (formStateError || validForm) {
        //     return <div>{formStateError}</div>
        // }

        // if (formState.firstName.length > 149) {
        //     setFormStateError({
        //         ...formStateError,
        //         firstName: 'max length 150 symbols',
        //     });
        // } else {
        //     setFormStateError({
        //         ...formStateError,
        //         firstName: '',
        //     });
        // }
        //
        // if (formState.lastName.length > 149) {
        //     setFormStateError({
        //         ...formStateError,
        //         lastName: 'max length 150 symbols',
        //     });
        // } else {
        //     setFormStateError({
        //         ...formStateError,
        //         lastName: '',
        //     });
        // }

        // if (formState.userName.length < 1 ) {
        //     setFormStateError({
        //         ...formStateError,
        //         userName: 'Min length 2 symbols',
        //     });
        // } else {
        //     setFormStateError({
        //         ...formStateError,
        //         userName: '',
        //     });
        // }

        // if (formState.email.length < 2) {
        //     setFormStateError({
        //         ...formStateError,
        //         email: 'Min length 2 symbols',
        //     });
        // } else {
        //     setFormStateError({
        //         ...formStateError,
        //         email: '',
        //     });
        // }

        // if (formState.password.length === 0) {
        //     setFormStateError({
        //         ...formStateError,
        //         password: 'Min length 2 symbols',
        //     });
        // } else {
        //     setFormStateError({
        //         ...formStateError,
        //         password: '',
        //     });
        // }

        // if (formState.confirmPassword.length < 2) {
        //     setFormStateError({
        //         ...formStateError,
        //         confirmPassword: 'Min length 2 symbols',
        //     });
        // } else {
        //     setFormStateError({
        //         ...formStateError,
        //         confirmPassword: '',
        //     });
        // }

        console.log('userName length >>', formState.userName.length);
        //console.log('userName error >>', formStateError.userName);

        // if (formState.lastName.length > 149) {
        //     setFormStateError({
        //         ...formStateError,
        //         lastName: 'max length 150 symbols',
        //     });
        // }
        //
        // if (formState.userName.length < 1) {
        //     setFormStateError({
        //         ...formStateError,
        //         userName: 'This field is required',
        //     });
        // }

        // console.log('formStateError.firstName>>>', formStateError.firstName);

        // if (formState.firstName.length < 1) {
        //     setFormStateError('This field is required');
        // }

        // if (formState.lastName.length < 1) {
        //     setFormStateError('This field is required');
        // }
        //
        // if (formState.userName.length < 1) {
        //     setFormStateError('This field is required');
        // }
        //
        // if (formState.email.length < 1) {
        //     setFormStateError('This field is required');
        // }
        //
        // if (formState.password.length < 1) {
        //     setFormStateError('This field is required');
        // }
        //
        // if (formState.confirmPassword.length < 1) {
        //     setFormStateError('This field is required');
        // }


    }

    const formHandler = (event) => {
        const targetName = event.target.name;
        setFormState({
            ...formState,
            [targetName]: event.target.value,
        })
    }
    console.log('firstName', formState.firstName);

    return (
        <form className='signUpForm'>
            <p className="signUpForm__heading">Sign Up</p>
            <div className="signUpForm__input-wrapper">
                <Input
                    onChange={formHandler}
                    type={'text'}
                    name={'firstName'}
                    placeholder={'First Name'}
                    max={150}
                />
                {/*{(formStateError.firstName) ? <div className="signUpForm__error">{formStateError.firstName}</div> : null}*/}
                <Input
                    onChange={formHandler}
                    type={'text'}
                    name={'lastName'}
                    placeholder={'Last Name'}
                    max={150}
                />
                {/*{(formState.lastName) ? <div className="signUpForm__error">{formStateError.lastName}</div> : null}*/}
                <Input
                    onChange={formHandler}
                    type={'text'}
                    name={'userName'}
                    placeholder={'Username*'}
                    required={true}
                    min={1}
                />
                    {/*{(formState.userName) ? <div className="signUpForm__error">{formStateError.userName}</div> : null}*/}
                <Input
                    onChange={formHandler}
                    type={'email'}
                    name={'email'}
                    placeholder={'Email address*'}
                    required={true}
                    min={1}
                />
                {/*{(formState.email) ? <div className="signUpForm__error">{formStateError.email}</div> : null}*/}
                <Input
                    onChange={formHandler}
                    type={'password'}
                    name={'password'}
                    placeholder={'Create password*'}
                    required={true}
                    min={1}
                />
                {/*{(formState.password) ? <div className="signUpForm__error">{formStateError.password}</div> : null}*/}
                <Input
                    onChange={formHandler}
                    type={'password'}
                    name={'password2'}
                    placeholder={'Confirm password*'}
                    required={true}
                    min={1}
                />
                {/*{(formState.confirmPassword) ? <div className="signUpForm__error">{formStateError.confirmPassword}</div> : null}*/}
            </div>
            <ButtonPrimary
                onClick={handleSubmitForm}
                type={'submit'}
                className={'loginForm__btn'}
                title={'Sign Up'}
                disabled={disabled}
            />
            <span className="signUpForm__link-singIn">Have an account? <Link to={SIGN_IN}>Sign In</Link></span>
        </form>
    );
};

export default SignUpForm;