import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class ClassApp extends Component {
  constructor(props){
super(props);
console.log(props)
  }
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
          <h1>{this.props.data}</h1>
            Edit
                   <Test data={this.props.data} name='componentHere'>
              src/App.js
                    </Test> and save to reload.
          <p>
                </p>

        </header>
      </div>
    );
  }
}



export default ClassApp;
