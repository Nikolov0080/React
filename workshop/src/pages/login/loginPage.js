import React, { Component } from 'react';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './loginPage.module.css';
import UserContext from '../../context/userContext';
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static contextType = UserContext;

    handleChange = (event, type) => {

        const newState = {}
        newState[type] = event.target.value;
        this.setState(newState);
        console.log(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state;

        const body = JSON.stringify({username,password})
        
        fetch('http://localhost:9999/api/user/login',{
            method:"POST",
            body:body,
            headers:{
                'Content-Type':"application/json"
            }
        }).then( async promise=>{
            console.log(await promise.json());
        })
    }

    render() {
       
        return (
            <PageLayout>
                <div className={style.login_container}>
                    <div className={style.form_control}>
                        <form onSubmit={this.handleSubmit}>
                            <Title title="Login" />
                            <Input onChange={(e) => this.handleChange(e, 'username')} name="username" label="username" type="text" placeholder="Username" />
                            <Input onChange={(e) => this.handleChange(e, 'password')} name="password" label="password" type="password" placeholder="Password" />
                            <Button value='Login' />
                        </form>

                    </div>
                </div>
            </PageLayout>
        )
    }

}

export default Login;