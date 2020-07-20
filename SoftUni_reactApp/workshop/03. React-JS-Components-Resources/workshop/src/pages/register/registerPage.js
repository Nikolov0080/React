import React, { Component } from 'react';
import Title from '../../components/title/title';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './registerPage.module.css';
import Button from '../../components/button/button';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
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
            password,
            rePassword
        } = this.state;
        
        return (
            <PageLayout>
                <div className={style.login_container}>
                    <div className={style.form_control}>
                        <Title title="Register" />
                        <Input onChange={(e)=> this.onChange(e,'email')} name="email" label="Email" type="text" placeholder="Email" />
                        <Input onChange={(e)=> this.onChange(e,'password')} name="password" label="Password" type="password" placeholder="Password" />
                        <Input onChange={(e)=> this.onChange(e,'rePassword')} name="rePassword" label="Re-Password" type="password" placeholder="Re-Password" />
                        <Button value="Register" />
                    </div>
                </div>

            </PageLayout>
        )
    }

}

export default Register;