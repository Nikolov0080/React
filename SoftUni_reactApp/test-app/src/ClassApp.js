import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class ClassApp extends Component {
  // constructor(props) {
  //   super(props);


  //   this.updateCounterWithOne = () => {
  //     this.setState({
  //       counter: this.state.counter + 1
  //     })
  //   }
  //   this.updateCounterWithTwo = () => {
  //     this.setState({
  //       counter: this.state.counter + 2
  //     })
  //   }
  //   this.Decrease = () => {
  //     if (this.state.counter >= 1) {
  //       this.setState({
  //         counter: this.state.counter - 1
  //       })
  //     }
  //   }
  // }
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
          <Counter counter={0} />
          <Counter counter={10} />
          <Counter counter={20} />
          <Counter counter={30} />

          <p> Edit  and save to reload.</p>
          <p>src/App.js </p>

        </header>
      </div>
    );
  }
}



export default ClassApp;
