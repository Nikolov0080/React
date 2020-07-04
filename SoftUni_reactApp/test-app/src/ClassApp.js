import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { Button, Spinner } from 'react-bootstrap';
import Input from './input';

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCounters: false,
      isLoading: true
    }

    this.counters = [0, 34, 23, 76, 90];
  }

  toggleCounters = () => {
    this.setState({
      hideCounters: !this.state.hideCounters
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  renderCounters() {
    return this.counters.map((startNumber) => {
      return (
        <Counter counter={startNumber} />
      )
    })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <div className="ClassApp">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Spinner className='Loading' animation="border" variant="success" />
          </header>
        </div>
      )
    }
    return (
      <div className="ClassApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input></Input>
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
                {this.renderCounters()}

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
