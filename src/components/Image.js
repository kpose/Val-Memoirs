import React from 'react';

export default function Image({ image }) {
    return <img className="SinglePhoto" src={image.urls.thumb} alt=""/>
}