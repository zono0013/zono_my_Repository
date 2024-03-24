// Header.js

import React from 'react';
import "./Header.css"

const Header = ({ onButtonClick }) => {
  return (
    <div className='header'>
      <h1>
        <a href='#'>ZONO Code</a>
      </h1>
      <div className='buttoms'>
        <button onClick={() => onButtonClick('About')}>ABOUT</button>
        <button onClick={() => onButtonClick('Portfolio')}>Portfolio</button>
        <button onClick={() => onButtonClick('Game')}>Game Play</button>
        <button onClick={() => onButtonClick('SNS')}>SNS</button>
      </div>
    </div>
  );
};

export default Header;
