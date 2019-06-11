import React from 'react';
import PropTypes from 'prop-types';


function Avatar({size, initials, backgroundColor }) {
    const style = {
        width:size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',

        textStyle: {
            color:'white',
        },       
    };

    return (
        <div style= {style}>
        <p style = {style.textStyle}> {initials} </p>
        </div>
    );
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    //backgroundColor: ColorPropType.isRequired,
    };

export default Avatar;