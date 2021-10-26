import React from 'react';
import ButtonSmall from "../button-small";
import './header.scss';
import LogoHeader from "../logo-header";

const Header = () => {
    return (
        <div className='mainHeader'>
            {/*<div className='mainHeader__logo'>Logotype</div>*/}
            <LogoHeader />
            <ButtonSmall />
        </div>
    );
};

export default Header;