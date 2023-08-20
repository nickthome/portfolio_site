import React from 'react';
import './styles/Resume.css';

function Resume() {
    return (
        <div className="app-container">
            <a className="download-link" href="./NickThomeResume2023.pdf" download="NickThomeResume2023.pdf">
                <h5>Resume</h5>
            </a>
        </div>
    );
}

export default Resume;