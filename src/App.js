import React from 'react';
import whiteLogo from './whiteLogo.svg';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={whiteLogo} className="App-logo" alt="logo" />
        <p className='description-text'>
          We make pictures, products, stories, shorts, and much more. For a portfolio of work, please email <a className='email-link' href = "mailto: katie@hatchandfriends.com">katie@hatchandfriends.com</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
