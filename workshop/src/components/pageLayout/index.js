import React from 'react';
import Header from '../header/index';
import style from './wrapper.module.css'
import Aside from '../aside/sideBar';
import Footer from '../footer/footer';

function PageLayout(props) {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Aside />
                <div className={style.Origamis}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageLayout;