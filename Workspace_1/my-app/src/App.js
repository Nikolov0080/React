import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';


class App extends Component {



  render() {
    return (
      <div className="App" >
        <h1>Random names and ages</h1>
        <button>Switch Name</button>
        <Person name="George" age="23">Hobby fishing alone... forever alone</Person>
        <Person name="Adi" age="12" />
        <Person name="Azis" age="55" />
        <Person name="Minka" age="36" />

      </div>
    );
  }


  // return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'haaa'));
}

export default App;
