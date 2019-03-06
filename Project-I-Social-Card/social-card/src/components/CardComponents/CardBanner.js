import React from 'react';
import './Card.css';

function CardBanner() {
    return (
        <div className='cardBanner'>
            <img className="bannerImage" src={require("../images/reactbackground.png")} alt='' />
        </div>
    )
}

export default CardBanner