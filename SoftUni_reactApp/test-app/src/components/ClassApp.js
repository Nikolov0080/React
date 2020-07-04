import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class ClassApp extends Component {

  render() {

    return (
      <div className="ClassApp">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Learn React</a>
          <br></br>
          <h1> HOME PAGE</h1>
        </header>
      </div >
    );
  }
}



export default ClassApp;
