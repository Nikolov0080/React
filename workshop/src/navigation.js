import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import HomePage from './pages/home/home-page';
// import ShareThoughts from './pages/share-thoughts';
// import Login from './pages/login/loginPage';
// import Register from './pages/register/registerPage';
// import Profile from './pages/profile/profile';
// import ErrorPage from './pages/error/error';


const HomePage = React.lazy(() => import('./pages/home/home-page'));
const ShareThoughts = React.lazy(() => import('./pages/share-thoughts'));
const Login = React.lazy(() => import('./pages/login/loginPage'));
const Register = React.lazy(() => import('./pages/register/registerPage'));
const Profile = React.lazy(() => import('./pages/profile/profile'));
const ErrorPage = React.lazy(() => import('./pages/error/error'));


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/share" exact component={ShareThoughts} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/profile/:id" exact component={Profile} />
                    <Route path='/error' component={ErrorPage} />
                    {/* <Redirect from='*' to='/error' /> */}
                
                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;