import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchButton = (props) => {
    return (
        <button className="search-button" {...props}>
            {props.title}
        </button>
    );
};

SearchButton.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SearchButton;