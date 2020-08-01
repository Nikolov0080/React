import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './loginPage.module.css';
import UserContext from '../../context/userContext';
import auth from '../../utils/auth';


const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(UserContext);
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()


        const body = JSON.stringify({ username, password })

        await auth('http://localhost:9999/api/user/login',
            body,
            (user) => {
                context.logIn(user);
                console.log("Logged")
                history.push('/')
            },
            (err) => {
                console.log("Error" + err)
                history.push('/error')
            }
        )
    }

    return (
        <PageLayout>
            <div className={style.login_container}>
                <div className={style.form_control}>
                    <form onSubmit={handleSubmit}>
                        <Title title="Login" />
                        <Input onChange={e => setUsername(e.target.value)} name="username" label="username" type="text" placeholder="Username" />
                        <Input onChange={e => setPassword(e.target.value)} name="password" label="password" type="password" placeholder="Password" />
                        <Button value='Login' />
                    </form>
                </div>
            </div>
        </PageLayout>
    )

}


export default Login;