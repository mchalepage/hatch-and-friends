import React from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We make pictures, products, stories, shorts, and much more. For a portfolio of work, please email <a className='email-link' href = "mailto: katie@hatchandfriends.com">katie@hatchandfriends.com</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
