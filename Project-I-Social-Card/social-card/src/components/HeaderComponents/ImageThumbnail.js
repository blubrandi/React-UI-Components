import React from 'react';
import './Header.css';

function ImageThumbnail() {
    return (
        <img className='headerImage' src={require("../images/lambdacrest.png")} alt='' />
    )
}

export default ImageThumbnail;