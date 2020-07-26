import React, { Component } from 'react';
import Title from '../../components/title/title';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './registerPage.module.css';
import Button from '../../components/button/button';
import auth from '../../utils/auth';


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }

    }


    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            username,
            password,
            rePassword
        } = this.state;


        if (password !== rePassword) {
            return this.props.history.push('/error');
        }
        const body = JSON.stringify({ username, password })

        
        await auth('http://localhost:9999/api/user/register',
            body,
            () => {
                console.log("Registered")
                this.props.history.push('/')
            },
            (err) => {
                console.log("Error" + err)
            }
        )
  
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value;
        this.setState(newState);
    }

    render() {

        return (
            <PageLayout>
                <form className={style.login_container} onSubmit={this.handleSubmit}>
                    <div className={style.form_control}>
                        <Title title="Register" />
                        <Input onChange={(e) => this.onChange(e, 'username')} name="username" label="Username" type="text" placeholder="Username" />
                        <Input onChange={(e) => this.onChange(e, 'password')} name="password" label="Password" type="password" placeholder="Password" />
                        <Input onChange={(e) => this.onChange(e, 'rePassword')} name="rePassword" label="Re-Password" type="password" placeholder="Re-Password" />
                        <Button value="Register" />
                    </div>
                </form>

            </PageLayout>
        )
    }

}

export default Register;