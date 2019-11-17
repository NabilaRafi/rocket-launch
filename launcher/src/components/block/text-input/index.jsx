import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TextInput = (props) => {
    return (
        <input className="text-input" type="date"  name={props.name} value={props.value} {...props} />
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
}

export default TextInput;