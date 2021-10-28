import React from 'react';
import './input.scss'
import PropTypes from 'prop-types';

const Input = ({required, type, name, placeholder, className, title, onChange, min, max}) => {

    return (
        <>
            <input
                maxLength={max}
                minLength={min}
                onChange={onChange}
                type={type}
                name={name}
                title={title}
                placeholder={placeholder}
                className={className}
                required={required}/>
        </>
    );
};

Input.propTypes = {
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
}

Input.defaultProps = {
    required: false,
    type: null,
    name: null,
    className: null,
}

export default Input;