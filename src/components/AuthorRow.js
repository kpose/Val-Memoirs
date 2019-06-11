import PropTypes from 'prop-types';
import React from 'react';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';


function AuthorRow ({ fullname, linkText, onPressLinkText }) {
    return (
        <div style = {styles.container}>
            <Avatar
                size={35}
                initials={getInitials(fullname)}
                backgroundColor={getAvatarColor(fullname)}
            />

            <p style={styles.text} >
                {fullname}
            </p>

            {!!linkText && (
                <button onClick= {onPressLinkText}>
                    <p> {linkText}</p>
                </button>
            )}
        </div>
    )
}

AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired,
};


const styles = {
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6,
        },
    };


    export default AuthorRow;