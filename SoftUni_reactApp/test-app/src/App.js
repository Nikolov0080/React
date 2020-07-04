import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import './ClassApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Edit
          <Test name='componentHere'>
            src/App.js
            </Test> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
