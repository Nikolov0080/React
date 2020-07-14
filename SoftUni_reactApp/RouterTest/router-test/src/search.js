import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Top from './top';

function Search() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
         Search
         <Link to="/" >go to Home Page</Link>
         <Link to="/user/fdsfdsf" > go to User Page</Link>
   <Top />
      </header>
    </div>
  );
}

export default Search;