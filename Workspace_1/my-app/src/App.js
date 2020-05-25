import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';


class App extends Component {

  state = {
    persons: [
      { name: "George", age: 45 },
      { name: "Dragan", age: 32 },
      { name: "Ivan", age: 21 },
    ]
  }

  switchNameHandler = () => {

    this.setState({
      persons: [
        { name: "John Doe", age: 45 },
        { name: "Dragan", age: 32 },
        { name: "Ivan", age: 21 },
      ]
    }
    );
    // NOT LIKE THIS:  this.state.persons[0].name = 'NO!'
    // console.log('test ');
  }

  render() {
    return (
      <div className="App" >
        <h1>Random names and ages</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby fishing alone... forever alone</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

      </div>
    );
  }


  // return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'haaa'));
}

export default App;
