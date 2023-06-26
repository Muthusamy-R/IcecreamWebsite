import React from 'react';
import logo from './logo.png';
import instagramLogo from './instagram-logo.png';

function Header({ instagramLink }) {
  return (
    <header>
      <div className="container header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Display the logo */}
          <h1 className="shop-title">Ice Cream Shop</h1> {/* Display the "Ice Cream Shop" text */}
        </div>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" /> {/* Display the Instagram logo */}
        </a>
      </div>
    </header>
  );
}

export default Header;
