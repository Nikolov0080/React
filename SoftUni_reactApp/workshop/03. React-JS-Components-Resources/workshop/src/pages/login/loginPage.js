import React from 'react';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './loginPage.module.css';

const Login = () => {
    return (
        <PageLayout>
            <div className={style.login_container}>
                <div className={style.form_control}>
                    <Title title="Login" />
                    <Input label="Email" type="text" placeholder="email"/>
                    <Input  label="Password" type="password" placeholder="password"/>
                    <Button value='Login' />
                </div>
            </div>
        </PageLayout>
    )
}

export default Login;