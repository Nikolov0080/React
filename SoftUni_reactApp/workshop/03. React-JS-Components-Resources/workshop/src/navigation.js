import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShareThoughts from './pages/share-thoughts';

const Navigation = () => {
console.log(13213213)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/share" component={ShareThoughts} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;