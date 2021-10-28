import React from 'react';
import './button-primary.scss';
import PropTypes from "prop-types";

const ButtonPrimary = ({className, submit, onClick, title, disabled}) => {
    return (
        <button onClick={onClick} className={className} type={submit} disabled={disabled}>{title}</button>
    );
};

ButtonPrimary.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
}

ButtonPrimary.defaultProps = {
    className: null,
    type: null,
    onClick: null,
    title: null,
}

export default ButtonPrimary;