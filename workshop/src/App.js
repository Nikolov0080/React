import React, { Component } from 'react';
import UserContext from './context/userContext';

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: null,
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
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        this.setState({
            isLogged: false,
            user: undefined
        });
    }

    componentDidMount() {

        const token = getCookie("x-auth-token");
        console.log(token)

        if (!token) { this.logOut(); return; }

        fetch('http://localhost:9999/api/user/verify', {
            method: "POST",
            body: JSON.stringify({ token }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(promise => {
            return promise.json()
        }).then(async response => {
            console.log(await response);
            if (response.status) {
              await  this.logIn({
                  username:response.user.username,
                  id:response.user._id
              });
            } else {
                this.logOut();
            }
        })
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