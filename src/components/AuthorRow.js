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

            <div> <h5 style = {text}> {fullname} </h5></div>

            {!!linkText && (
                <div style={inner}> <button onClick={onPressLinkText}>
                    <h6> {linkText} </h6>
                </button> </div>
            )}
        </div>
    );
  
}

const container = {
   border: '1px solid #000',
  display:'flex',
  justifyContent: 'center',
  padding: '3px',
  
}

const inner= {
    margin:'15px',
    
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