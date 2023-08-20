import React from 'react';
import './styles/SOTW.css';  // Assuming you'll have styles in a separate file

function SOTW() {
    return (
        <iframe
            className="iframe-container"
            title='songOfTheWeek'
            src="https://open.spotify.com/embed/playlist/1y29Z47sX8mbRgYuBMn9Oz?utm_source=generator&theme=0"
            height="150"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>  
    );
}

export default SOTW;