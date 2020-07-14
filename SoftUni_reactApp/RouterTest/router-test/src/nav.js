import React from 'react';
import {
    BrowserRouter, Route
} from 'react-router-dom';
import App from './App';
import Search from './search';
import User from './user';


const Nav = () => {
    return(
        <BrowserRouter>
        <Route path="/" exact component={App}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/user/:userId" exact component={User}/>
        </BrowserRouter>
    )
}

export default Nav