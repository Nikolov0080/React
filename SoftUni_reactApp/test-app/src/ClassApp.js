import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { Button } from 'react-bootstrap';
import input from './input';

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCounters: false
    }

    this.toggleCounters = () => {
      this.setState({
        hideCounters: !this.state.hideCounters
      })
    }
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
          {this.state.hideCounters ?
            < div >
              <Button onClick={this.toggleCounters}> Show Counters</Button>
            </div>
            : (
              <div>
                <Counter counter={0} />
                <Button onClick={this.toggleCounters}> Hide Counters</Button>
              </div>
            )}
          <br></br>
          <p> Edit  and save to reload.</p>
          <p>src/App.js </p>

        </header>
      </div >
    );
  }
}



export default ClassApp;
