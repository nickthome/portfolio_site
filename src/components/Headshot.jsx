import React from 'react';
import headshot from '../assets/HeadshotNoBG.png'

function Headshot() {

    return (
        <img src={headshot} alt='headshot' style={{
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: '10% 10%',
          }}/>
    );
}

export default Headshot;