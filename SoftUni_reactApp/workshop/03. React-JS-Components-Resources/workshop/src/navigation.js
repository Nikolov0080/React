import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShareThoughts from './pages/share-thoughts';
import Login from './pages/login/loginPage';
import Register from './pages/register/registerPage';
import Profile from './pages/profile/profile';

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/share" exact component={ShareThoughts} />
                <Route path="/login"  exact component={Login} />
                <Route path="/register"  exact component={Register} />
                <Route path="/profile/userId---Here"  exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;