import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


function Avatar({size, initials, backgroundColor }) {
    const style = {
        width:size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
    }

    return (
        <div style = {style} />
    )
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    //backgroundColor: ColorPropType.isRequired,
    };

export default Avatar;