import React, { Component } from 'react';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './loginPage.module.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {

        const newState = {}
        newState[type] = event.target.value;
        this.setState(newState);
    }

    render() {
        
        const {
            email,
            password
        } = this.state;

        return (
            <PageLayout>
                <div className={style.login_container}>
                    <div className={style.form_control}>
                        <Title title="Login" />
                        <Input onChange={(e) => this.onChange(e, 'email')} name="email" label="Email" type="text" placeholder="Email" />
                        <Input onChange={(e) => this.onChange(e, 'password')} name="password" label="Password" type="password" placeholder="Password" />
                        <Button value='Login' />
                    </div>
                </div>
            </PageLayout>
        )
    }

}

export default Login;