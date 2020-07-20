import React from 'react';
import Title from '../../components/title/title';
import PageLayout from '../../components/pageLayout/index';
import Input from '../../components/input/input';
import style from './registerPage.module.css';
import Button from '../../components/button/button';

const Register = () => {
    return (
        <PageLayout>
            <div className={style.login_container}>
                <div className={style.form_control}>
                    <Title title="Register" />
                    <Input name="email" label="Email" type="text"placeholder="Email" />
                    <Input name="password" label="Password" type="password" placeholder="Password"/>
                    <Input name="rePassword" label="Re-Password" type="password" placeholder="Re-Password" />
                    <Button value="Register" />
                </div>
            </div>

        </PageLayout>
    )
}

export default Register;