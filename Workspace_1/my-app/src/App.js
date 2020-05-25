import React from 'react';
import './App.css';
import Person from './Person/person';

function App() {
  return (
    <div className="App">
      <h1>h1 text</h1>
      <Person></Person>
    </div>
  );


  // return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'haaa'));
}

export default App;
