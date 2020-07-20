import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShareThoughts from './pages/share-thoughts';
import Login from './pages/login/loginPage';
import Register from './pages/register/registerPage';

const Navigation = () => {
    console.log(13213213)
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/share" exact component={ShareThoughts} />
                <Route path="/login"  exact component={Login} />
                <Route path="/register"  exact component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;