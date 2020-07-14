import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          Learn React

        <Switch>
          <Link to="/search" > go to Search Page</Link>
          <Link to="/user" > go to User Page</Link>
          <Link to="/" > go to Home</Link>
        </Switch>



      </header>
    </div>
  );
}

export default App;
