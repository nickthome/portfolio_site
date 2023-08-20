import React, { useState, useEffect } from 'react';
import './styles/Ticker.css'

function Ticker() {
    const phrases = [
        'Data scientist',
        'Avid traveler',
        'General viber'
    ];
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
        }, 3000); // Change the duration as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ticker">
            <div className="ticker-content">
                {phrases[currentPhrase]}
            </div>
        </div>
    );
}

export default Ticker;