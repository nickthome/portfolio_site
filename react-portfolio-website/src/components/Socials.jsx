import React from 'react';
import './styles/Socials.css';  // Assuming you'll have styles in a separate file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';


const Socials = () => {
  const socialLinks = {
    beli: {link: 'https://app.beliapp.com/lists/nickthome', icon: faBurger},
    spotify: {link: 'https://open.spotify.com/user/thechileanprince', icon:faSpotify},
    instagram: {link: 'https://www.instagram.com/nick.thome/', icon: faInstagram},
    linkedin: {link: 'https://www.linkedin.com/in/nickthome/', icon: faLinkedinIn},
  };

  return (
    <div className="social-media-bar">
        {Object.entries(socialLinks).map(([platform, { link, icon }]) => (
            <a key={platform} href={link} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                <FontAwesomeIcon icon={icon} size="xl" />
            </a>
        ))}
    </div>
);

};

export default Socials;