import React from 'react';
import './App.css';
import Person from './Person/person';


function App() {
  return (
    <div className="App">
      <h1>Random names and ages</h1>
      <Person name="George" age="23">Hobby fishing alone... forever alone</Person>
      <Person  name="Adi" age="12"/>
      <Person  name="Azis" age="55"/>
      <Person  name="Minka" age="36"/>

    </div>
  );


  // return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'haaa'));
}

export default App;
