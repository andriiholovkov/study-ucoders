import React from 'react';
import './button-secondary.scss'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const ButtonSecondary = ({className, type, title}) => {
    return (
        <button
            className={className}
            type={type}
        ><Link>{title}</Link>
        </button>
    )
};

ButtonSecondary.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string.isRequired
}

ButtonSecondary.defaultProps = {
    className: null,
    type: null,
    onClick: null,
    title: null,
}

export default ButtonSecondary;