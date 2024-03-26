import React, { useState } from 'react';
import './Portfolio.css';
import Works from './Works';
import Jump from './portfolios/Jump';

const Portfolio = () => {
  const [selectedComponent, setSelectedComponent] = useState('Works');

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      Portfolio
      <div className='works_flam'>
        {selectedComponent === 'Works' && <Works onButtonClick={handleButtonClick} />}
        {selectedComponent === 'Jump' && <Jump />}
      </div>
    </div>
  );
}

export default Portfolio;
