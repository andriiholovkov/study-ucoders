import React from 'react';
import './header.scss';
import LogoHeader from "../logo-header";
import {Link} from "react-router-dom";
import {SIGN_IN, SIGN_UP} from "../../assets/path";

const Header = ({isSingInPage, setIsSingInPage, className}) => {

    return (
        <div className='mainHeader'>
            <LogoHeader />
            {isSingInPage
                ? <Link className={className} onClick={() => setIsSingInPage(false)} to={SIGN_UP}>Sign Up</Link>
                : <Link className={className} onClick={() => setIsSingInPage(!false)} to={SIGN_IN}>Sign In</Link>
            }
            {/*<ButtonSecondary title={'Sign In'}/>*/}
        </div>
    );
};

export default Header;