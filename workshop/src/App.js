import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: false,
            user:undefined
        }
    }

    logIn = (user) => {
        this.setState({
            isLogged: !this.state.isLogged,
            user
        });
    }

    logOut = () => {
        this.setState({
            isLogged: false,
            user:undefined
        });

    }

    render() {
        return this.props.children
    }
}

export default App;