import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';


const App = props => {
  const [personState, setPersons] = useState(
    {
      persons: [
        { name: "George", age: 45 },
        { name: "Dragan", age: 32 },
        { name: "Ivan", age: 21 },
      ]
    }
  );

  const switchNameHandler = () => {

    setPersons({
      persons: [
        { name: "John Doe", age: 45 },
        { name: "Minka ", age: 32 },
        { name: "Shisho Bakshisho", age: 21 },
      ]
    })
  }

  return (
    <div className="App" >
      <h1>Random names and ages</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>

      <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );

}

export default App;

  // state = {
  //   persons: [
  //     { name: "George", age: 45 },
  //     { name: "Dragan", age: 32 },
  //     { name: "Ivan", age: 21 },
  //   ]
  // }

  // switchNameHandler = () => {

  //   this.setState({
  //     persons: [
  //       { name: "John Doe", age: 45 },
  //       { name: "Dragan", age: 32 },
  //       { name: "Ivan", age: 21 },
  //     ]
  //   }
  //   );
