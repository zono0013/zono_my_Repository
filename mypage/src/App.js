// App.js

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Game from './Game';
import SNS from './SNS';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('About');

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header onButtonClick={handleButtonClick} />
      </header>
      <div className="App-inSide">
        {selectedComponent === 'About' && <About />}
        {selectedComponent === 'Portfolio' && <Portfolio />}
        {selectedComponent === 'Game' && <Game />}
        {selectedComponent === 'SNS' && <SNS />}
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
