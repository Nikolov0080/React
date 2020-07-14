import React from 'react';
import './App.css';
import Top from './top';


function User(props) {
    console.log(props.match)
    console.log(props.location)
    console.log(props.history)

    return (
        <div className="App">

            <header className="App-header">
                <Top></Top>
                Search
          </header>

        </div>




    );
}

export default User;