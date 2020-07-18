import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShareThoughts from './pages/share-thoughts';

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" component={HomePage} />
                <Route to="/share" component={ShareThoughts} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;