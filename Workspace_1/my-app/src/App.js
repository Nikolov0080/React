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

  switchNameHandler = (name) => {

    this.setState({
      persons: [
        { name: "John Doe", age: 45 },
        { name: name, age: 32 },
        { name: "Ivan", age: 21 },
      ]
    }
    );
  }

  changeNameHandler = (event) => {

    this.setState({
      persons: [
        { name: "George", age: 45 },
        { name: event.target.value, age: 32 },
        { name: "Ivan", age: 21 },
      ]
    }
    );
  }


  render() {

    const style = {
      font: "inherit",
      background: 'blue',
      color: 'white',
      padding:'12px',
      margin:'11px'

    }

    return (
      <div className="App" >
        <h1>Random names and ages</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('adnajdkjad')}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.changeNameHandler}>
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
        </Person>

      </div>
    );
  }
}

export default App;
