import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }

    this.updateCounterWithOne = ()=>{
      this.setState({
        counter: this.state.counter + 1
      })
    }
    this.updateCounterWithTwo = ()=>{
      this.setState({
        counter: this.state.counter + 2
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
          <h1>{this.props.data}</h1>
          <div className="counter">
            Counter: {this.state.counter}
            <br></br>
            <button onClick={this.updateCounterWithOne}>Increase with one</button>
            <br></br>
            <button onClick={this.updateCounterWithTwo}>Increase with two</button>

          </div>
          <Test data={this.props.data} name={this.props.name} />
          <p> Edit  and save to reload.</p>
          <p>src/App.js </p>

        </header>
      </div>
    );
  }
}



export default ClassApp;
