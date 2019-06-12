import React from "react";

import PropTypes from 'prop-types';


import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

function AuthorRow({ fullname, linkText, onPressLinkText}) {
  
        
    return (      
        <div style={container}>
           <div style={inner}> <Avatar
                size={30}
                initials={getInitials(fullname)}
                backgroundColor={getAvatarColor(fullname)}
            />
            </div>

            <div style={inner}> <h5 style = {text}> {fullname} </h5></div>

            {!!linkText && (
                <div> <button onClick={onPressLinkText}>
                    <h6> {linkText} </h6>
                </button> </div>
            )}
        </div>
    );
  
}

const container = {

  display:'flex',
  justifyContent: 'center',
  padding: '3px',
  
}

const inner= {
    margin:'10px',
}

const text= {
    flex: 1,
    marginHorizontal: 6,
    }

AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired,
    };

export default AuthorRow;