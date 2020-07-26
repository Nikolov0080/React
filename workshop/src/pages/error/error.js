import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/index';
import style from './error.module.css'

const img = "https://neosmart.net/wiki/wp-content/uploads/sites/5/2014/06/0x000000EA.png"
class ErrorPage extends Component {

    render() {

        return (
            <PageLayout>
                <div className={style.error_container}>
                    <img src={img} alt="error" />
                    <h1>Error man </h1>
                </div>


            </PageLayout>
        )
    }
}

export default ErrorPage;