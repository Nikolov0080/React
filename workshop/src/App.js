import React, { useState, useEffect } from 'react';
import UserContext from './context/userContext';
import getCookie from './utils/getCookie';


const App = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);


    const logIn = (user) => {

        setUser({
            ...user,
            isLogged: true
        })
    }

    const logOut = () => {

        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        setUser({
            isLogged: false
        })
    }

    useEffect(() => {

        const token = getCookie.cookie;

        if (!token) { logOut(); return; }

        fetch('http://localhost:9999/api/user/verify', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Auth": token
            }
        }).then(promise => {
            return promise.json()
        }).then(async response => {
            // console.log(await response);
            if (response.status) {
                await logIn({
                    username: response.user.username,
                    id: response.user._id
                });

            } else {
                logOut();
            }

            setLoading(false)
        })
    }, []);

    if (loading) {
        return (
            <div>
                {"#".repeat(20)} <h1>Loading....</h1>   {"#".repeat(20)}
            </div>
        )
    }

    return (

        <UserContext.Provider value={{
            user,
            logIn,
            logOut
        }}>

            {props.children}
        </UserContext.Provider >

    )

}



export default App;