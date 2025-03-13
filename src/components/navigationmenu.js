import React from 'react';
// import { Link } from 'react-router-dom';
import './navigationmenu.css';

const NavigationMenu = ({
  setSelectedPage,
}) => {
  const rainbowColors = ['#FF0000', '#FF7F00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

  const renderRainbowText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ color: rainbowColors[index % rainbowColors.length] }}>
        {char}
      </span>
    ));
  };

  return (
    <div style={{ paddingTop: '1px', backgroundColor: '#D5FFFF', borderBottom: '1px solid grey', boxShadow: '0 2px 5px -2px #D3D3D3' }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', listStyleType: 'none' }}>
          <div style={{ fontSize: '34px', fontWeight: 'bold' }}>{renderRainbowText('LEARNING TO READ IS FUN')}</div>
          <li style={{paddingTop: '10px'}}><a href="#about" onClick={() => setSelectedPage('about')} style={{ fontSize: '20px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>About</a></li>
          <li style={{paddingTop: '10px'}}><a href="#product" onClick={() => setSelectedPage('product')} style={{ fontSize: '20px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Learning Tools</a></li>
          <li style={{paddingTop: '10px'}}><a href="#booktutor" onClick={() => setSelectedPage('booktutor')} style={{ fontSize: '20px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Book Tutor</a></li>
          <li style={{paddingTop: '10px'}}><a href="#contact" onClick={() => setSelectedPage('contact')} style={{ fontSize: '20px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;