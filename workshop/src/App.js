import React, { Component } from 'react';
import UserContext from './context/userContext';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: false,
            user: undefined
        }
    }

    logIn = (user) => {
        this.setState({
            isLogged: !this.state.isLogged,
            user
        });
    }

    logOut = () => {
        // document.cookie
        this.setState({
            isLogged: false,
            user: undefined
        });
    }

    render() {

        const {
            isLogged,
            user
        } = this.state;

        return (
            <UserContext.Provider value={{
                isLogged,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>

                {this.props.children}
            </UserContext.Provider >
        )
    }
}

export default App;