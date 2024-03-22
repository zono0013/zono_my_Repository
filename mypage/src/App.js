import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="App-inSide">
        <About/>
      </div>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
