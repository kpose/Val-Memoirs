import React from "react";


const text= {
    color: 'white',
    };
  
function Avatar({ size, backgroundColor, initials}) {
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        }
        
    return (      
        <div style={style}>
            <p style ={text}>{initials}</p>
            </div>
    );
  
}
export default Avatar;